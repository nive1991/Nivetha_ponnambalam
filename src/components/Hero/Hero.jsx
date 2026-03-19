import { motion } from "framer-motion";
import styled from "styled-components";

const HeroSection = styled.section`
  padding: 160px 40px;
  min-height: 100vh;
`;

const Title = styled(motion.h1)`
  font-size: 48px;
  line-height: 1.3;

  span {
    color: ${({ theme }) => theme.sakura};
  }
`;

const Subtitle = styled(motion.p)`
  margin-top: 20px;
  max-width: 500px;
  font-size: 18px;
  opacity: 0.8;
`;

export default function Hero() {
  return (
    <HeroSection>
      <Title
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        Hello, I'm <span>Nivetha</span>.
        <br /> I design elegant systems & explore AI deeply.
      </Title>

      <Subtitle
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 1.6 }}
      >
      A forward‑thinking Software Engineer driven by applied AI, high‑performance system design, and building clean, minimalistic digital experiences that scale.
      </Subtitle>
    </HeroSection>
  );
}