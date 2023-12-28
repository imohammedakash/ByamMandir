"use Client"
import React, { ReactNode } from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

interface WrapperProps {
  children: ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Wrapper;
