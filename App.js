import React from "react"; // Importação da biblioteca "React"
import {Image} from 'react-native';
import styled from "styled-components/native";

const Header = styled.View`
  flex-direction: row;
  background-color:#DDD;
  height:500px;
  flex-wrap:wrap;
  justify-content:center;
`;
// criando um componente de texto
const Quadrado = styled.View`
  background-color:${props => props.cor};
  width:150px;
  height:150px;
  justify-content: center;
  align-items: center;
`;

const Pagina = styled.View`
  flex:1;
 
`;

function App() { // Função principal
  return ( // Exibe na tela
    // Estilizando um componente "View" externamente
    <Pagina>
      <Header>
      <Quadrado cor="#845ec2"></Quadrado>
      <Quadrado cor="#d65db1">
        
      <Image source={require('./src/imagens/índice.jpg')}//utilização de imagens internas 
             style={{width: 100, height: 100, backgroundColor: '#AAA'}}
             resizeMode='cover'         
      />
     
      </Quadrado>
      <Quadrado cor="#ff6f91"></Quadrado>    
      </Header>
    </Pagina>
  );
}

export default App;