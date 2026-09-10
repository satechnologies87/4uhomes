import React from 'react';
import Hero from '../components/Hero';
import ScrollHouse from '../components/ScrollHouse';
import About from '../components/About';
import Services from '../components/Services';
import Process from '../components/Process';
import Projects from '../components/Projects';
import WhyChooseUs from '../components/WhyChooseUs';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import Team from '../components/Team';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <ScrollHouse />
      <About />
      <Services />
      <Process />
      <Projects />
      <WhyChooseUs />
      <Stats />
      <Testimonials />
      <Team />
      <FAQ />
      <Contact />
    </main>
  );
}
