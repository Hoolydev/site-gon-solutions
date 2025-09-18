import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import DifferentialSection from './components/DifferentialSection';
import ServicesSection from './components/ServicesSection';
import Animation3DSection from './components/Animation3DSection';
import TechSection from './components/TechSection';
import CTASection from './components/CTASection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';

const HomePage = () => (
  <>
    <HeroSection />
    <AboutSection />
    <DifferentialSection />
    <ServicesSection />
    <Animation3DSection />
    <TechSection />
    <CTASection />
    <ContactSection />
  </>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0c0414] text-white">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;