import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Users, 
  Activity, 
  CheckCircle, 
  ArrowRight, 
  Heart,
  Brain,
  Zap,
  Play,
  Sparkles,
  Star,
  Youtube,
  Instagram,
  Twitter,
  Linkedin,
  Github,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Stethoscope
} from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <Shield className="h-8 w-8 text-teal-600" />,
      title: "Drug Safety",
      description: "Automatically detect harmful drug interactions before prescribing medications."
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Patient History",
      description: "Access complete patient medical history and previous prescriptions instantly."
    },
    {
      icon: <Activity className="h-8 w-8 text-green-600" />,
      title: "Real-time Analysis",
      description: "Get instant feedback on potential adverse drug reactions and interactions."
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-purple-600" />,
      title: "Evidence-based",
      description: "Powered by comprehensive drug interaction databases and medical research."
    }
  ];

  const stats = [
    { number: "2M+", label: "Lives Saved Annually" },
    { number: "95%", label: "Reduction in ADR Cases" },
    { number: "50K+", label: "Drug Interactions Monitored" },
    { number: "99.9%", label: "System Uptime" }
  ];

  return (
    <div className="min-h-screen">
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
                AI-Driven Healthcare Safety
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Prevent Adverse Drug Reactions with Vaidya X. 
                <span className="text-teal-600 font-semibold"> Save lives through intelligent medication management.</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                {/* Primary CTA Button */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group"
                >
                  <Link 
                    to="/signup" 
                    className="relative inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-teal-600 via-teal-700 to-blue-600 text-white font-semibold text-base rounded-xl shadow-xl hover:shadow-teal-500/25 transition-all duration-300 overflow-hidden"
                  >
                    {/* Animated background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-500 via-teal-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Sparkle effect */}
                    <div className="absolute top-2 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Sparkles className="h-4 w-4 text-white animate-pulse" />
                    </div>
                    <div className="absolute bottom-2 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Star className="h-3 w-3 text-white animate-pulse" />
                    </div>
                    
                    {/* Button content */}
                    <span className="relative z-10 flex items-center">
                      Get Started Free
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </span>
                    
                    {/* Shine effect */}
                    <div className="absolute inset-0 -top-2 -left-2 w-0 h-0 bg-white/20 rounded-full group-hover:w-full group-hover:h-full transition-all duration-500 ease-out"></div>
                  </Link>
                </motion.div>

                {/* Secondary CTA Button */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group"
                >
                  <Link 
                    to="/about" 
                    className="relative inline-flex items-center justify-center px-6 py-3 bg-white/80 backdrop-blur-sm text-teal-700 font-semibold text-base rounded-xl border-2 border-teal-200 hover:border-teal-300 hover:bg-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                  >
                    {/* Animated background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Button content */}
                    <span className="relative z-10 flex items-center">
                      <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
                      Watch Demo
                    </span>
                    
                    {/* Subtle glow effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-teal-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-teal-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How Vaidya X Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our intelligent system analyzes patient data and medication interactions to prevent harmful drug reactions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card text-center hover:scale-105 transition-transform duration-300"
              >
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                The Problem We Solve
              </h2>
              <div className="space-y-4 text-lg text-gray-700">
                <div className="flex items-start space-x-3">
                  <Heart className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                  <p><span className="font-semibold text-red-600">2 million people</span> die annually from Adverse Drug Reactions (ADR)</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Brain className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                  <p>Doctors often prescribe medications without complete patient history</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Zap className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                  <p>Drug interactions are complex and difficult to track manually</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl p-8 shadow-xl"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Our Solution
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                    <span className="text-teal-600 font-bold">1</span>
                  </div>
                  <p className="text-gray-700">Access complete patient medical history</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                    <span className="text-teal-600 font-bold">2</span>
                  </div>
                  <p className="text-gray-700">Enter prescribed medications</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                    <span className="text-teal-600 font-bold">3</span>
                  </div>
                  <p className="text-gray-700">Get instant ADR analysis and warnings</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                    <span className="text-teal-600 font-bold">4</span>
                  </div>
                  <p className="text-gray-700">Prescribe safely with confidence</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Healthcare Safety?
            </h2>
            <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
              Join thousands of doctors who trust Vaidya X to prevent medication errors and save lives.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <Link 
                to="/signup" 
                className="relative inline-flex items-center justify-center px-10 py-5 bg-white text-teal-600 font-bold text-xl rounded-2xl shadow-2xl hover:shadow-white/25 transition-all duration-300 overflow-hidden border-2 border-white/20"
              >
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Button content */}
                <span className="relative z-10 flex items-center">
                  Start Your Free Trial
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
                
                {/* Shine effect */}
                <div className="absolute inset-0 -top-2 -left-2 w-0 h-0 bg-teal-500/10 rounded-full group-hover:w-full group-hover:h-full transition-all duration-500 ease-out"></div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg">
                  <Stethoscope className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold">Vaidya X</span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                AI-driven healthcare safety platform preventing adverse drug reactions and saving lives through intelligent medication management.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="p-2 bg-gray-800 hover:bg-teal-600 rounded-lg transition-colors duration-200 group">
                  <Facebook className="h-5 w-5 text-gray-300 group-hover:text-white" />
                </a>
                <a href="#" className="p-2 bg-gray-800 hover:bg-teal-600 rounded-lg transition-colors duration-200 group">
                  <Twitter className="h-5 w-5 text-gray-300 group-hover:text-white" />
                </a>
                <a href="#" className="p-2 bg-gray-800 hover:bg-teal-600 rounded-lg transition-colors duration-200 group">
                  <Linkedin className="h-5 w-5 text-gray-300 group-hover:text-white" />
                </a>
                <a href="#" className="p-2 bg-gray-800 hover:bg-teal-600 rounded-lg transition-colors duration-200 group">
                  <Instagram className="h-5 w-5 text-gray-300 group-hover:text-white" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-300 hover:text-teal-400 transition-colors duration-200">About Us</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-teal-400 transition-colors duration-200">Contact</Link></li>
                <li><Link to="/dashboard" className="text-gray-300 hover:text-teal-400 transition-colors duration-200">Dashboard</Link></li>
                <li><a href="#" className="text-gray-300 hover:text-teal-400 transition-colors duration-200">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-300 hover:text-teal-400 transition-colors duration-200">Terms of Service</a></li>
              </ul>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Features</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-teal-400 transition-colors duration-200">Drug Interaction Check</a></li>
                <li><a href="#" className="text-gray-300 hover:text-teal-400 transition-colors duration-200">Patient History</a></li>
                <li><a href="#" className="text-gray-300 hover:text-teal-400 transition-colors duration-200">Real-time Analysis</a></li>
                <li><a href="#" className="text-gray-300 hover:text-teal-400 transition-colors duration-200">Safety Reports</a></li>
                <li><a href="#" className="text-gray-300 hover:text-teal-400 transition-colors duration-200">API Integration</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Contact Info</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-teal-400" />
                  <span className="text-gray-300 text-sm">support@vaidyax.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-teal-400" />
                  <span className="text-gray-300 text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-teal-400" />
                  <span className="text-gray-300 text-sm">San Francisco, CA</span>
                </div>
              </div>
              <div className="pt-4">
                <h4 className="text-sm font-semibold text-white mb-2">Follow Us</h4>
                <div className="flex space-x-3">
                  <a href="#" className="p-2 bg-gray-800 hover:bg-red-600 rounded-lg transition-colors duration-200 group">
                    <Youtube className="h-4 w-4 text-gray-300 group-hover:text-white" />
                  </a>
                  <a href="#" className="p-2 bg-gray-800 hover:bg-pink-600 rounded-lg transition-colors duration-200 group">
                    <Instagram className="h-4 w-4 text-gray-300 group-hover:text-white" />
                  </a>
                  <a href="#" className="p-2 bg-gray-800 hover:bg-blue-600 rounded-lg transition-colors duration-200 group">
                    <Linkedin className="h-4 w-4 text-gray-300 group-hover:text-white" />
                  </a>
                  <a href="#" className="p-2 bg-gray-800 hover:bg-gray-600 rounded-lg transition-colors duration-200 group">
                    <Github className="h-4 w-4 text-gray-300 group-hover:text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                © 2024 Vaidya X. All rights reserved. Made with ❤️ for healthcare safety.
              </div>
              <div className="flex items-center space-x-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-200">Privacy</a>
                <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-200">Terms</a>
                <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-200">Cookies</a>
                <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-200">Security</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
