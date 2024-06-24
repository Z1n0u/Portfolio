
import {Home} from './sections/Home'
import Navbar from './Compenents/Navbar'
import { Canvas,useFrame} from '@react-three/fiber'
import {Model} from './Compenents/Model'
import { Suspense, useMemo,useEffect, useRef } from 'react'
import * as THREE from 'three'
import { ScrollControls } from '@react-three/drei'
import { Work } from './sections/Work'

export default function App() {
const distance=25;
const angel=Math.PI/6;
const penumbra=0.5;
const decay=0.5;
const spotlight = useMemo(() => new THREE.SpotLight(0xffffff, 0.03, distance, angel, penumbra, decay), []);


return (
    <>
    {/* <div className='h-lvh'>
        <Canvas>
            <ambientLight intensity={1.9}  color={0x404040}/>
            <directionalLight intensity={0.5} color={0xffffff}  position={[15, 1.5, 2]} />
            <rectAreaLight intensity={0.15} color={0xffffff} width={0.8} height={0.5} position={[-0.1, 1.35, 0.01]} onUpdate={self => self.lookAt(0,0,100)} />
            <group>
                <primitive
                  object={spotlight}
                  position={[1, 1.5,0.25]}
                />
                <primitive object={spotlight.target} position={[0, 0, -5]} />
            </group>
            <Suspense fallback={null}>
              <ScrollControls pages={2.2}>
                <Model />
              </ScrollControls>
            </Suspense>
        </Canvas>
    </div> */}
      <Navbar/>
        <div className='relative top-0 left-0 w-full h-lvh overflow-x-hidden'>
          <Home/>
        </div>
          <Work/>
    </>
  )
}
