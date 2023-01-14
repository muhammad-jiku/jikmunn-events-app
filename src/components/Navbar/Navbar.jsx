import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from '../../../styles/Home.module.css';

const Navbar = () => {
  return (
    <header>
      <div className="topNav">
        <Image
          src="/assets/images/logo_black.png"
          alt="logo"
          width={50}
          height={50}
        />
        <nav>
          <ul>
            <li>
              <Link href="/" passHref>
                Home
              </Link>
            </li>
            <li>
              <Link href="/events" passHref>
                Events
              </Link>
            </li>
            <li>
              <Link href="/about" passHref>
                About Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <h1> This is an events app</h1>
    </header>
  );
};

export default Navbar;
