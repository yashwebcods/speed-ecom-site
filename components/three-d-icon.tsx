"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Float, MeshDistortMaterial, MeshWobbleMaterial, ContactShadows, PerspectiveCamera } from "@react-three/drei"
import { useRef, useMemo } from "react"
import * as THREE from "three"

interface ThreeDIconProps {
  index: number
  color?: string
}

function IconShape({ index, color }: ThreeDIconProps) {
  const meshRef = useRef<THREE.Mesh>(null)
  
  const shape = useMemo(() => {
    switch (index % 6) {
      case 0: return <boxGeometry args={[1, 1, 1]} />
      case 1: return <sphereGeometry args={[0.7, 64, 64]} />
      case 2: return <torusGeometry args={[0.6, 0.25, 32, 100]} />
      case 3: return <octahedronGeometry args={[0.9]} />
      case 4: return <icosahedronGeometry args={[0.9]} />
      case 5: return <torusKnotGeometry args={[0.5, 0.18, 150, 20]} />
      default: return <boxGeometry args={[1, 1, 1]} />
    }
  }, [index])

  const materialColor = color?.includes('primary') ? '#2563eb' : color?.includes('accent') ? '#f59e0b' : '#2563eb'

  return (
    <Float speed={5} rotationIntensity={2} floatIntensity={2}>
      <mesh ref={meshRef} castShadow>
        {shape}
        <MeshDistortMaterial
          color={materialColor}
          speed={3}
          distort={0.45}
          radius={1}
          metalness={0.8}
          roughness={0.2}
          emissive={materialColor}
          emissiveIntensity={0.3}
        />
      </mesh>
    </Float>
  )
}

export function ThreeDCardIcon({ index, color }: ThreeDIconProps) {
  return (
    <div className="w-20 h-20 relative -ml-4 -mt-4">
      <Canvas 
        camera={{ position: [0, 0, 4], fov: 40 }} 
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 2]}
        shadows
      >
        <ambientLight intensity={0.7} />
        <pointLight position={[10, 10, 10]} intensity={2} />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1.5} castShadow />
        <IconShape index={index} color={color} />
        <ContactShadows position={[0, -1.5, 0]} opacity={0.4} scale={5} blur={2} far={4} />
      </Canvas>
    </div>
  )
}

