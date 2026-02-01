
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Gallery from './pages/Gallery';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <a
  href="https://wa.me/27614174795?text=Hi%20Dynamic%20Eagle%2C%20I%20want%20to%20know%20more%20about%20your%20services"
  target="_blank"
  rel="noopener noreferrer"  // good security practice
  className="fixed bottom-6 right-6 bg-green-500 rounded-full p-4 shadow-xl hover:bg-green-600 transition-all duration-300 z-50"
>
  <img
    src="/images/whatsapp-icon.png"
    alt="Chat on WhatsApp"
    className="w-10 h-10 md:w-12 md:h-12"
  />
</a>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
