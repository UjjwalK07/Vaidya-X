from flask import Flask, request, jsonify, session
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash
from datetime import datetime
import os
from functools import wraps

app = Flask(__name__)
app.config['SECRET_KEY'] = 'vaidya-x-secret-key-2024'
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:6562@localhost/vaidya_x'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
CORS(app, supports_credentials=True)

# Database Models
class Doctor(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(128), nullable=False)
    specialization = db.Column(db.String(100), nullable=False)
    hospital = db.Column(db.String(200), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

class Patient(db.Model):
    id = db.Column(db.String(10), primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    age = db.Column(db.Integer, nullable=False)
    diseases = db.Column(db.Text, nullable=True)
    medical_history = db.Column(db.Text, nullable=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

class DrugInteraction(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    drug_name_1 = db.Column(db.String(100), nullable=False)
    drug_name_2 = db.Column(db.String(100), nullable=False)
    interaction_type = db.Column(db.String(50), nullable=False)  # 'drug-drug' or 'drug-disease'
    description = db.Column(db.Text, nullable=False)
    severity = db.Column(db.String(20), nullable=False)  # 'low', 'medium', 'high'

class Prescription(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    doctor_id = db.Column(db.Integer, db.ForeignKey('doctor.id'), nullable=False)
    patient_id = db.Column(db.String(10), db.ForeignKey('patient.id'), nullable=False)
    medicines = db.Column(db.Text, nullable=False)
    result = db.Column(db.String(20), nullable=False)  # 'safe', 'warning', 'danger'
    interaction_details = db.Column(db.Text, nullable=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

# Authentication decorator
def login_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if 'doctor_id' not in session:
            return jsonify({'error': 'Authentication required'}), 401
        return f(*args, **kwargs)
    return decorated_function

# API Routes
@app.route('/api/signup', methods=['POST'])
def signup():
    data = request.get_json()
    
    # Check if doctor already exists
    if Doctor.query.filter_by(email=data['email']).first():
        return jsonify({'error': 'Doctor already exists'}), 400
    
    # Create new doctor
    doctor = Doctor(
        name=data['name'],
        email=data['email'],
        password_hash=generate_password_hash(data['password']),
        specialization=data['specialization'],
        hospital=data['hospital']
    )
    
    db.session.add(doctor)
    db.session.commit()
    
    return jsonify({'message': 'Doctor registered successfully'}), 201

@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()
    doctor = Doctor.query.filter_by(email=data['email']).first()
    
    if doctor and check_password_hash(doctor.password_hash, data['password']):
        session['doctor_id'] = doctor.id
        session['doctor_name'] = doctor.name
        session['doctor_specialization'] = doctor.specialization
        
        return jsonify({
            'message': 'Login successful',
            'doctor': {
                'id': doctor.id,
                'name': doctor.name,
                'email': doctor.email,
                'specialization': doctor.specialization,
                'hospital': doctor.hospital
            }
        }), 200
    
    return jsonify({'error': 'Invalid credentials'}), 401

@app.route('/api/logout', methods=['POST'])
def logout():
    session.clear()
    return jsonify({'message': 'Logged out successfully'}), 200

@app.route('/api/doctor/profile', methods=['GET'])
@login_required
def get_doctor_profile():
    doctor = Doctor.query.get(session['doctor_id'])
    return jsonify({
        'id': doctor.id,
        'name': doctor.name,
        'email': doctor.email,
        'specialization': doctor.specialization,
        'hospital': doctor.hospital
    }), 200

@app.route('/api/patients', methods=['GET'])
@login_required
def get_patients():
    patients = Patient.query.all()
    return jsonify([{
        'id': patient.id,
        'name': patient.name,
        'age': patient.age,
        'diseases': patient.diseases,
        'created_at': patient.created_at.isoformat()
    } for patient in patients]), 200

@app.route('/api/patient/<patient_id>', methods=['GET'])
@login_required
def get_patient(patient_id):
    patient = Patient.query.get(patient_id)
    if not patient:
        return jsonify({'error': 'Patient not found'}), 404
    
    return jsonify({
        'id': patient.id,
        'name': patient.name,
        'age': patient.age,
        'diseases': patient.diseases,
        'medical_history': patient.medical_history,
        'created_at': patient.created_at.isoformat()
    }), 200

@app.route('/api/check_interaction', methods=['POST'])
@login_required
def check_interaction():
    data = request.get_json()
    patient_id = data['patient_id']
    medicines = data['medicines']
    
    # Get patient data
    patient = Patient.query.get(patient_id)
    if not patient:
        return jsonify({'error': 'Patient not found'}), 404
    
    # Normalize medicine names (lowercase, strip spaces)
    normalized_medicines = [medicine.strip().lower() for medicine in medicines]
    
    # Check for interactions
    interactions = []
    
    # Check drug-disease interactions
    if patient.diseases:
        patient_diseases = [d.strip().lower() for d in patient.diseases.split(',')]
        
        for i, medicine in enumerate(medicines):
            medicine_normalized = normalized_medicines[i]
            
            # Check for drug-disease interactions with exact matching
            drug_interactions = DrugInteraction.query.filter(
                db.or_(
                    db.and_(
                        db.func.lower(DrugInteraction.drug_name_1) == medicine_normalized,
                        DrugInteraction.interaction_type == 'drug-disease'
                    ),
                    db.and_(
                        db.func.lower(DrugInteraction.drug_name_2) == medicine_normalized,
                        DrugInteraction.interaction_type == 'drug-disease'
                    )
                )
            ).all()
            
            for interaction in drug_interactions:
                # Determine which field contains the disease
                if interaction.drug_name_1.lower().strip() == medicine_normalized:
                    disease_normalized = interaction.drug_name_2.lower().strip()
                else:
                    disease_normalized = interaction.drug_name_1.lower().strip()
                
                # Check if patient has this disease (exact match)
                if disease_normalized in patient_diseases:
                    interactions.append({
                        'medicine': medicine,
                        'description': interaction.description,
                        'severity': interaction.severity
                    })
    
    # Check drug-drug interactions
    for i, medicine1 in enumerate(medicines):
        for j, medicine2 in enumerate(medicines[i+1:], i+1):
            medicine1_normalized = normalized_medicines[i]
            medicine2_normalized = normalized_medicines[j]
            
            # Check for drug-drug interactions with exact matching
            drug_interactions = DrugInteraction.query.filter(
                db.or_(
                    db.and_(
                        db.func.lower(DrugInteraction.drug_name_1) == medicine1_normalized,
                        db.func.lower(DrugInteraction.drug_name_2) == medicine2_normalized
                    ),
                    db.and_(
                        db.func.lower(DrugInteraction.drug_name_1) == medicine2_normalized,
                        db.func.lower(DrugInteraction.drug_name_2) == medicine1_normalized
                    )
                ),
                DrugInteraction.interaction_type == 'drug-drug'
            ).all()
            
            for interaction in drug_interactions:
                interactions.append({
                    'medicine': f"{medicine1} + {medicine2}",
                    'description': interaction.description,
                    'severity': interaction.severity
                })
    
    # Determine result based on severity
    if interactions:
        severity_levels = [interaction['severity'] for interaction in interactions]
        if 'high' in severity_levels:
            result = 'danger'
        elif 'medium' in severity_levels:
            result = 'warning'
        else:
            result = 'safe'
    else:
        result = 'safe'
    
    # Save prescription record with original medicine names
    prescription = Prescription(
        doctor_id=session['doctor_id'],
        patient_id=patient_id,
        medicines=', '.join(medicines),
        result=result,
        interaction_details=str(interactions) if interactions else None
    )
    db.session.add(prescription)
    db.session.commit()
    
    return jsonify({
        'result': result,
        'interactions': interactions,
        'message': 'Interaction check completed'
    }), 200

@app.route('/api/history', methods=['GET'])
@login_required
def get_prescription_history():
    prescriptions = Prescription.query.filter_by(doctor_id=session['doctor_id']).order_by(Prescription.created_at.desc()).all()
    
    return jsonify([{
        'id': prescription.id,
        'patient_id': prescription.patient_id,
        'medicines': prescription.medicines,
        'result': prescription.result,
        'interaction_details': prescription.interaction_details,
        'created_at': prescription.created_at.isoformat()
    } for prescription in prescriptions]), 200

@app.route('/api/stats', methods=['GET'])
@login_required
def get_stats():
    total_prescriptions = Prescription.query.filter_by(doctor_id=session['doctor_id']).count()
    safe_prescriptions = Prescription.query.filter_by(doctor_id=session['doctor_id'], result='safe').count()
    warning_prescriptions = Prescription.query.filter_by(doctor_id=session['doctor_id'], result='warning').count()
    danger_prescriptions = Prescription.query.filter_by(doctor_id=session['doctor_id'], result='danger').count()
    
    return jsonify({
        'total_prescriptions': total_prescriptions,
        'safe_prescriptions': safe_prescriptions,
        'warning_prescriptions': warning_prescriptions,
        'danger_prescriptions': danger_prescriptions
    }), 200

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True, port=5000)
