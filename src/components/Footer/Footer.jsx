import React from 'react';
import styles from '../../../styles/Home.module.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <p> &copy; {year} time to code - Events project built wiht Next.js </p>
    </footer>
  );
};

export default Footer;
