import styled from "styled-components";

const Section = styled.section`
  padding: 120px 40px;
`;

const Heading = styled.h2`
  font-size: 32px;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.matcha};
`;

const Link = styled.a`
  font-size: 20px;
  color: ${({ theme }) => theme.sakura};
  transition: 0.3s;

  &:hover {
    opacity: 0.7;
  }
`;

export default function Contact() {
  return (
    <Section id="contact">
      <Heading>Let’s Connect</Heading>
      <p>mail me @</p><Link href="mailto:niveaarush@gmail.com">niveaarush@gmail.com</Link>
    </Section>
  );
}