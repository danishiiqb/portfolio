import { collection, getDocs } from 'firebase/firestore';
import Head from 'next/head';
import Main from '../components/Home/Main';
import Layout from '../components/Layout';
import { db } from '../services/firebase';
import { v4 as uuidv4 } from 'uuid';

export default function Home({ projects }) {
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
        <Main projects={projects}></Main>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const projects = await getDocs(collection(db, 'projects'));
  const projectsArr = [];
  projects.forEach((docs) => {
    projectsArr.push({ ...docs.data(), index: docs.id });
  });
  let sortedProjects = projectsArr.sort((a, b) => a.filterId - b.filterId);
  return {
    props: {
      projects: sortedProjects,
    },
  };
}
