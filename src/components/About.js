import styled from "styled-components";

const Container1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: violet;
  width: 85vw;
  height: 30vh;
  border-radius: 20px;
  border: dashed 2px black;
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 5vh;
`;
const Sub = styled.h3`
  text-align: center;
`;
const Title = styled.h1`
  font-size: 2.5em;
`;

const About = ({ name, age, study }) => {
  return (
    <Container1>
      <Title>Olá,</Title>
      <Sub>
        meu nome é {name}, tenho {age} anos e estudo {study}
      </Sub>
    </Container1>
  );
};
export default About;
