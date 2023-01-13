import React from 'react';
import styles from '../../../styles/Home.module.css';

function SingleEvent({ data }) {
  console.log(data);
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
    // console.log(event);
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
  const id = context.params.id;
  // console.log(id);
  const data = await import('/data/data.json');
  const { allEvents } = data;
  // console.log(allEvents);
  const result = allEvents.filter((event) => id === event?.id);
  // console.log(result);
  return {
    props: {
      data: result,
    },
  };
}
