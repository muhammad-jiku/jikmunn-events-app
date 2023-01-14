import MainLayout from '../src/components/Layout/MainLayout';
import '../styles/globals.css';
import '../styles/general.sass';
import React, { useEffect, useState } from 'react';

export default function App({ Component, pageProps }) {
  const [showing, setShowing] = useState(false);

  useEffect(() => {
    setShowing(true);
  }, []);

  if (!showing) {
    return null;
  }

  if (typeof window === 'undefined') {
    return <></>;
  } else {
    return (
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    );
  }
}
