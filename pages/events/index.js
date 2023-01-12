import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from '../../styles/Home.module.css';

function Events({ data }) {
  // console.log(data);
  return (
    <div className={styles.main}>
      <h1>This is our events</h1>
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
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Events;

export async function getStaticProps() {
  const data = await import('/data/data.json');
  const { events_categories } = data;
  return {
    props: {
      data: events_categories,
    },
  };
}
