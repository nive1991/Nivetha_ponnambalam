import styled from "styled-components";
import ProjectCard from "./ProjectCard";

const Section = styled.section`
  padding: 120px 40px;
`;

const Heading = styled.h2`
  font-size: 32px;
  margin-bottom: 40px;
  color: ${({ theme }) => theme.lavender};
`;

export default function Projects() {
  return (
    <Section id="projects">
      <Heading>Featured Work</Heading>

      <ProjectCard
        title="Spec driven AI development"
        desc="A framework for building AI features with clear specs, modular components, and robust guardrails."
        href="https://medium.com/@niveaarush/unmute-future-ai-7b70ea672b2f"
      />
      <ProjectCard
        title="Frontend Design System"
        desc="A React component library for building modern portfolios with a focus on accessibility, theming, and developer experience."
        href="https://github.com/nive1991/new-portfolio-design-system.git"
      />
      <ProjectCard
        title="Agentic Workflow Prototyping"
        desc="A prototype for testing agentic workflows using a simple task management interface and simulated LLM agents."
        href="https://github.com/nive1991/Agent_Tina.git"
      />
    </Section>
  );
}