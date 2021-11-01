import React from "react"; // Importação da biblioteca "React"
import styled from "styled-components/native";

const Header = styled.View`
  flex-direction: row;
  background-color:#DDD;
  height:200px;
  flex-wrap:wrap;
  justify-content:center;
`;
// criando um componente de texto
const Quadrado = styled.View`
  background-color:${props => props.cor};
  width:100px;
  height:50px;
`;
const Quadrado2 = styled.View`
  background-color:${props => props.cor};
  width:100px;
  height:50px;
`;

const Pagina = styled.View`
  flex:1;
 
`;

function App() { // Função principal
  return ( // Exibe na tela
    // Estilizando um componente "View" externamente
    <Pagina>
      <Header>
      <Quadrado2 cor="#845ec2"></Quadrado2>
        <Quadrado2 cor="#2c73d2"></Quadrado2>
      <Quadrado cor="#845ec2"></Quadrado>
      <Quadrado cor="#d65db1"></Quadrado>
      <Quadrado cor="#ff6f91"></Quadrado>
      <Quadrado2 cor="#845ec2"></Quadrado2>
        <Quadrado2 cor="#2c73d2"></Quadrado2>
        <Quadrado2 cor="#0081cf"></Quadrado2>
        <Quadrado cor="#d65db1"></Quadrado>
      <Quadrado cor="#ff6f91"></Quadrado>
        <Quadrado2 cor="#0089ba"></Quadrado2>
        <Quadrado2 cor="#008e9b"></Quadrado2>
      <Quadrado cor="#ff9671"></Quadrado>
      <Quadrado cor="#ffc75f"></Quadrado>
      <Quadrado cor="#845ec2"></Quadrado>
           <Quadrado cor="#ffc75f"></Quadrado>
      <Quadrado2 cor="#845ec2"></Quadrado2>
        <Quadrado2 cor="#2c73d2"></Quadrado2>
        <Quadrado2 cor="#0081cf"></Quadrado2>
        <Quadrado cor="#d65db1"></Quadrado>
      <Quadrado cor="#ff6f91"></Quadrado>
      <Quadrado cor="#ff9671"></Quadrado>
        <Quadrado2 cor="#0089ba"></Quadrado2>
        <Quadrado2 cor="#008e9b"></Quadrado2>
      <Quadrado cor="#d65db1"></Quadrado>
      <Quadrado cor="#ff6f91"></Quadrado>
      <Quadrado cor="#ff9671"></Quadrado>
      <Quadrado cor="#ffc75f"></Quadrado>
      <Quadrado2 cor="#2c73d2"></Quadrado2>
        <Quadrado2 cor="#0081cf"></Quadrado2>
      <Quadrado cor="#845ec2"></Quadrado>
      
      <Quadrado cor="#ff9671"></Quadrado>
      <Quadrado2 cor="#2c73d2"></Quadrado2>
        <Quadrado2 cor="#0081cf"></Quadrado2>
      <Quadrado cor="#845ec2"></Quadrado>
      <Quadrado cor="#d65db1"></Quadrado>
      <Quadrado cor="#ff6f91"></Quadrado>
      <Quadrado2 cor="#845ec2"></Quadrado2>
        <Quadrado2 cor="#2c73d2"></Quadrado2>
        <Quadrado2 cor="#0081cf"></Quadrado2>
        <Quadrado2 cor="#0089ba"></Quadrado2>
        <Quadrado2 cor="#008e9b"></Quadrado2>
      <Quadrado cor="#ff9671"></Quadrado>
      <Quadrado cor="#ffc75f"></Quadrado>
           <Quadrado cor="#ff9671"></Quadrado>
      <Quadrado cor="#ffc75f"></Quadrado>
      <Quadrado2 cor="#845ec2"></Quadrado2>
        <Quadrado2 cor="#2c73d2"></Quadrado2>
        <Quadrado2 cor="#0081cf"></Quadrado2>
        <Quadrado cor="#d65db1"></Quadrado>
      <Quadrado cor="#ff6f91"></Quadrado>
        <Quadrado2 cor="#0089ba"></Quadrado2>
        <Quadrado2 cor="#008e9b"></Quadrado2>
      <Quadrado cor="#d65db1"></Quadrado>
      <Quadrado cor="#ff6f91"></Quadrado>
      <Quadrado cor="#ff9671"></Quadrado>
      <Quadrado cor="#ffc75f"></Quadrado>
      <Quadrado cor="#845ec2"></Quadrado>
      <Quadrado cor="#d65db1"></Quadrado>
      <Quadrado cor="#ff6f91"></Quadrado>
      </Header>
    </Pagina>
  );
}

export default App;