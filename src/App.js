import React, { Component } from "react";

import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import About from "./components/About";
import Sobre from "./components/Sobre";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body{
    width:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color:#9B30FF;
    
  }
`;

class App extends Component {
  render() {
    return (
      <Container>
        <GlobalStyle />
        <About name="Mariana" age="18" study="Geografia" />
        <Sobre nome="Gabriel" idade="17" estudo="Ciências Biológicas" />
        <About name="Fernando" age="20" study="Ciência da Computação" />
        <Sobre nome="Dan" idade="21" estudo="Ciências Sociais" />
        <About name="Ana Paula" age="43" study="Ciências Biológicas" />
        <Sobre nome="Andreia" idade="42" estudo="Enfermagem" />
      </Container>
    );
  }
}

export default App;
