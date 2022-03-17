import styled from "styled-components";

const Container2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #00bfff;
  width: 85vw;
  height: 30vh;
  border-radius: 20px;
  border: dashed 2px black;
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 5vh;
`;

const Title = styled.h1`
  font-size: 2.5em;
`;

const Sub = styled.h3`
  text-align: center;
`;

const Sobre = ({ nome, idade, estudo }) => {
  return (
    <Container2>
      <Title>Olá,</Title>
      <Sub>
        meu nome é {nome}, tenho {idade} anos e estudo {estudo}
      </Sub>
    </Container2>
  );
};

export default Sobre;
