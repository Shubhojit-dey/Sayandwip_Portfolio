import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css'

import Navbar from './landing/Navbar';
import LeftSidebar from './landing/LeftSidebar';
import Footer from './landing/Footer';

import AboutPage from "./landing/About/AboutPage"
import HomePage from './landing/Home/HomePage';
import ProjectPage from './landing/Projects/ProjectPage';


createRoot(document.getElementById('root')).render(
  <Router>
    <Navbar />
    <LeftSidebar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<ProjectPage />} />
      <Route path="/about-me" element={<AboutPage />} />
    </Routes>
   <Footer />
  </Router>
)
