/* eslint-disable react/jsx-props-no-spreading */
import Script from 'next/script';
import { ThemeProvider } from 'next-themes';

import { NavBar, Footer } from '../components/index';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider attribute="class">
    <div>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </div>
    <Script src="https://kit.fontawesome.com/cc6a69dc75.js" crossOrigin="anonymous" />
  </ThemeProvider>
);

export default MyApp;
