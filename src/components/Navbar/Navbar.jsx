import React from 'react';

//  internal imports
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <header>
      <div>
        <div className="topNav">
          <Link href="/" passHref>
            <Image
              src="/assets/images/logo_black.png"
              alt="logo"
              width={50}
              height={50}
            />
          </Link>
          <nav>
            <ul>
              <li>
                <Link href="/" passHref>
                  <Link href="/"> Home</Link>
                </Link>
              </li>
              <li>
                <Link href="/events" passHref>
                  <Link href="/events"> Events</Link>
                </Link>
              </li>
              <li>
                <Link href="/about" passHref>
                  <Link href="/about"> About us</Link>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        {/* <p className="title"> This is an events app</p> */}
      </div>
    </header>
  );
};

export default Navbar;
