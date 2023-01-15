import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p> &copy; {year} time to code - Events project built wiht Next.js </p>
    </footer>
  );
};

export default Footer;
