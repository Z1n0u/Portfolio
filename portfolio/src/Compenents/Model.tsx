
import { Environment, PerspectiveCamera, useGLTF, useScroll } from '@react-three/drei'
import { OrbitControls,useTexture } from '@react-three/drei'
import { events, useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'
import * as THREE from 'three'

export function Model(props :any) {
  const scroll = useScroll()
  const { nodes, materials } = useGLTF('/port/scene.glb')
  const screenFrameref = useRef<THREE.Mesh>(null!)
  const [fov,setfov]=useState(10)
  const [target,settarget]=useState<THREE.Vector3>(new THREE.Vector3(-0.1,1.37,0))
  const [roommap,desktable,chair,deskdrawers,deskhandles,keybaord,lamp,moleskine,mouse,pied,screen,screenframe] = useTexture([
    '/port/Room_baked.jpg',
    '/port/Desk.Table_baked.jpg',
    '/port/Chair_baked.jpg',
    '/port/Desk.Drawers_baked.jpg',
    '/port/Desk.Handles_baked.jpg',
    '/port/Keyboard_baked.jpg',
    '/port/Lamp_baked.jpg',
    '/port/Moleskine_baked.jpg',
    '/port/Mouse_baked.jpg',
    '/port/Pied_baked.jpg',
    '/port/Screen_baked.jpg',
    '/port/Screen.Frame_baked.jpg'
  ])
  // const mouseXRef = useRef(0);

  // const handleMouseMove = (event:any) => {
  //   mouseXRef.current = (event.clientX / window.innerWidth) * 2 - 1;
  // };
  
  useFrame((state, delta) => {
      const r1 = scroll.range(0 / 3, 2 / 3)
      const r2 = scroll.range(1 / 3, 3 / 3)
      
      settarget(new THREE.Vector3(-0.1,THREE.MathUtils.lerp(1.34, 0.4, r2),0))
      state.camera.position.z = THREE.MathUtils.lerp(1, 3, r1)
      state.camera.position.y = THREE.MathUtils.lerp(1.4, 2, r1)
      setfov(THREE.MathUtils.lerp(20, 40, r1))

    // document.addEventListener('mousemove', (event) => {
    //   const mouseX = event.clientX; // X coordinate of mouse
    //   const windowWidth = window.innerWidth;
    
    //   // Calculate normalized position (-1 to 1)
    //   const normalizedX = (mouseX / windowWidth) * 2 - 1;
    
    //   // Adjust camera rotation based on mouse position
    //   const maxRotation = THREE.MathUtils.degToRad(30); // Maximum rotation angle
    //   state.camera.position.x = (maxRotation * normalizedX);
    // });
  }
  )

  return (
    <group  {...props} dispose={null}>
        <PerspectiveCamera position={[-0.1,1.4,1]} fov={fov}  makeDefault/>
        <OrbitControls enableZoom={false} enableRotate={false} target={target}/>
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Keyboard as THREE.Mesh).geometry}
        material={materials.Keyboard}

      >
        <meshStandardMaterial envMap={keybaord}/>
      </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.DeskTable as THREE.Mesh).geometry}
          material={materials['Desk.Table']}
          
        >
          <meshStandardMaterial envMap={desktable}/>
        </mesh>

      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Screen as THREE.Mesh).geometry}
        material={materials.Screen}
        scale={0.213}
      >
        <meshStandardMaterial envMap={screen}/>
       </mesh> 
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.DeskDrawers as THREE.Mesh).geometry}
        material={materials['Desk.Drawers']}
      >
        <meshStandardMaterial envMap={deskdrawers}/>
        </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.DeskHandles as THREE.Mesh).geometry}
        material={materials['Desk.Handles']}
        scale={0.006}
      >
        <meshStandardMaterial envMap={deskhandles}/>
        </mesh>
      <mesh castShadow receiveShadow geometry={(nodes.Mouse as THREE.Mesh).geometry} material={materials.Mouse} >
        <meshStandardMaterial envMap={mouse}/>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Moleskine as THREE.Mesh).geometry}
        material={materials.Moleskine}
        rotation={[0, -0.226, 0]}
        scale={1.513}
      >
        <meshStandardMaterial envMap={moleskine}/>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Chair as THREE.Mesh).geometry}
        material={materials.Chair}
        rotation={[0, 0.996, Math.PI]}
        scale={0.25}
      >
        <meshStandardMaterial envMap={chair}/>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.ChairPied as THREE.Mesh).geometry}
        material={materials['Chair.Pied']}
        rotation={[0.443, 0.949, -0.247]}
        scale={[0.021, 0.234, 0.021]}
      >
        <meshStandardMaterial envMap={pied}/>
      </mesh>
      <mesh
        ref={screenFrameref}
        castShadow
        receiveShadow
        geometry={(nodes.ScreenFrame as THREE.Mesh).geometry}
        material={materials['Screen.Frame']}
        scale={0.213}
      >
        <meshStandardMaterial envMap={screenframe}/>
      </mesh>
      <mesh castShadow receiveShadow geometry={(nodes.Room as THREE.Mesh).geometry} material={materials.Room}>
        <meshStandardMaterial envMap={roommap}/>
      </mesh>
      <mesh castShadow receiveShadow geometry={(nodes.Lamp as THREE.Mesh).geometry} material={materials.Lamp} >
        <meshStandardMaterial envMap={lamp}/>
      </mesh>
    </group>
  )
}

useGLTF.preload('/port/scene.glb')


