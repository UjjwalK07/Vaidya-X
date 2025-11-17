import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Pill, 
  AlertTriangle, 
  CheckCircle, 
  Plus, 
  X,
  User,
  Heart,
  Zap
} from 'lucide-react';
import axios from 'axios';

const Prescription = () => {
  const { patientId } = useParams();
  const navigate = useNavigate();
  const [patient, setPatient] = useState(null);
  const [medicines, setMedicines] = useState(['', '']);
  const [newMedicine, setNewMedicine] = useState('');
  const [loading, setLoading] = useState(true);
  const [checking, setChecking] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    if (patientId) {
      fetchPatientData();
    }
  }, [patientId]);

  const fetchPatientData = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/patient/${patientId}`, {
        withCredentials: true
      });
      setPatient(response.data);
    } catch (error) {
      console.error('Error fetching patient data:', error);
      setError('Patient not found');
    } finally {
      setLoading(false);
    }
  };

  const addMedicine = () => {
    if (newMedicine.trim()) {
      setMedicines([...medicines, newMedicine.trim()]);
      setNewMedicine('');
    }
  };

  const removeMedicine = (index) => {
    setMedicines(medicines.filter((_, i) => i !== index));
  };

  const updateMedicine = (index, value) => {
    const updated = [...medicines];
    updated[index] = value;
    setMedicines(updated);
  };

  const checkInteractions = async () => {
    const validMedicines = medicines.filter(med => med.trim());
    if (validMedicines.length === 0) {
      setError('Please enter at least one medicine');
      return;
    }

    setChecking(true);
    setError('');
    setResult(null);

    try {
      const response = await axios.post('http://localhost:5000/api/check_interaction', {
        patient_id: patientId,
        medicines: validMedicines
      }, {
        withCredentials: true
      });

      setResult(response.data);
    } catch (error) {
      setError(error.response?.data?.error || 'Error checking interactions');
    } finally {
      setChecking(false);
    }
  };

  const getResultIcon = (resultType) => {
    switch (resultType) {
      case 'safe':
        return <CheckCircle className="h-8 w-8 text-green-500" />;
      case 'warning':
        return <AlertTriangle className="h-8 w-8 text-yellow-500" />;
      case 'danger':
        return <AlertTriangle className="h-8 w-8 text-red-500" />;
      default:
        return <Zap className="h-8 w-8 text-gray-500" />;
    }
  };

  const getResultColor = (resultType) => {
    switch (resultType) {
      case 'safe':
        return 'bg-green-50 border-green-200 text-green-800';
      case 'warning':
        return 'bg-yellow-50 border-yellow-200 text-yellow-800';
      case 'danger':
        return 'bg-red-50 border-red-200 text-red-800';
      default:
        return 'bg-gray-50 border-gray-200 text-gray-800';
    }
  };

  const getResultMessage = (resultType) => {
    switch (resultType) {
      case 'safe':
        return '✅ No ADR found. Safe to prescribe.';
      case 'warning':
        return '⚠️ Potential interactions detected. Review before prescribing.';
      case 'danger':
        return '🚨 Dangerous interactions detected. Do not prescribe.';
      default:
        return 'Analysis completed.';
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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="flex items-center space-x-4 mb-6">
            <Link
              to={`/patient/${patientId}`}
              className="flex items-center space-x-2 text-gray-600 hover:text-teal-600 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Patient</span>
            </Link>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Prescribe Medicine</h1>
          <p className="text-gray-600">Check for drug interactions before prescribing</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Patient Info */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="card"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <User className="h-5 w-5 mr-2 text-teal-600" />
                Patient Information
              </h3>
              
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium text-gray-700">Name</p>
                  <p className="text-gray-900">{patient.name}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">Age</p>
                  <p className="text-gray-900">{patient.age} years</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">Medical Conditions</p>
                  {patient.diseases ? (
                    <div className="flex flex-wrap gap-1 mt-1">
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
                    <p className="text-gray-500">None</p>
                  )}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Prescription Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="card"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center">
                <Pill className="h-5 w-5 mr-2 text-blue-600" />
                Prescription Details
              </h3>

              <div className="space-y-6">
                {/* Medicine Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Medications to Prescribe
                  </label>
                  
                  <div className="space-y-3">
                    {medicines.map((medicine, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <input
                          type="text"
                          placeholder="Enter medicine name (e.g., Paracetamol)"
                          className="flex-1 input-field"
                          value={medicine}
                          onChange={(e) => updateMedicine(index, e.target.value)}
                        />
                        {medicines.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeMedicine(index)}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          >
                            <X className="h-5 w-5" />
                          </button>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center space-x-2 mt-3">
                    <input
                      type="text"
                      placeholder="Add another medicine"
                      className="flex-1 input-field"
                      value={newMedicine}
                      onChange={(e) => setNewMedicine(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && addMedicine()}
                    />
                    <button
                      type="button"
                      onClick={addMedicine}
                      className="p-2 bg-teal-600 text-white hover:bg-teal-700 rounded-lg transition-colors"
                    >
                      <Plus className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                {/* Check Button */}
                <div className="pt-4 border-t border-gray-200">
                  <button
                    onClick={checkInteractions}
                    disabled={checking}
                    className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {checking ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Checking Interactions...
                      </>
                    ) : (
                      <>
                        <Zap className="h-5 w-5 mr-2" />
                        Check for ADR
                      </>
                    )}
                  </button>
                </div>

                {/* Error Message */}
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                    {error}
                  </div>
                )}

                {/* Results */}
                {result && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className={`border-2 rounded-lg p-6 ${getResultColor(result.result)}`}
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      {getResultIcon(result.result)}
                      <h4 className="text-lg font-bold">
                        {getResultMessage(result.result)}
                      </h4>
                    </div>
                    

                    {result.interactions && result.interactions.length > 0 && (
                      <div className="space-y-3">
                        <h5 className="font-semibold">Interaction Details:</h5>
                        {result.interactions.map((interaction, index) => (
                          <div key={index} className="bg-white/50 rounded-lg p-3">
                            <p className="font-medium">{interaction.medicine}</p>
                            <p className="text-sm mt-1">{interaction.description}</p>
                            <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full mt-2 ${
                              interaction.severity === 'high' ? 'bg-red-200 text-red-800' :
                              interaction.severity === 'medium' ? 'bg-yellow-200 text-yellow-800' :
                              'bg-green-200 text-green-800'
                            }`}>
                              {interaction.severity.toUpperCase()} RISK
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="mt-4 pt-4 border-t border-current/20">
                      <p className="text-sm">
                        <strong>Prescribed Medications:</strong> {medicines.filter(m => m.trim()).join(', ')}
                      </p>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prescription;
