import styled from "styled-components";

const Nav = styled.nav`
  width: 100%;
  padding: 18px 40px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  z-index: 100;
  backdrop-filter: ${({ theme }) => theme.glassBlur};
  background: ${({ theme }) => theme.cardBg};
  border-bottom: 1px solid rgba(0,0,0,0.05);
`;

const Logo = styled.h1`
  font-size: 20px;
  color: ${({ theme }) => theme.sakura};
  font-weight: 600;
`;

const Menu = styled.div`
  display: flex;
  gap: 24px;
  font-size: 16px;
`;


const Toggle = styled.button`
  font-size: 12px;
  padding: 4px 6px;
  border-radius: 8px;
  border: 1px solid rgba(0,0,0,0.08);
  background: ${({ theme }) => theme.cardBg};
  cursor: pointer;
  align-self: flex-start;
  margin-top: -2px;
`;


export default function Navbar({petalsOn, setPetalsOn}) {
  return (
    <Nav>
      <Logo>Nivetha Ponnambalam</Logo>
      <Menu>
        <a href="#about">About</a>
        <a href="#projects">Work</a>
        <a href="#contact">Contact</a>
        <Toggle onClick={() => setPetalsOn((v) => !v)}>
          {petalsOn ? "🌸 Off" : "🌸 On"}
        </Toggle>

      </Menu>
    </Nav>
  );
}