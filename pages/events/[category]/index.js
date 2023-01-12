import React from 'react';
import styles from '../../../styles/Home.module.css';

function EventCategory() {
  return (
    <div className={styles.main}>
      <h1>Events in london</h1>
      <div>
        <a href="/events/event1">
          <h2>Events 1</h2>
        </a>{' '}
        <a href="/events/event2">
          <h2>Events 2</h2>
        </a>{' '}
        <a href="/events/event3">
          <h2>Events 3</h2>
        </a>{' '}
        <a href="/events/event4">
          <h2>Events 4</h2>
        </a>
      </div>
    </div>
  );
}

export default EventCategory;
