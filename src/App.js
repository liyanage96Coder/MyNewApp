import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import PropertyList from './pages/PropertyList';
import PropertyDetail from './pages/PropertyDetail';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';


const App = () => {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <PageTransition>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/properties" element={<PropertyList />} />
          <Route path="/properties/:id" element={<PropertyDetail />} />
          
        </Routes>
      </PageTransition>
      <Footer />
    </>
  );
};

export default App;