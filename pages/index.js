import Head from 'next/head';
import styles from '../styles/Home.module.css';

import Navbar from '../components/Navbar/Navbar';
import Container from '../components/Container';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';

export default function Home() {
  return (
    <>
      <Navbar />
      <Container>
        <Hero />
        <About />
        <Skills />
        <Projects />
      </Container>
    </>
  );
}
