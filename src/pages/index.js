import About from '../components/About/About';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Certifications from '../components/Certifications/Certifications';
import Experience from '../components/Experience/Experience';
import Hero from '../components/Hero/Hero';
import Positioning from '../components/Positioning/Positioning';
import Projects from '../components/Projects/Projects';
import Seo, { DEFAULT_DESCRIPTION, SITE_NAME, SITE_URL } from '../components/Seo/Seo';
import Strengths from '../components/Strengths/Strengths';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: SITE_NAME,
  url: SITE_URL,
  email: 'mailto:mandela@mandela.dev',
  jobTitle: 'Site Reliability & DevOps Engineer',
  description: DEFAULT_DESCRIPTION,
  image: `${SITE_URL}/profile-400.png`,
  sameAs: [
    'https://www.github.com/main-tech',
    'https://www.linkedin.com/in/mandela-mitau',
  ],
  knowsAbout: [
    'Site Reliability Engineering',
    'DevOps',
    'Kubernetes',
    'Amazon Web Services',
    'Terraform',
    'GitOps',
    'ArgoCD',
    'CI/CD',
    'Observability',
    'Platform Engineering',
  ],
};

const Home = () => {
  return (
    <>
      <Seo jsonLd={personJsonLd} />
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
    </>
  );
};

export default Home;
