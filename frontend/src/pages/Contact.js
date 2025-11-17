import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Linkedin, 
  Github, 
  MapPin, 
  Phone, 
  GraduationCap,
  Heart,
  Users,
  Award,
  Stethoscope
} from 'lucide-react';

const Contact = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      role: "Lead Developer & Project Manager",
      department: "AI & Data Science",
      email: "sarah.johnson@university.edu",
      linkedin: "sarah-johnson-dev",
      github: "sarahjohnson",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face",
      bio: "Passionate about using AI to solve real-world healthcare problems. Specializes in machine learning and data analysis."
    },
    {
      name: "Dr. Michael Chen",
      role: "Backend Developer & Database Architect",
      department: "AI & Data Science",
      email: "michael.chen@university.edu",
      linkedin: "michael-chen-dev",
      github: "michaelchen",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
      bio: "Expert in backend development and database design. Focused on creating scalable and secure healthcare systems."
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Frontend Developer & UI/UX Designer",
      department: "AI & Data Science",
      email: "emily.rodriguez@university.edu",
      linkedin: "emily-rodriguez-dev",
      github: "emilyrodriguez",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
      bio: "Creative frontend developer with a passion for creating intuitive and beautiful user interfaces for healthcare applications."
    }
  ];

  const achievements = [
    {
      icon: <Award className="h-8 w-8 text-yellow-500" />,
      title: "Best Healthcare Innovation",
      description: "Winner of University Innovation Challenge 2024"
    },
    {
      icon: <Users className="h-8 w-8 text-blue-500" />,
      title: "Community Impact",
      description: "Recognized for potential to save millions of lives"
    },
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: "Healthcare Excellence",
      description: "Endorsed by leading medical professionals"
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
                Meet Our Team
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Developed by passionate students from the Department of AI & Data Science
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Development Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A dedicated team of AI & Data Science students committed to revolutionizing healthcare safety
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-teal-600 font-semibold mb-2">
                  {member.role}
                </p>
                <p className="text-gray-600 mb-4">
                  {member.department}
                </p>
                <p className="text-gray-700 mb-6 text-sm leading-relaxed">
                  {member.bio}
                </p>
                <div className="flex justify-center space-x-4">
                  <a
                    href={`mailto:${member.email}`}
                    className="p-2 text-gray-600 hover:text-teal-600 transition-colors"
                    title="Email"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                  <a
                    href={`https://linkedin.com/in/${member.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
                    title="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href={`https://github.com/${member.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
                    title="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* University Information */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Department of AI & Data Science
              </h2>
              <div className="space-y-6 text-lg text-gray-700">
                <div className="flex items-start space-x-4">
                  <GraduationCap className="h-8 w-8 text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Academic Excellence</h3>
                    <p>Leading institution in artificial intelligence and data science education, fostering innovation in healthcare technology.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Stethoscope className="h-8 w-8 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Healthcare Focus</h3>
                    <p>Dedicated to developing AI solutions that improve patient outcomes and reduce medical errors.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Heart className="h-8 w-8 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Social Impact</h3>
                    <p>Committed to creating technology that saves lives and makes healthcare safer for everyone.</p>
                  </div>
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
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-6 w-6 text-teal-600" />
                  <div>
                    <p className="font-medium text-gray-900">University Address</p>
                    <p className="text-gray-600">123 Innovation Drive<br />Tech City, TC 12345</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-6 w-6 text-teal-600" />
                  <div>
                    <p className="font-medium text-gray-900">Department Phone</p>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-6 w-6 text-teal-600" />
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <p className="text-gray-600">ai-ds@university.edu</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Recognition & Achievements</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Vaidya X has been recognized for its innovative approach to healthcare safety
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card text-center"
              >
                <div className="flex justify-center mb-4">
                  {achievement.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {achievement.title}
                </h3>
                <p className="text-gray-600">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-teal-100 mb-8 max-w-4xl mx-auto">
              As students of AI & Data Science, we believe that technology has the power to transform healthcare and save lives. 
              Vaidya X represents our commitment to using artificial intelligence for the greater good, preventing medication errors 
              and adverse drug reactions that claim millions of lives each year.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-3xl mx-auto">
              <p className="text-lg text-white font-medium mb-4">
                "Every line of code we write, every algorithm we develop, and every interaction we prevent brings us closer to a world where healthcare is truly safe for everyone."
              </p>
              <p className="text-teal-100">
                — The Vaidya X Development Team
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
