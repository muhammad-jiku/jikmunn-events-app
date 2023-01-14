import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from '../../../styles/Home.module.css';

const Navbar = () => {
  return (
    <header>
      <div>
        <Image
          src="/assets/images/logo_black.png"
          alt="logo"
          width={50}
          height={50}
        />{' '}
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
      </div>
      <h1></h1>
    </header>
  );
};

export default Navbar;
