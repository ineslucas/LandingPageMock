import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { theme } from './Colors';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import Navigation from './Navigation.jsx'
import News from './components/News.jsx';
import ProposalsFeed from './components/ProposalsRanking.jsx';
import Updates from './components/Updates.jsx';
import Scene from './canvas_components/Scene.jsx';

const HorizontalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 175px;
  padding: 30px;
  height: 70vh;
  width: 850px;
  overflow-y: auto; /* Scrolling allowed! */
`;

const Title = styled.h1`
  font-size: 20px;
  text-align: left;
  color: ${props => props.theme.darkBlue};
  margin-bottom: 40px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
`;

function App() {
  const cameraRotation = [0, 1.5, 0];
  const cameraPosition = [4.5, 3, 0];

  return (
    <>
      <ThemeProvider theme={theme}>
        <Navigation />
        <HorizontalContainer>
          <Title>Estás em Zbigens - Sesimbra</Title>
          <Content>
            <News />
              {/* TBC: Missing title "Noticias" & "Propostas recentes" */}
            <Updates />
          </Content>
        </HorizontalContainer>
        <ProposalsFeed />
        <Canvas
          shadows
          dpr={ 1 }
          style={{ width: '100vw', height: '30vh', position: 'fixed', bottom: 0, right: 0 }}
          // , backgroundColor: 'rgb(181, 79, 111)'

          gl={ {
            antialias: true, // For smooth edges
            alpha: true, // for transparent background
            toneMapping: THREE.ACESFilmicToneMapping, // Default
          } }
          camera={{
            fov: 45,
            near: 0.1,
            far: 200,
            position: cameraPosition,
            rotation: cameraRotation,
          }}>
          <Scene />
        </Canvas>
      </ThemeProvider>
    </>
  )
}

export default App
