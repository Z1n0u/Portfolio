
import { useGLTF } from '@react-three/drei'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
export function Model(props :any) {
  const { nodes, materials } = useGLTF('/port/scene.glb')
  return (
    <group {...props} dispose={null}>
        <OrbitControls />
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
