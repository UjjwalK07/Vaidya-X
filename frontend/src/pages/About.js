import React from 'react';
import { motion } from 'framer-motion';
import { 
  AlertTriangle, 
  Shield, 
  Users, 
  Activity, 
  CheckCircle, 
  Heart,
  Brain,
  Zap,
  Target,
  Award
} from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: "Ujjwal Kumar",
      role: "Lead Developer & Project Manager",
      department: "AI & Data Science",
      image: "/Ujjwal Kumar.jpg",
      bio: "Passionate about using AI to solve real-world healthcare problems. Specializes in machine learning and data analysis."
    },
    {
      name: "Stenophin Rejoice S",
      role: "Backend Developer & Database Architect",
      department: "AI & Data Science",
      image: "/Stenophin Rejoice.jpg",
      bio: "Expert in backend development and database design. Focused on creating scalable and secure healthcare systems."
    },
    {
      name: "Sudharshan S",
      role: "Frontend Developer & UI/UX Designer",
      department: "AI & Data Science",
      image: "/Sudharshan S.jpg",
      bio: "Creative frontend developer with a passion for creating intuitive and beautiful user interfaces for healthcare applications."
    }
  ];

  const milestones = [
    {
      year: "2024",
      title: "Vaidya X Launch",
      description: "Revolutionary AI-powered healthcare safety platform"
    },
    {
      year: "2023",
      title: "Research Phase",
      description: "Extensive study of ADR patterns and drug interactions"
    },
    {
      year: "2022",
      title: "Concept Development",
      description: "Initial idea and prototype development"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 via-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                About Vaidya X
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Revolutionizing healthcare safety through intelligent medication management and adverse drug reaction prevention.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                The Global Healthcare Crisis
              </h2>
              <div className="space-y-6 text-lg text-gray-700">
                <div className="flex items-start space-x-4">
                  <AlertTriangle className="h-8 w-8 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-red-600 mb-2">2 Million Annual Deaths</h3>
                    <p>Adverse Drug Reactions (ADR) cause more deaths than diabetes, pneumonia, and kidney disease combined.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Brain className="h-8 w-8 text-orange-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-orange-600 mb-2">Complex Drug Interactions</h3>
                    <p>With over 10,000 prescription drugs available, tracking interactions manually is nearly impossible.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Heart className="h-8 w-8 text-pink-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-pink-600 mb-2">Incomplete Patient History</h3>
                    <p>Doctors often lack access to complete patient medical histories when prescribing medications.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                ADR Impact Statistics
              </h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-3xl font-bold text-red-600 mb-1">2M+</div>
                  <div className="text-gray-600">Annual ADR Deaths</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-3xl font-bold text-orange-600 mb-1">$136B</div>
                  <div className="text-gray-600">Annual Healthcare Costs</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-3xl font-bold text-pink-600 mb-1">5.3M</div>
                  <div className="text-gray-600">Hospital Admissions</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Revolutionary Solution
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Vaidya X leverages artificial intelligence and comprehensive medical databases to prevent medication errors before they occur.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="card text-center"
            >
              <div className="flex justify-center mb-4">
                <Shield className="h-12 w-12 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                AI-Powered Analysis
              </h3>
              <p className="text-gray-600">
                Advanced machine learning algorithms analyze patient data and medication interactions in real-time.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="card text-center"
            >
              <div className="flex justify-center mb-4">
                <Activity className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Real-time Monitoring
              </h3>
              <p className="text-gray-600">
                Instant feedback on potential drug interactions and adverse reactions as prescriptions are entered.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="card text-center"
            >
              <div className="flex justify-center mb-4">
                <CheckCircle className="h-12 w-12 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Evidence-Based Results
              </h3>
              <p className="text-gray-600">
                Built on comprehensive medical research and continuously updated drug interaction databases.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How Vaidya X Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A simple, intuitive process that integrates seamlessly into your existing workflow.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Patient Selection",
                description: "Select patient from your database or add new patient information",
                icon: <Users className="h-8 w-8 text-teal-600" />
              },
              {
                step: "2",
                title: "Medical History",
                description: "Review complete patient medical history and existing conditions",
                icon: <Brain className="h-8 w-8 text-blue-600" />
              },
              {
                step: "3",
                title: "Prescription Entry",
                description: "Enter prescribed medications and dosages",
                icon: <Zap className="h-8 w-8 text-purple-600" />
              },
              {
                step: "4",
                title: "Safety Analysis",
                description: "Get instant ADR analysis and safety recommendations",
                icon: <Target className="h-8 w-8 text-green-600" />
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    {item.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Developed by passionate students from the Department of AI & Data Science
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card text-center hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative mb-6">
                  <div className="w-32 h-32 rounded-full mx-auto border-4 border-white shadow-lg group-hover:border-teal-200 transition-colors duration-300 team-image-container">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="team-image"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="w-full h-full bg-gradient-to-br from-teal-100 to-blue-100 flex items-center justify-center text-teal-600 font-semibold text-sm" style={{display: 'none'}}>
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center">
                    <Users className="h-4 w-4 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-teal-600 font-semibold mb-2">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  {member.department}
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Award className="h-16 w-16 text-white mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
              To revolutionize healthcare safety by preventing medication errors and adverse drug reactions through intelligent technology, ultimately saving millions of lives worldwide.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
              <p className="text-lg text-white font-medium">
                "Every preventable death from medication error is one too many. 
                We're committed to making healthcare safer for everyone."
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
