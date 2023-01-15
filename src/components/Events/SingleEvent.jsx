import Image from 'next/image';
import React, { useRef } from 'react';

const SingleEventPerId = ({ data }) => {
  const inputEmail = useRef('');
  const onSubmit = () => {
    console.log('Kire ki khbr?');
  };
  return (
    <div className="event_single_page">
      <h1> {data.title} </h1>
      <Image src={data.image} width={1000} height={700} alt={data.title} />
      <p> {data.description} </p>

      <form onSubmit={onSubmit} className="email_registration">
        <label> Get Registered for this event!</label>
        <input
          ref={inputEmail}
          type="email"
          id="email"
          placeholder="Please insert your email here"
        />
        <button type="submit"> Submit</button>
      </form>
    </div>
  );
};

export default SingleEventPerId;
