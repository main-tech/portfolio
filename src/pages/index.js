import About from '../components/About/About';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Certifications from '../components/Certifications/Certifications';
import Experience from '../components/Experience/Experience';
import Hero from '../components/Hero/Hero';
import Positioning from '../components/Positioning/Positioning';
import Projects from '../components/Projects/Projects';
import Strengths from '../components/Strengths/Strengths';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <About />
      <Experience />
      <Technologies />
      <Strengths />
      <Certifications />
      <Projects />
      <Timeline />
      <Positioning />
    </Layout>
  );
};

export default Home;
