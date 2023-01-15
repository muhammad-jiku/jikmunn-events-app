import React from 'react';

// internal imports
import EventCategories from '../../../src/components/Events/EventCategories';

function EventCategory({ data, pageName }) {
  return <EventCategories data={data} pageName={pageName} />;
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
      pageName: id,
    },
  };
}
