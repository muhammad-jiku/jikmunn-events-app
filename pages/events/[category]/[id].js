import React from 'react';

//  internal imports
import SingleEventPerId from '../../../src/components/Events/SingleEvent';

function SingleEvent({ data }) {
  return <SingleEventPerId data={data} />;
}

export default SingleEvent;

export async function getStaticPaths() {
  const data = await import('/data/data.json');
  const { allEvents } = data;
  const allPaths = allEvents?.map((event) => {
    return {
      params: {
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
  const data = await import('/data/data.json');
  const { allEvents } = data;
  const result = allEvents.find((event) => id === event?.id);
  return {
    props: {
      data: result,
    },
  };
}
