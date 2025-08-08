// src/pages/Home.jsx
import React, { useState,useEffect } from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Service from "../components/Service";
import Contact from "../components/Contact";
import Policy from "../components/Policy";
import { useLocation } from "react-router-dom"; // new
import axios from "axios";

export default function Home() {

    //new
    const location = useLocation();
    useEffect(() => {
        if (location.state?.scrollTo === 'services') {
            const element = document.getElementById('services');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location.state]);
    
    //new

    const [form, setForm] = useState('');

    //Apply Now handler
    const ApplyNowHandler = async ({ amount, course, firstname, email, mobile }) => {
  try {
    const { data } = await axios.post(
  "http://localhost:4000/api/payu/get-payment", // Correct endpoint
  {
    amount: amount * 100,
    course: service.title,  // Use service.title instead of "course"
    firstname: "Actual Name", // Replace with dynamic data
    email: "user@example.com",
    mobile: "9876543210"
  },
  {
    headers: { "Content-Type": "application/json" }
  }
);

    if (data.success && data.paymentUrl) {
      window.location.href = data.paymentUrl;  // Redirect to PayU
    }
  } catch (error) {
    console.error("Payment error:", error);
    alert("Payment failed. Please try again.");
  }
};


  const [selectedService, setSelectedService] = useState(null);

  const handleDetailsClick = (service) => setSelectedService(service);
  const handleCloseDetails = () => setSelectedService(null);

 const services = [
    // 1-month programs (Full-Stack first)
    {
        title: "Full-Stack Developer",
        duration: "1-month",
        price: 99,
        cutPrice: "1,499",
        desc: (
            <> Intensive full-stack crash course covering frontend and backend fundamentals.</>
        ),
        details: [
            "Week 1 → HTML, CSS & JavaScript Essentials",
            "Week 2 → Frontend Framework (React/Angular)",
            "Week 3 → Backend Development (Node.js/Express)",
            "Week 4 → Database Integration & Mini Project"
        ]
    },
    {
        title: "Frontend (React)",
        duration: "1-month",
        price: 99,
        cutPrice: "1,499",
        desc: (
            <> Learn React.js through hands-on mini projects with Node.js backend.</>
        ),
        details: [
            "Week 1 → Fundamentals and Basics of React",
            "Week 2 → Components & State Management",
            "Week 3 → Backend Integration (Node & Express)",
            "Week 4 → Mini Project using React"
        ]
    },
    {
        title: "Frontend (Angular)",
        duration: "1-month",
        price: 99,
        cutPrice: "1,499",
        desc: (
            <> Build Angular apps with Node.js backend using Express.</>
        ),
        details: [
            "Week 1 → Angular Basics",
            "Week 2 → Components & Routing",
            "Week 3 → Backend with Node.js",
            "Week 4 → Mini Project"
        ]
    },
    {
        title: "Core Java Development",
        duration: "1-month",
        price: 99,
        cutPrice: "1,499",
        desc: (
            <> Strengthen Java basics with OOPs, JDBC & basic GUI projects.</>
        ),
        details: [
            "Week 1 → Java Basics + OOPs",
            "Week 2 → Exception & File Handling",
            "Week 3 → JDBC",
            "Week 4 → Mini Project"
        ]
    },
    {
        title: "Python Development",
        duration: "1-month",
        price: 99,
        cutPrice: "1,499",
        desc: (
            <> Learn Python programming with small projects & automation scripts.</>
        ),
        details: [
            "Week 1 → Python Basics",
            "Week 2 → Functions & Modules",
            "Week 3 → File Handling & Libraries",
            "Week 4 → Mini Project"
        ]
    },
    {
        title: "C++ Development",
        duration: "1-month",
        price: 99,
        cutPrice: "1,499",
        desc: (
            <> Master DSA and Object-Oriented Programming using C++.</>
        ),
        details: [
            "Week 1 → Basics + OOPs",
            "Week 2 → STL & Functions",
            "Week 3 → File I/O",
            "Week 4 → Mini Project"
        ]
    },

    // 3-month programs (Full-Stack first)
    {
        title: "Full-Stack Developer",
        duration: "3-month",
        price: 249,
        cutPrice: "3,499",
        desc: (
            <> Comprehensive full-stack training with multiple projects and deployment.</>
        ),
        details: [
            "Month 1 → Frontend Mastery & UI/UX Principles",
            "Month 2 → Backend Development & APIs",
            "Month 3 → Database Management & Deployment"
        ]
    },
    {
        title: "Frontend (React)",
        duration: "3-month",
        price: 249,
        cutPrice: "3,499",
        desc: (
            <> &nbsp; Frontend development with React, deployment & advanced projects.</>
        ),
        details: [
            "Month 1 → Fundamentals of React",
            "Month 2 → Advanced Topics & Minor Project",
            "Month 3 → Major Project & Certificate"
        ]
    },
    {
        title: "Frontend (Angular)",
        duration: "3-month",
        price: 249,
        cutPrice: "3,499",
        desc: (
            <> Create dynamic web apps with Angular and backend integration.</>
        ),
        details: [
            "Month 1 → Angular Basics",
            "Month 2 → Backend APIs + Minor Project",
            "Month 3 → Major Project & Certification"
        ]
    },
    {
        title: "Core Java Development",
        duration: "3-month",
        price: 249,
        cutPrice: "3,499",
        desc: (
            <> Advance Java, Spring Boot, JDBC, and APIs with real-world applications.</>
        ),
        details: [
            "Month 1 → Core Java & JDBC",
            "Month 2 → Spring Boot & Minor Project",
            "Month 3 → Major Project + APIs + Certification"
        ]
    },
    {
        title: "Python Development",
        duration: "3-month",
        price: 249,
        cutPrice: "3,499",
        desc: (
            <> Explore data science, web frameworks & automation using Python.</>
        ),
        details: [
            "Month 1 → Core Python",
            "Month 2 → Django/Flask & Minor Project",
            "Month 3 → Data Science + Major Project + Certificate"
        ]
    },
    {
        title: "C++ Development",
        duration: "3-month",
        price: 249,
        cutPrice: "3,499",
        desc: (
            <> Build large C++ projects, STL, and system-level programming skills.</>
        ),
        details: [
            "Month 1 → OOP + STL",
            "Month 2 → Projects + File Handling",
            "Month 3 → Major Project + Interview Prep"
        ]
    },

    // 6-month programs (Full-Stack first)
    {
        title: "Full-Stack Developer",
        duration: "6-month",
        price: 449,
        cutPrice: "5,499",
        desc: (
            <> Professional full-stack development program with industry projects and certifications.</>
        ),
        details: [
            "Month 1-2 → Core Frontend & Backend Technologies",
            "Month 3-4 → Advanced Full-Stack Architecture",
            "Month 5 → DevOps & Cloud Integration",
            "Month 6 → Capstone Project & Portfolio Development"
        ]
    },
    {
        title: "Frontend (React)",
        duration: "6-month",
        price: 449,
        cutPrice: "5,499",
        desc: (
            <> Comprehensive Frontend Development with React, multiple real-world projects and industry exposure.</>
        ),
        details: [
            "Month 1-2 → Core React Development Fundamentals",
            "Month 3-4 → Advanced Concepts & Project Development",
            "Month 5 → Deployment & Performance Optimization",
            "Month 6 → Capstone Project & Industry Certification"
        ]
    },
    {
        title: "Frontend (Angular)",
        duration: "6-month",
        price: 449,
        cutPrice: "5,499",
        desc: (
            <> End-to-end Frontend Development with Angular and enterprise-level project experience.</>
        ),
        details: [
            "Month 1-2 → Angular Deep Dive",
            "Month 3-4 → State Management & Micro Frontends",
            "Month 5 → Testing & Deployment Strategies",
            "Month 6 → Industry Project & Portfolio Development"
        ]
    },
    {
        title: "Core Java Development",
        duration: "6-month",
        price: 449,
        cutPrice: "5,499",
        desc: (
            <> Professional Java development with Spring ecosystem and cloud integration.</>
        ),
        details: [
            "Month 1-2 → Advanced Java & Spring Framework",
            "Month 3-4 → Spring Boot & Cloud Technologies",
            "Month 5 → System Design & Architecture",
            "Month 6 → Enterprise Project & Certification"
        ]
    },
    {
        title: "Python Development",
        duration: "6-month",
        price: 449,
        cutPrice: "5,499",
        desc: (
            <> Full-spectrum Python programming including web, data science and automation.</>
        ),
        details: [
            "Month 1-2 → Advanced Python & Web Frameworks",
            "Month 3-4 → Data Science & Machine Learning",
            "Month 5 → DevOps & Automation",
            "Month 6 → Comprehensive Project & Industry Prep"
        ]
    },
    {
        title: "C++ Development",
        duration: "6-month",
        price: 1,
        cutPrice: "5,499",
        desc: (
            <> Master systems programming, game development and performance optimization with C++.</>
        ),
        details: [
            "Month 1-2 → Advanced C++ & System Programming",
            "Month 3-4 → Game Development & Graphics",
            "Month 5 → Performance Tuning & Optimization",
            "Month 6 → Complex System Project & Certification"
        ]
    }
];

    return (
    <>
      {/* HERO SECTION */}
            <Hero />

            {/* ABOUT SECTION */}
            <About />

            {/* SERVICES SECTION */}
            <Service
                services={services}
                selectedService={selectedService}
                handleDetailsClick={handleDetailsClick}
                handleCloseDetails={handleCloseDetails}
                applyNowHandler={ApplyNowHandler}
            />

            {/* CONTACT SECTION */}
            <Contact />

            {/*POLICY SECTION*/}
            <Policy />
    </>
  );
}

