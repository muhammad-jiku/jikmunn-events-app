import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import EventPages from '../../src/components/Events/EventPages';

function Events({ data }) {
  // console.log(data);
  return <EventPages data={data} />;
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
