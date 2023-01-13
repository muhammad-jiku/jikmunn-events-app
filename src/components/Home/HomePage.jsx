import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from '../../../styles/Home.module.css';

const HomePage = ({ data }) => {
  return (
    <div>
      {data.map((event, idx) => (
        <Link key={idx} href={`/events/${event.id}`} passHref>
          <Image
            src={`${event.image}`}
            alt={`${event.title}`}
            width={200}
            height={200}
          />
          <h2>{event.title}</h2>
          <p>{event.description}</p>
        </Link>
      ))}
    </div>
  );
};

export default HomePage;
