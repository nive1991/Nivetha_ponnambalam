// src/components/Hero/HeroNew.jsx
import { motion } from "framer-motion";
import styled from "styled-components";
import { useMemo } from "react";

// Reusable UI
const Section = styled.section`
  padding: 160px 40px 100px;
  min-height: 90vh;
  position: relative;
`;

const Title = styled(motion.h1)`
  font-size: clamp(36px, 6vw, 56px);
  line-height: 1.25;
  color: ${({ theme }) => theme.text};

  .accent {
    color: ${({ theme }) => theme.sakura};
  }
`;

const Subtitle = styled(motion.p)`
  margin-top: 14px;
  max-width: 720px;
  font-size: clamp(16px, 2.2vw, 20px);
  opacity: 0.9;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 18px;
`;

const Badge = styled(motion.span)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 999px;
  border: 1px solid rgba(0,0,0,0.06);
  background: ${({ theme }) => theme.cardBg};
  backdrop-filter: ${({ theme }) => theme.glassBlur};
  font-size: 14px;
`;

const CTAGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 28px;
`;

const Button = styled(motion.a)`
  padding: 12px 16px;
  border-radius: 12px;
  border: 1px solid rgba(0,0,0,0.08);
  background: ${({ primary, theme }) => (primary ? theme.sakura : theme.cardBg)};
  color: ${({ primary, theme }) => (primary ? "#2E2E2E" : theme.text)};
  font-weight: 600;
  cursor: pointer;
`;

const Chip = styled(motion.span)`
  font-size: 13px;
  padding: 8px 12px;
  border-radius: 999px;
  border: 1px dashed rgba(0,0,0,0.1);
  background: #ffffffa6;
`;

const LightNote = styled.p`
  margin-top: 14px;
  font-size: 13px;
  opacity: 0.7;
`;

const Divider = styled.hr`
  margin: 28px 0 18px;
  border: none;
  border-top: 1px solid rgba(0,0,0,0.06);
`;

const Inline = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
`;

// Utility: availability based on user’s local time
const getAvailability = () => {
  const now = new Date();
  const hour = now.getHours();
  const isWorking = hour >= 9 && hour <= 17; // soft signal for business hours
  return isWorking ? "Responds same day" : "Responds within 24h";
};

export default function Hero() {
  const availability = useMemo(getAvailability, []);

  return (
    <Section id="home" aria-label="Introduction">
      <Title
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1 }}
      >
        Hi, I’m <span className="accent">Nivetha</span> — Software Engineer Lead
        <br />
        building <span className="accent">reliable systems</span> and <span className="accent">applied AI</span> features.
      </Title>

      <Subtitle
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.45, duration: 1.2 }}
      >
        I design, ship, and scale user‑centric platforms with a balance of <b>clean architecture</b>,
        <b> API integration</b>, and <b>developer experience</b>. Currently exploring retrieval‑augmented
        generation (RAG), evaluation pipelines, and security enhanced AI in production.
      </Subtitle>

      {/* Credibility metrics */}
      <Row as={motion.div}
        initial="hidden"
        animate="show"
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { staggerChildren: 0.08 } },
        }}
      >
        <Badge variants={{ hidden: { y: 10, opacity: 0 }, show: { y: 0, opacity: 1 } }}>
          🚀 Impact: <b>cut deploy time 45%</b>
        </Badge>
        <Badge variants={{ hidden: { y: 10, opacity: 0 }, show: { y: 0, opacity: 1 } }}>
          📈 Reliability: <b>99.95% SLO</b>
        </Badge>
        <Badge variants={{ hidden: { y: 10, opacity: 0 }, show: { y: 0, opacity: 1 } }}>
          🧪 AI: <b>RAG + Eval + Guardrails</b>
        </Badge>
        <Badge variants={{ hidden: { y: 10, opacity: 0 }, show: { y: 0, opacity: 1 } }}>
          📚 Certs: <Inline> <b>Google ACE • Google ML • IBM AI</b></Inline>
        </Badge>
        <Badge variants={{ hidden: { y: 10, opacity: 0 }, show: { y: 0, opacity: 1 } }}>
          📍 Älmhult • Hybrid • Onsite
        </Badge>
      </Row>

      {/* Primary CTAs */}
      <CTAGroup>
        <Button
          primary
          href={`${process.env.PUBLIC_URL}/Nivetha-Ponnambalam-Resume.pdf`}
          target="_blank"
          rel="noreferrer noopener"
          whileHover={{ y: -2, scale: 1.01 }}
        >
          View Resume
        </Button>
        <Button
          href="mailto:niveaarush@gmail.com?subject=Opportunities%20for%20Software%20Engineer%20Lead"
          whileHover={{ y: -2 }}
        >
          Email Me
        </Button>
        <Button href="https://www.linkedin.com/" target="_blank" rel="noreferrer" whileHover={{ y: -2 }}>
          LinkedIn
        </Button>
        <Button href="https://github.com/" target="_blank" rel="noreferrer" whileHover={{ y: -2 }}>
          GitHub
        </Button>
      </CTAGroup>

      <LightNote role="status" aria-live="polite">
        {availability} • Open to <b>EU remote</b> and <b>Sweden‑based hybrid</b>
      </LightNote>

      <Divider />

      {/* Focus areas with chips (skimmable for recruiters) */}
      <Row>
        <Chip whileHover={{ y: -2 }}>System Design (event-driven)</Chip>
        <Chip whileHover={{ y: -2 }}>API Platforms & SDKs</Chip>
        <Chip whileHover={{ y: -2 }}>RAG, LLMs, Agentic AI, AI Architecture</Chip>
        <Chip whileHover={{ y: -2 }}>Eval (quality, safety, cost)</Chip>
        <Chip whileHover={{ y: -2 }}>Observability (SLO, tracing)</Chip>
        <Chip whileHover={{ y: -2 }}>CI/CD & DevOps</Chip>
      </Row>

      <Row style={{ marginTop: 8 }}>
        <Chip whileHover={{ y: -2 }}>Java, Golang, Python, JavaScript, TypeScript</Chip>
        <Chip whileHover={{ y: -2 }}>React, Node.js, NextJS</Chip>
        <Chip whileHover={{ y: -2 }}>FastAPI, Express</Chip>
        <Chip whileHover={{ y: -2 }}>PostgreSQL, MySQL</Chip>
        <Chip whileHover={{ y: -2 }}>Docker, K8s, Helm</Chip>
        <Chip whileHover={{ y: -2 }}>GCP,Google AI Platform, IBM Watson</Chip>
        <Chip whileHover={{ y: -2 }}>Vertex AI</Chip>
      </Row>
      
      <Row style={{ alignItems: "center" }}>
        <LightNote>Featured / Trusted by</LightNote>
        <Chip whileHover={{ y: -1 }}>Internal Innovation Program</Chip>
        <Chip whileHover={{ y: -1 }}>Hackathon topper(Google AI Hackathon)</Chip>
        <Chip whileHover={{ y: -1 }}>Tech Conference(Google Tech Conferences)</Chip>
      </Row>
      <Divider />
    </Section>
  );
}