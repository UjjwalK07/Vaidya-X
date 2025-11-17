import mysql.connector
from mysql.connector import Error

def create_database():
    try:
        # Connect to MySQL server
        connection = mysql.connector.connect(
            host='localhost',
            user='root',
            password='6562'
        )
        
        cursor = connection.cursor()
        
        # Create database
        cursor.execute("CREATE DATABASE IF NOT EXISTS vaidya_x")
        print("Database 'vaidya_x' created successfully")
        
        # Use the database
        cursor.execute("USE vaidya_x")
        
        # Create tables
        create_tables(cursor)
        
        # Insert dummy data
        insert_dummy_data(cursor)
        
        connection.commit()
        print("Database setup completed successfully")
        
    except Error as e:
        print(f"Error: {e}")
    finally:
        if connection.is_connected():
            cursor.close()
            connection.close()

def create_tables(cursor):
    # Doctors table
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS doctor (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            email VARCHAR(120) UNIQUE NOT NULL,
            password_hash VARCHAR(128) NOT NULL,
            specialization VARCHAR(100) NOT NULL,
            hospital VARCHAR(200) NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    """)
    
    # Patients table
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS patient (
            id VARCHAR(10) PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            age INT NOT NULL,
            diseases TEXT,
            medical_history TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    """)
    
    # Drug interactions table
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS drug_interaction (
            id INT AUTO_INCREMENT PRIMARY KEY,
            drug_name_1 VARCHAR(100) NOT NULL,
            drug_name_2 VARCHAR(100) NOT NULL,
            interaction_type VARCHAR(50) NOT NULL,
            description TEXT NOT NULL,
            severity VARCHAR(20) NOT NULL
        )
    """)
    
    # Prescriptions table
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS prescription (
            id INT AUTO_INCREMENT PRIMARY KEY,
            doctor_id INT NOT NULL,
            patient_id VARCHAR(10) NOT NULL,
            medicines TEXT NOT NULL,
            result VARCHAR(20) NOT NULL,
            interaction_details TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (doctor_id) REFERENCES doctor(id),
            FOREIGN KEY (patient_id) REFERENCES patient(id)
        )
    """)

def insert_dummy_data(cursor):
    # Insert sample doctors
    doctors_data = [
        ('Dr. Sarah Johnson', 'sarah.johnson@hospital.com', 'password123', 'Cardiology', 'City General Hospital'),
        ('Dr. Michael Chen', 'michael.chen@hospital.com', 'password123', 'Neurology', 'Metro Medical Center'),
        ('Dr. Emily Rodriguez', 'emily.rodriguez@hospital.com', 'password123', 'Pediatrics', 'Children\'s Hospital')
    ]
    
    for doctor in doctors_data:
        cursor.execute("""
            INSERT IGNORE INTO doctor (name, email, password_hash, specialization, hospital)
            VALUES (%s, %s, %s, %s, %s)
        """, doctor)
    
    # Insert sample patients
    patients_data = [
        ('P001', 'John Smith', 45, 'Diabetes, Hypertension', 'Type 2 diabetes diagnosed 2018, hypertension since 2020'),
        ('P002', 'Mary Johnson', 32, 'Asthma, Allergic Rhinitis', 'Asthma since childhood, seasonal allergies'),
        ('P003', 'Robert Davis', 67, 'Heart Disease, High Cholesterol', 'Coronary artery disease, high cholesterol'),
        ('P004', 'Lisa Wilson', 28, 'Migraine, Depression', 'Chronic migraines, depression treated with therapy'),
        ('P005', 'David Brown', 55, 'Arthritis, Gastric Ulcer', 'Rheumatoid arthritis, gastric ulcer history'),
        ('P006', 'Jennifer Taylor', 41, 'Thyroid Disorder, Osteoporosis', 'Hypothyroidism, osteoporosis'),
        ('P007', 'Michael Garcia', 38, 'Epilepsy, Anxiety', 'Epilepsy since 2015, anxiety disorder'),
        ('P008', 'Sarah Martinez', 29, 'Pregnancy, Gestational Diabetes', 'Currently pregnant, gestational diabetes'),
        ('P009', 'James Anderson', 72, 'Kidney Disease, Anemia', 'Chronic kidney disease stage 3, iron deficiency anemia'),
        ('P010', 'Linda Thompson', 50, 'Breast Cancer, Osteoporosis', 'Breast cancer survivor, osteoporosis')
    ]
    
    for patient in patients_data:
        cursor.execute("""
            INSERT IGNORE INTO patient (id, name, age, diseases, medical_history)
            VALUES (%s, %s, %s, %s, %s)
        """, patient)
    
    # Insert drug interactions
    interactions_data = [
        # Drug-Disease interactions
        ('Warfarin', 'Bleeding Disorders', 'drug-disease', 'Warfarin increases bleeding risk in patients with bleeding disorders', 'high'),
        ('Aspirin', 'Gastric Ulcer', 'drug-disease', 'Aspirin can worsen gastric ulcers and cause bleeding', 'high'),
        ('Metformin', 'Kidney Disease', 'drug-disease', 'Metformin can cause lactic acidosis in patients with kidney disease', 'high'),
        ('Ibuprofen', 'Heart Disease', 'drug-disease', 'Ibuprofen may increase cardiovascular risk in heart disease patients', 'medium'),
        ('Paracetamol', 'Liver Disease', 'drug-disease', 'Paracetamol can cause liver damage in patients with liver disease', 'high'),
        ('Digoxin', 'Kidney Disease', 'drug-disease', 'Digoxin toxicity risk increases in kidney disease patients', 'high'),
        ('ACE Inhibitors', 'Pregnancy', 'drug-disease', 'ACE inhibitors can cause birth defects during pregnancy', 'high'),
        ('Statins', 'Liver Disease', 'drug-disease', 'Statins may worsen liver function in liver disease patients', 'medium'),
        ('NSAIDs', 'Kidney Disease', 'drug-disease', 'NSAIDs can worsen kidney function in kidney disease patients', 'high'),
        ('Anticoagulants', 'Bleeding Disorders', 'drug-disease', 'Anticoagulants increase bleeding risk in bleeding disorder patients', 'high'),
        
        # Drug-Drug interactions
        ('Warfarin', 'Aspirin', 'drug-drug', 'Combination increases bleeding risk significantly', 'high'),
        ('Warfarin', 'Digoxin', 'drug-drug', 'Digoxin can increase warfarin effects', 'medium'),
        ('Metformin', 'Contrast Dye', 'drug-drug', 'Contrast dye can cause lactic acidosis with metformin', 'high'),
        ('Digoxin', 'Furosemide', 'drug-drug', 'Furosemide can increase digoxin toxicity', 'medium'),
        ('ACE Inhibitors', 'Potassium Supplements', 'drug-drug', 'Can cause dangerous hyperkalemia', 'high'),
        ('Statins', 'Grapefruit Juice', 'drug-drug', 'Grapefruit juice increases statin levels', 'medium'),
        ('Antidepressants', 'MAO Inhibitors', 'drug-drug', 'Can cause serotonin syndrome', 'high'),
        ('Antihistamines', 'Alcohol', 'drug-drug', 'Increases drowsiness and impairment', 'medium'),
        ('Antibiotics', 'Birth Control', 'drug-drug', 'Antibiotics may reduce birth control effectiveness', 'medium'),
        ('Blood Thinners', 'NSAIDs', 'drug-drug', 'Increases bleeding risk', 'high')
    ]
    
    for interaction in interactions_data:
        cursor.execute("""
            INSERT IGNORE INTO drug_interaction (drug_name_1, drug_name_2, interaction_type, description, severity)
            VALUES (%s, %s, %s, %s, %s)
        """, interaction)

if __name__ == "__main__":
    create_database()
