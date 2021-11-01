import React from "react"; // Importação da biblioteca "React"
import styled from "styled-components/native";

// criando um componente de texto

const Quadrado = styled.View`
  background-color:${props => props.cor};
  width:30px;
  height:30px;
`;
const Quadrado2 = styled.View`
  background-color:${props => props.cor};
  width:30px;
  height:30px;
`;

const Pagina = styled.View`
  flex:1;
  flex-direction:row; 
  justify-content: center;
  align-items: center;
  
`;


function App() { // Função principal
  return ( // Exibe na tela
    // Estilizando um componente "View" externamente
    <>
    
      <Pagina>
        <Quadrado cor="#845ec2"></Quadrado>
        <Quadrado cor="#d65db1"></Quadrado>
        <Quadrado cor="#ff6f91"></Quadrado>
        <Quadrado cor="#ff9671"></Quadrado>
        <Quadrado cor="#ffc75f"></Quadrado>

      </Pagina>
      <Pagina>
        <Quadrado2 cor="#845ec2"></Quadrado2>
        <Quadrado2 cor="#2c73d2"></Quadrado2>
        <Quadrado2 cor="#0081cf"></Quadrado2>
        <Quadrado2 cor="#0089ba"></Quadrado2>
        <Quadrado2 cor="#008e9b"></Quadrado2>
      </Pagina></>
    
  );
}

export default App;