// src/components/Contact/Contact.jsx
import styled from "styled-components";
import { motion } from "framer-motion";

// Wrapper
const Section = styled.section`
  padding: 140px 40px 100px;
  text-align: center;
  position: relative;
`;

// Title
const Heading = styled(motion.h2)`
  font-size: 34px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.matcha};
  font-weight: 600;
`;

// Subtitle text
const Sub = styled(motion.p)`
  font-size: 18px;
  max-width: 540px;
  margin: 0 auto;
  opacity: 0.85;
  line-height: 1.8;
`;

// Glass card
const Card = styled(motion.div)`
  margin: 40px auto 0;
  max-width: 520px;
  padding: 30px;
  border-radius: 20px;
  background: ${({ theme }) => theme.cardBg};
  backdrop-filter: ${({ theme }) => theme.glassBlur};
  border: 1px solid rgba(0, 0, 0, 0.05);
`;

// Action link
const ContactLink = styled(motion.a)`
  display: block;
  margin: 16px 0;
  padding: 14px;
  font-size: 16px;
  border-radius: 12px;
  background: #ffffffb8;
  border: 1px solid rgba(0, 0, 0, 0.08);
  color: ${({ theme }) => theme.text};
  font-weight: 500;
  cursor: pointer;
  transition: background 0.25s ease;

  &:hover {
    background: ${({ theme }) => theme.sakura};
    transform: translateY(-3px);
  }
`;

// Divider (soft pastel line)
const Divider = styled.hr`
  margin: 26px auto;
  width: 60%;
  border: none;
  border-top: 1px solid rgba(0,0,0,0.06);
`;

export default function Contact() {
  return (
    <Section id="contact">
      <Heading
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        Let’s Connect
      </Heading>

      <Sub
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1.2 }}
        viewport={{ once: true }}
      >
        I’m always open to thoughtful conversations about engineering, AI,
        architecture, feedbacks and opportunities where intentional craftsmanship matters.
        Feel free to reach out.
      </Sub>

      <Card
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1.2 }}
        viewport={{ once: true }}
      >
        <ContactLink
          href="mailto:niveaarush@gmail.com"
          whileHover={{ scale: 1.02 }}
        >
          📫 Email — niveaarush@gmail.com
        </ContactLink>

        <Divider />

       
      </Card>
    </Section>
  );
}