import Tree from './Tree';
import { SoftShadows, OrbitControls, MapControls, Billboard, Text } from "@react-three/drei";

export default function Scene() {
  return <>
    <SoftShadows size={ 80 } samples={ 20 } focus={ 0 } />
    <OrbitControls />
    <MapControls />

    <Tree position={[-1, -2.5, -8]} />
    <Tree position={[-2, -1.5 , -6]} />
    <Tree position={[0, -1.2 , -3]} />
    <Tree position={[0, -1.5 , 0]} />
    <Tree position={[0, -1, 3]} />
    <Tree position={[0, -1.7, 6]} />

     <Billboard>
      <Text position={ [ 9.5, 1, 0]} fontSize={0.7} color="#000033">
        600 pts{'\n'}Mansão Civitas
      </Text>
      <Text position={ [ -9, 0, 0]} fontSize={0.35} color="#000033" >
        3x Conselheiro {'\n'} da Cidadania
      </Text>
      <Text position={ [ 1, 1.9, -2]} fontSize={0.5} color="#000033" >
        #1 Agente da {'\n'} Cidadania na EB1
      </Text>
    </Billboard>

    <ambientLight intensity={ 1 } />
    <directionalLight
      position={ [ 1, 3, 1.8] }
      intensity={ 4 }
      castShadow
      shadow-mapSize={ [1024 * 3, 1024 * 3] }
      shadow-camera-top={ 4 }
      shadow-camera-right={ 4 }
      shadow-camera-bottom={ -3 }
      shadow-camera-left={ -2 }
      shadow-camera-near={ 0.5 }
      shadow-camera-far={ 50 }
    />
  </>
}
