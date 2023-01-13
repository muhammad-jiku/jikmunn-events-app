import Image from 'next/image';
import React from 'react';
import styles from '../../../styles/Home.module.css';

function SingleEvent({ data }) {
  console.log(data);
  return (
    <div className={styles.main}>
      <div>
        <Image
          src={`${data.image}`}
          alt={`${data.title}`}
          width={1000}
          height={500}
        />
        <h2>{data.title}</h2>
        <h3>{data.city} City </h3>
        <p>{data.description}</p>
      </div>
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
        // category: data.city,
        // id: event?.id,
        category: event?.city?.toString(),
        id: event?.id?.toString(),
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
  const result = allEvents.find((event) => id === event?.id);
  // console.log(result);
  return {
    props: {
      data: result,
    },
  };
}
