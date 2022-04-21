import Layout from '../components/Layout';
import { GlobalStyle } from '../components/styles/Global';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
