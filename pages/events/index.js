import React from 'react';
import styles from '../../styles/Home.module.css';

function Events() {
  return (
    <div className={styles.main}>
      <h1>This is our events</h1>
      <div>
        <a href="">
          <img src="" alt="" />
          <h2>Events in London</h2>
        </a>

        <a href="">
          <img src="" alt="" />
          <h2>Events in Doha</h2>
        </a>

        <a href="">
          <img src="" alt="" />
          <h2>Events in Dhaka</h2>
        </a>
      </div>
    </div>
  );
}

export default Events;

export async function getStaticProps() {
  const data = await import('/data/data.json');
  const { events_categories } = data;
  console.log(events_categories);
  return {
    props: {
      data: events_categories,
    },
  };
}
