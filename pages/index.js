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
