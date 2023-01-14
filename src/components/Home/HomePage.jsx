import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const HomePage = ({ data }) => {
  return (
    <div className="home_body">
      {data.map((event, idx) => (
        <Link key={idx} href={`/events/${event.id}`} passHref legacyBehavior>
          <a className="card" href={`/events/${event.id}`}>
            {/* <Link className="card" href={`/events/${event.id}`}> */}
            <div className="image">
              <Image
                src={`${event.image}`}
                alt={`${event.title}`}
                width={480}
                height={380}
              />
            </div>
            <div className="content">
              <h2>{event.title}</h2>
              <p>{event.description}</p>
            </div>
          </a>
          {/* </Link> */}
        </Link>
      ))}
    </div>
  );
};

export default HomePage;
