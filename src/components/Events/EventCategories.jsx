import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const EventCategories = ({ data, pageName }) => {
  return (
    <div className="cat_events">
      <h1> Events in {pageName} </h1>

      <div className="content">
        {data.map((event, idx) => (
          <Link key={idx} href={`/events/${event.city}/${event.id}`} passHref>
            <a className="card">
              <Image
                width={300}
                height={300}
                alt={event.title}
                src={event.image}
              />
              <h2> {event.title} </h2>
              <p> {event.description} </p>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EventCategories;
