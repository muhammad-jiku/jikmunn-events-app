import Image from 'next/image';
import React from 'react';
import styles from '../../../styles/Home.module.css';

function EventCategory({ data }) {
  return (
    <div className={styles.main}>
      <div>
        <h1>All the events here</h1>
        {data.map((event, idx) => (
          <div key={idx}>
            {' '}
            <a href={`/events/${event.city}/${event.id}`}>
              <Image
                src={`${event.image}`}
                alt={`${event.title}`}
                width={200}
                height={200}
              />
              <h2>{event.title}</h2>
              <p>{event.description}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventCategory;

export async function getStaticPaths() {
  const data = await import('/data/data.json');
  const { events_categories } = data;
  const allPaths = events_categories?.map((event) => {
    return {
      params: {
        category: event?.id?.toString(),
      },
    };
  });

  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context.params.category;
  const data = await import('/data/data.json');
  const { allEvents } = data;
  const result = allEvents.filter((event) => event?.city === id);

  return {
    props: {
      data: result,
    },
  };
}
