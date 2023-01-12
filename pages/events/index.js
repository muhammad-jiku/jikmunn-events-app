import React from 'react';
import styles from '../../styles/Home.module.css';

function Page() {
  return (
    <div className={styles.main}>
      <h1>This is our events page</h1>
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

export default Page;
