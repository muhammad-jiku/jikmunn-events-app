import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const EventPages = ({ data }) => {
  return (
    <div className="events_page">
      {data?.map((event, idx) => (
        <Link key={idx} href={`/events/${event.id}`} passHref>
          <a className="card">
            <Image
              src={event.image}
              alt={event.title}
              width={500}
              height={500}
            />{' '}
            <h2>{event.title} </h2>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default EventPages;
