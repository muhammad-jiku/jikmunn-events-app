import React from 'react';
import styles from '../../../styles/Home.module.css';

function SingleEvent() {
  return (
    <div className={styles.main}>
      <h1>Single Event </h1>
    </div>
  );
}

export default SingleEvent;

export async function getStaticPaths() {
  const data = await import('/data/data.json');
  const { allEvents } = data;
  const allPaths = allEvents?.map((event) => {
    return {
      params: {
        category: event.city,
        id: event?.id,
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
  const result = allEvents.filter((event) => id === event?.id);

  return {
    props: {
      data: result,
    },
  };
}
