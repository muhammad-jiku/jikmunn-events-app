import Link from 'next/link';
import React from 'react';
import styles from '../../../styles/Home.module.css';

const Navbar = () => {
  return (
    <header className={styles.main}>
      <nav>
        <Link href="/" passHref>
          Home
        </Link>
        <Link href="/events" passHref>
          Events
        </Link>
        <Link href="/about" passHref>
          About Us
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
