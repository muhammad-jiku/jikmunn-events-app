import React, { useEffect, useState } from 'react';

//  internal imports
import MainLayout from '../src/components/Layout/MainLayout';
import '../styles/globals.css';
import '../styles/general.sass';

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
