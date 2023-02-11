/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-props-no-spreading */
import { ThemeProvider } from 'next-themes';
import NavBar from 'components/NavBar';
import Footer from 'components/Footer';

import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider attribute="class">
    <div>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </div>
  </ThemeProvider>
);

export default MyApp;
