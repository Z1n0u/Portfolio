
import { PerspectiveCamera, useGLTF, useScroll } from '@react-three/drei'
import { OrbitControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'
import * as THREE from 'three'

export function Model(props :any) {
  const scroll = useScroll()
  const { nodes, materials } = useGLTF('/port/scene.glb')
  const screenFrameref = useRef<THREE.Mesh>(null!)
  const [fov,setfov]=useState(10)
  const [target,settarget]=useState<THREE.Vector3>(new THREE.Vector3(-0.1,1.37,0))
  
  useFrame((state, delta) => {
    const r1 = scroll.range(0 / 3, 2 / 3)
    const r2 = scroll.range(1 / 3, 3 / 3)

    settarget(new THREE.Vector3(-0.1,THREE.MathUtils.lerp(1.34, 0.4, r2),0))
    state.camera.position.z = THREE.MathUtils.lerp(1, 3, r1)
    state.camera.position.y = THREE.MathUtils.lerp(1.4, 2, r1)
    setfov(THREE.MathUtils.lerp(20, 40, r1))
  })

  return (
    <group {...props} dispose={null}>
        <PerspectiveCamera position={[-0.1,1.4,1]} fov={fov}  makeDefault/>
        <OrbitControls enableZoom={false} enableRotate={false} target={target}/>
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Keyboard as THREE.Mesh).geometry}
        material={materials.Keyboard}

      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.DeskTable as THREE.Mesh).geometry}
        material={materials['Desk.Table']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Screen as THREE.Mesh).geometry}
        material={materials.Screen}
        scale={0.213}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.DeskDrawers as THREE.Mesh).geometry}
        material={materials['Desk.Drawers']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.DeskHandles as THREE.Mesh).geometry}
        material={materials['Desk.Handles']}
        scale={0.006}
      />
      <mesh castShadow receiveShadow geometry={(nodes.Mouse as THREE.Mesh).geometry} material={materials.Mouse} />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Moleskine as THREE.Mesh).geometry}
        material={materials.Moleskine}
        rotation={[0, -0.226, 0]}
        scale={1.513}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Chair as THREE.Mesh).geometry}
        material={materials.Chair}
        rotation={[0, 0.996, Math.PI]}
        scale={0.25}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.ChairPied as THREE.Mesh).geometry}
        material={materials['Chair.Pied']}
        rotation={[0.443, 0.949, -0.247]}
        scale={[0.021, 0.234, 0.021]}
      />
      <mesh
        ref={screenFrameref}
        castShadow
        receiveShadow
        geometry={(nodes.ScreenFrame as THREE.Mesh).geometry}
        material={materials['Screen.Frame']}
        scale={0.213}
      />
      <mesh castShadow receiveShadow geometry={(nodes.Room as THREE.Mesh).geometry} material={materials.Room} />
      <mesh castShadow receiveShadow geometry={(nodes.Lamp as THREE.Mesh).geometry} material={materials.Lamp} />
    </group>
  )
}

useGLTF.preload('/port/scene.glb')


