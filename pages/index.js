import Head from 'next/head';
import Main from '../components/Home/Main';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <>
      <Head>
        <title>hggh</title>
        <link
          rel='preload'
          href='/fonts/migraFont/Migra-Extrabold.woff'
          as='font'
          crossOrigin='anonymous'
        />
        <link
          rel='preload'
          href='/fonts/migraFont/MigraItalic-ExtraboldItalic.woff'
          as='font'
          crossOrigin='anonymous'
        />
        <link
          rel='preload'
          href='/fonts/tuskerFont/TuskerGrotesk-5500Medium.otf'
          as='font'
          crossOrigin='anonymous'
        />
        <link
          rel='preload'
          href='/fonts/tuskerFont/TuskerGrotesk-5700Bold.otf'
          as='font'
          crossOrigin='anonymous'
        />
        <link
          rel='preload'
          href='/fonts/tuskerFont/TuskerGrotesk-6600Semibold.otf'
          as='font'
          crossOrigin='anonymous'
        />
        <meta name='description' content='FrontEnd Developer' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <Main></Main>
      </Layout>
    </>
  );
}
