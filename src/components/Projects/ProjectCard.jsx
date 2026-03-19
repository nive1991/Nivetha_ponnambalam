import styled from "styled-components";
import { motion } from "framer-motion";

const Card = styled(motion.div)`
  padding: 30px;
  background: ${({ theme }) => theme.cardBg};
  border-radius: 20px;
  backdrop-filter: ${({ theme }) => theme.glassBlur};
  border: 1px solid rgba(0,0,0,0.05);
  margin-bottom: 20px;
  cursor: pointer;
`;

export default function ProjectCard({ title, desc, href }) {
  const handleClick = () => {
    if (href) {
      window.open(href, "_blank");
    }
  };

  return (
    <Card
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 120 }}
      onClick={handleClick}
    >
      <h3 style={{ color: "#9c8ee0", fontSize: "22px" }}>{title}</h3>
      <p style={{ marginTop: "10px", opacity: 0.8 }}>{desc}</p>
    </Card>
  );
}