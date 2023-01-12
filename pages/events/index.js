import Image from 'next/image';
import React from 'react';
import styles from '../../styles/Home.module.css';

function Events({ data }) {
  // console.log(data);
  return (
    <div className={styles.main}>
      <h1>This is our events</h1>
      <div>
        {data.map((event, idx) => (
          <a key={idx} href={`/events/${event.id}`}>
            <Image
              src={`${event.image}`}
              alt={`${event.title}`}
              width={500}
              height={400}
            />
            <h2>{event.title}</h2>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Events;

export async function getStaticProps() {
  const data = await import('/data/data.json');
  const { events_categories } = data;
  console.log(events_categories);
  return {
    props: {
      data: events_categories,
    },
  };
}
