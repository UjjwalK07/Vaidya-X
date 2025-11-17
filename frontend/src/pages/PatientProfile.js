import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  User, 
  Calendar, 
  Heart, 
  Pill, 
  ArrowLeft, 
  FileText,
  AlertTriangle,
  CheckCircle,
  Clock
} from 'lucide-react';
import axios from 'axios';

const PatientProfile = () => {
  const { id } = useParams();
  const [patient, setPatient] = useState(null);
  const [prescriptions, setPrescriptions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetchPatientData();
    }
  }, [id]);

  const fetchPatientData = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/patient/${id}`, {
        withCredentials: true
      });
      setPatient(response.data);
      
      // Fetch prescriptions for this patient
      const prescriptionsResponse = await axios.get('http://localhost:5000/api/history', {
        withCredentials: true
      });
      const patientPrescriptions = prescriptionsResponse.data.filter(
        p => p.patient_id === id
      );
      setPrescriptions(patientPrescriptions);
    } catch (error) {
      console.error('Error fetching patient data:', error);
    } finally {
      setLoading(false);
    }
  };

  const getResultIcon = (result) => {
    switch (result) {
      case 'safe':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'warning':
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
      case 'danger':
        return <AlertTriangle className="h-5 w-5 text-red-500" />;
      default:
        return <Clock className="h-5 w-5 text-gray-500" />;
    }
  };

  const getResultColor = (result) => {
    switch (result) {
      case 'safe':
        return 'text-green-600 bg-green-50';
      case 'warning':
        return 'text-yellow-600 bg-yellow-50';
      case 'danger':
        return 'text-red-600 bg-red-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-teal-600"></div>
      </div>
    );
  }

  if (!patient) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Patient Not Found</h2>
          <Link to="/patients" className="btn-primary">
            Back to Patients
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="flex items-center space-x-4 mb-6">
            <Link
              to="/patients"
              className="flex items-center space-x-2 text-gray-600 hover:text-teal-600 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Patients</span>
            </Link>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Patient Profile</h1>
          <p className="text-gray-600">Complete medical history and prescription records</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Patient Information */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="card"
            >
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="h-12 w-12 text-teal-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">{patient.name}</h2>
                <p className="text-gray-600">Patient ID: {patient.id}</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-700">Age</p>
                    <p className="text-lg text-gray-900">{patient.age} years old</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Heart className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-700">Medical Conditions</p>
                    {patient.diseases ? (
                      <div className="flex flex-wrap gap-2 mt-1">
                        {patient.diseases.split(',').map((disease, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-red-100 text-red-800 text-xs font-medium rounded-full"
                          >
                            {disease.trim()}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-500">No known conditions</p>
                    )}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <Link
                    to={`/prescription/${patient.id}`}
                    className="w-full btn-primary text-center"
                  >
                    <Pill className="h-5 w-5 mr-2" />
                    Prescribe Medicine
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Medical History and Prescriptions */}
          <div className="lg:col-span-2 space-y-8">
            {/* Medical History */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="card"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <FileText className="h-6 w-6 mr-2 text-teal-600" />
                Medical History
              </h3>
              {patient.medical_history ? (
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-gray-700 leading-relaxed">{patient.medical_history}</p>
                </div>
              ) : (
                <p className="text-gray-500 italic">No detailed medical history available</p>
              )}
            </motion.div>

            {/* Prescription History */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="card"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Pill className="h-6 w-6 mr-2 text-blue-600" />
                Prescription History
              </h3>
              
              {prescriptions.length > 0 ? (
                <div className="space-y-4">
                  {prescriptions.map((prescription, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-2">
                          {getResultIcon(prescription.result)}
                          <span className="font-medium text-gray-900">
                            Prescription #{prescription.id}
                          </span>
                        </div>
                        <span className={`px-3 py-1 text-sm font-medium rounded-full ${getResultColor(prescription.result)}`}>
                          {prescription.result.toUpperCase()}
                        </span>
                      </div>
                      
                      <div className="mb-3">
                        <p className="text-sm font-medium text-gray-700 mb-1">Medications:</p>
                        <p className="text-gray-900">{prescription.medicines}</p>
                      </div>
                      
                      {prescription.interaction_details && prescription.result !== 'safe' && (
                        <div className="mb-3">
                          <p className="text-sm font-medium text-gray-700 mb-1">Interaction Details:</p>
                          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                            <p className="text-sm text-yellow-800">
                              {prescription.interaction_details}
                            </p>
                          </div>
                        </div>
                      )}
                      
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-1" />
                        {new Date(prescription.created_at).toLocaleString()}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <Pill className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h4 className="text-lg font-medium text-gray-900 mb-2">No Prescriptions Yet</h4>
                  <p className="text-gray-500 mb-4">This patient hasn't received any prescriptions through Vaidya X</p>
                  <Link
                    to={`/prescription/${patient.id}`}
                    className="btn-primary"
                  >
                    Create First Prescription
                  </Link>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientProfile;
