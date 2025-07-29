import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ClerkProvider, useClerk } from "@clerk/clerk-react";
import { Outlet } from "react-router-dom";

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error('Add your Clerk Publishable Key to the .env file');
}

function AppContent() {
  const [selectedService, setSelectedService] = useState(null);
  const { openSignUp } = useClerk();

  const handleDetailsClick = (service) => setSelectedService(service);
  const handleCloseDetails = () => setSelectedService(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      openSignUp();
    }, 3000); // 3000 milliseconds = 3 seconds

    return () => clearTimeout(timer); // Cleanup on component unmount
  }, [openSignUp]);

  return (
    <div id="home" className="bg-black text-white font-sans">
      {/* NAVBAR */}
      <Navbar />
      <Outlet />
      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <AppContent />
    </ClerkProvider>
  );
}