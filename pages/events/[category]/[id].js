import Image from 'next/image';
import React from 'react';
import SingleEventPerId from '../../../src/components/Events/SingleEvent';
import styles from '../../../styles/Home.module.css';

function SingleEvent({ data }) {
  // console.log(data);
  return <SingleEventPerId data={data} />;
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
