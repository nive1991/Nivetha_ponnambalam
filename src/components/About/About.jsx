import styled from "styled-components";

const Section = styled.section`
  padding: 120px 40px;
`;

const Heading = styled.h2`
  font-size: 32px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.lavender};
`;

const Paragraph = styled.p`
  max-width: 700px;
  line-height: 1.7;
  opacity: 0.85;
`;

export default function About() {
  return (
    <Section id="about">
      <Heading>What am I really?</Heading>
     
<Paragraph>
    I’m a Software Engineer who enjoys building things that feel both
    <b> thoughtful</b> and <b>reliable</b>. A satisfied day for me is living at the 
    moment. I like to understand the “why” behind things, and I’m always looking for ways to make things more 
    intuitive, efficient, and delightful.
  </Paragraph>

  <Paragraph style={{ marginTop: "18px" }}>
    I am a very curious person which pulled me toward AI — not just the models
    themselves, but how they behave, how they break, and how they can be shaped
    into practical, safe features. Recently, I’ve been exploring embeddings,
    evaluation techniques,Spec driven development and ways to bring AI into real-world systems without
    compromising clarity or control.
  </Paragraph>

  <Paragraph style={{ marginTop: "18px" }}>
    Outside of work, I enjoy minimalistic design, curious learning, and
    turning complex ideas into simple mental models. I like connecting dots
    between disciplines, documenting what I learn, and approaching engineering
    almost like a craft — steady, intentional, and user-focused.
  </Paragraph>

    </Section>
  );
}