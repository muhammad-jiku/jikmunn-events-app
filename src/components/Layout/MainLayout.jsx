import React from 'react';

// internal imports
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
