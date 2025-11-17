# Vaidya X - AI-Driven Healthcare Safety Platform

A comprehensive full-stack healthcare web application designed to prevent Adverse Drug Reactions (ADR) through intelligent medication management.

## 🎯 Project Overview

Vaidya X is a smart healthcare platform that helps doctors safely prescribe medications by automatically detecting harmful drug interactions and adverse reactions before they occur. The system addresses the critical issue of medication errors that cause millions of deaths annually.

## 🚀 Features

### Core Functionality
- **AI-Powered Drug Interaction Analysis** - Real-time detection of dangerous drug combinations
- **Patient Medical History Management** - Complete patient records and medical history tracking
- **Prescription Safety Checking** - Instant ADR analysis before medication prescription
- **Comprehensive Reporting** - Analytics and reports on prescription safety trends
- **Doctor Authentication** - Secure login and profile management

### Pages & Components
- **Home Page** - Hero section with project overview and statistics
- **About Page** - Problem statement, solution, and team information
- **Authentication** - Login and signup pages with form validation
- **Doctor Dashboard** - Overview with quick actions and recent activity
- **Patient Management** - Browse and search patient records
- **Patient Profile** - Detailed medical history and prescription records
- **Prescription System** - Drug interaction checking and safety analysis
- **Reports & Analytics** - Data visualization and prescription history
- **Contact/Team Page** - Developer information and university details

## 🛠️ Technology Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **React Router DOM** - Client-side routing and navigation
- **Tailwind CSS** - Utility-first CSS framework for styling
- **Framer Motion** - Smooth animations and page transitions
- **Recharts** - Data visualization and chart components
- **Lucide React** - Modern icon library
- **Axios** - HTTP client for API requests

### Backend
- **Flask** - Python web framework
- **SQLAlchemy** - ORM for database operations
- **Flask-CORS** - Cross-origin resource sharing
- **PyMySQL** - MySQL database connector
- **Werkzeug** - Password hashing and security

### Database
- **MySQL** - Relational database for data persistence
- **Tables**: doctors, patients, drug_interactions, prescriptions

## 📁 Project Structure

```
vaidya-x/
├── backend/
│   ├── app.py                 # Main Flask application
│   ├── requirements.txt       # Python dependencies
│   └── setup_database.py     # Database setup and seeding
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/        # Reusable React components
│   │   ├── contexts/         # React context providers
│   │   ├── pages/           # Page components
│   │   ├── App.js           # Main app component
│   │   ├── index.js         # React entry point
│   │   └── index.css        # Global styles
│   ├── package.json         # Node.js dependencies
│   ├── tailwind.config.js   # Tailwind configuration
│   └── postcss.config.js    # PostCSS configuration
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Python 3.8+
- Node.js 16+
- MySQL Server
- MySQL Workbench (password: 6562)

### Backend Setup

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Install Python dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

3. **Set up the database:**
   ```bash
   python setup_database.py
   ```

4. **Start the Flask server:**
   ```bash
   python app.py
   ```
   The backend will run on `http://localhost:5000`

### Frontend Setup

1. **Navigate to frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install Node.js dependencies:**
   ```bash
   npm install
   ```

3. **Start the React development server:**
   ```bash
   npm start
   ```
   The frontend will run on `http://localhost:3000`

## 🗄️ Database Schema

### Doctors Table
- `id` - Primary key
- `name` - Doctor's full name
- `email` - Unique email address
- `password_hash` - Hashed password
- `specialization` - Medical specialization
- `hospital` - Hospital/clinic name
- `created_at` - Registration timestamp

### Patients Table
- `id` - Patient ID (primary key)
- `name` - Patient's full name
- `age` - Patient's age
- `diseases` - Comma-separated medical conditions
- `medical_history` - Detailed medical history
- `created_at` - Record creation timestamp

### Drug Interactions Table
- `id` - Primary key
- `drug_name_1` - First drug/disease
- `drug_name_2` - Second drug/disease
- `interaction_type` - 'drug-drug' or 'drug-disease'
- `description` - Interaction description
- `severity` - 'low', 'medium', or 'high'

### Prescriptions Table
- `id` - Primary key
- `doctor_id` - Foreign key to doctors table
- `patient_id` - Foreign key to patients table
- `medicines` - Prescribed medications
- `result` - 'safe', 'warning', or 'danger'
- `interaction_details` - Detailed interaction information
- `created_at` - Prescription timestamp

## 🔐 Authentication

The application uses Flask sessions for authentication. Demo credentials:
- **Email:** sarah.johnson@hospital.com
- **Password:** password123

## 🎨 Design Features

- **Modern Healthcare UI** - Clean, professional design with teal and blue color scheme
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- **Glass-morphism Effects** - Modern card designs with backdrop blur
- **Smooth Animations** - Framer Motion for page transitions and micro-interactions
- **Data Visualization** - Interactive charts and graphs for analytics
- **Accessibility** - WCAG compliant design with proper contrast and navigation

## 📊 Drug Interaction Logic

The system includes a comprehensive database of drug interactions including:
- **Drug-Drug Interactions** - Dangerous combinations between medications
- **Drug-Disease Interactions** - Medications that worsen existing conditions
- **Severity Levels** - Low, medium, and high-risk classifications

Example interactions:
- Warfarin + Aspirin (High risk - bleeding)
- Metformin + Kidney Disease (High risk - lactic acidosis)
- ACE Inhibitors + Pregnancy (High risk - birth defects)

## 🎯 Key Features Demonstrated

1. **Full-Stack Development** - Complete React frontend with Flask backend
2. **Database Design** - Normalized MySQL schema with relationships
3. **Authentication System** - Secure login/signup with session management
4. **API Development** - RESTful endpoints with proper error handling
5. **Data Visualization** - Charts and graphs using Recharts
6. **Responsive Design** - Mobile-first approach with Tailwind CSS
7. **Modern UI/UX** - Professional healthcare application design
8. **Real-world Application** - Solves actual healthcare problems

## 🏆 Academic Project Value

This project demonstrates:
- **Technical Skills** - Full-stack development, database design, API development
- **Problem-Solving** - Addressing real-world healthcare challenges
- **User Experience** - Intuitive design for medical professionals
- **Data Analysis** - Comprehensive reporting and analytics
- **Security** - Proper authentication and data protection
- **Scalability** - Architecture designed for growth and expansion

## 📞 Contact

**Development Team:**
- Dr. Sarah Johnson - Lead Developer (sarah.johnson@university.edu)
- Dr. Michael Chen - Backend Developer (michael.chen@university.edu)
- Dr. Emily Rodriguez - Frontend Developer (emily.rodriguez@university.edu)

**Department:** AI & Data Science  
**University:** [Your University Name]  
**Project Year:** 2024

---

*Vaidya X - Revolutionizing healthcare safety through intelligent technology*
