import Head from 'next/head';
import styles from '../styles/Home.module.css';

import Navbar from '../components/Navbar/Navbar';
import Container from '../components/Container';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Socials from '../components/Socials';

export default function Home() {
  return (
    <>
      <Head>
        <title>Soumik Chaudhuri | Full-Stack Web Developer</title>
        <meta
          name='description'
          content='I am Soumik Chaudhuri and I am a Full-Stack web developer. I specialize in the MERN stack and I develop web applications with them.'
        />
        <meta
          name='keywords'
          content='web developer,web development,soumik chaudhuri,javascript,personal portfolio'
        />
        <meta name='author' content='Soumik Chaudhuri' />
      </Head>
      <Navbar />
      <Socials />
      <Container>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </Container>
    </>
  );
}
