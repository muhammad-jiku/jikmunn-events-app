import Image from 'next/image';
import React from 'react';

const SingleEventPerId = ({ data }) => {
  return (
    <div className="event_single_page">
      <h1> {data.title} </h1>
      <Image src={data.image} width={1000} height={500} alt={data.title} />
      <p> {data.description} </p>
    </div>
  );
};

export default SingleEventPerId;
