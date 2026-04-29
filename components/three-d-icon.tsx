"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Float, MeshDistortMaterial, MeshWobbleMaterial, ContactShadows, PerspectiveCamera } from "@react-three/drei"
import { useRef, useMemo } from "react"
import * as THREE from "three"

interface ThreeDIconProps {
  title: string
  color?: string
}

function IconShape({ title, color }: ThreeDIconProps) {
  const meshRef = useRef<THREE.Group>(null)

  const materialColor = color?.includes('primary') ? '#2563eb' : color?.includes('accent') ? '#f59e0b' : '#2563eb'
  const material = <MeshDistortMaterial
    color={materialColor}
    speed={2}
    distort={0.3}
    radius={1}
    metalness={0.8}
    roughness={0.2}
    emissive={materialColor}
    emissiveIntensity={0.2}
  />

  const renderShape = () => {
    const t = title.toLowerCase()

    if (t.includes('advertising') || t.includes('roi')) {
      // Bar Chart
      return (
        <group>
          <mesh position={[-0.4, -0.3, 0]}>
            <boxGeometry args={[0.3, 0.6, 0.3]} />
            {material}
          </mesh>
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[0.3, 1.2, 0.3]} />
            {material}
          </mesh>
          <mesh position={[0.4, 0.3, 0]}>
            <boxGeometry args={[0.3, 1.8, 0.3]} />
            {material}
          </mesh>
        </group>
      )
    }

    if (t.includes('sales') && t.includes('analysis')) {
      // Upward Arrow / Trending
      return (
        <group rotation={[0, 0, -Math.PI / 4]}>
          <mesh>
            <cylinderGeometry args={[0.1, 0.1, 2, 16]} />
            {material}
          </mesh>
          <mesh position={[0, 1, 0]}>
            <coneGeometry args={[0.3, 0.5, 16]} />
            {material}
          </mesh>
        </group>
      )
    }

    if (t.includes('discount') || t.includes('festival')) {
      // Gift Box / Strategy
      return (
        <group>
          <mesh>
            <boxGeometry args={[1.2, 1.2, 1.2]} />
            {material}
          </mesh>
          <mesh position={[0, 0.6, 0]}>
            <boxGeometry args={[1.4, 0.2, 1.4]} />
            {material}
          </mesh>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[0.4, 0.05, 16, 32]} />
            {material}
          </mesh>
        </group>
      )
    }

    if (t.includes('shipping') || t.includes('weight')) {
      // Package
      return (
        <group>
          <mesh>
            <boxGeometry args={[1.4, 1.4, 1.4]} />
            {material}
          </mesh>
          <mesh position={[0, 0, 0.71]}>
            <boxGeometry args={[1.4, 0.1, 0.05]} />
            <meshStandardMaterial color="#ffffff" opacity={0.5} transparent />
          </mesh>
        </group>
      )
    }

    if (t.includes('commission')) {
      // Detection / Magnifying Glass
      return (
        <group>
          <mesh>
            <torusGeometry args={[0.7, 0.1, 16, 100]} />
            {material}
          </mesh>
          <mesh position={[0.5, -0.8, 0]} rotation={[0, 0, -Math.PI / 4]}>
            <cylinderGeometry args={[0.1, 0.1, 1, 16]} />
            {material}
          </mesh>
          <mesh>
            <sphereGeometry args={[0.5, 32, 32]} />
            <meshStandardMaterial color={materialColor} opacity={0.3} transparent />
          </mesh>
        </group>
      )
    }

    if (t.includes('pricing') || t.includes('profit')) {
      // Coins / Dollar
      return (
        <group>
          <mesh position={[0, -0.3, 0]}>
            <cylinderGeometry args={[0.7, 0.7, 0.2, 32]} />
            {material}
          </mesh>
          <mesh position={[0, 0, 0]}>
            <cylinderGeometry args={[0.7, 0.7, 0.2, 32]} />
            {material}
          </mesh>
          <mesh position={[0, 0.3, 0]}>
            <cylinderGeometry args={[0.7, 0.7, 0.2, 32]} />
            {material}
          </mesh>
        </group>
      )
    }

    if (t.includes('warehouse') || t.includes('settlement')) {
      // Warehouse / Building
      return (
        <group>
          <mesh>
            <boxGeometry args={[1.5, 1, 1.2]} />
            {material}
          </mesh>
          <mesh position={[0, 0.8, 0]} rotation={[0, Math.PI / 4, 0]}>
            <cylinderGeometry args={[1.1, 1.1, 0.1, 4]} />
            {material}
          </mesh>
        </group>
      )
    }

    if (t.includes('growth') || t.includes('insight')) {
      // Lightbulb
      return (
        <group>
          <mesh position={[0, 0.3, 0]}>
            <sphereGeometry args={[0.7, 32, 32]} />
            {material}
          </mesh>
          <mesh position={[0, -0.3, 0]}>
            <cylinderGeometry args={[0.4, 0.4, 0.6, 16]} />
            {material}
          </mesh>
          <mesh position={[0, -0.7, 0]}>
            <cylinderGeometry args={[0.5, 0.5, 0.2, 16]} />
            {material}
          </mesh>
        </group>
      )
    }

    if (t.includes('weekend') || t.includes('optimization')) {
      // Lightning / Zap
      return (
        <group rotation={[0, 0, 0.2]}>
          <mesh position={[0, 0.4, 0]} rotation={[0, 0, -0.5]}>
            <boxGeometry args={[0.2, 1, 0.2]} />
            {material}
          </mesh>
          <mesh position={[0, -0.4, 0]} rotation={[0, 0, -0.5]}>
            <boxGeometry args={[0.2, 1, 0.2]} />
            {material}
          </mesh>
        </group>
      )
    }

    return (
      <mesh>
        <octahedronGeometry args={[1]} />
        {material}
      </mesh>
    )
  }

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.3
    }
  })

  return (
    <Float speed={4} rotationIntensity={1} floatIntensity={2}>
      <group ref={meshRef}>
        {renderShape()}
      </group>
    </Float>
  )
}

export function ThreeDCardIcon({ title, color }: ThreeDIconProps) {
  return (
    <div className="w-20 h-20 relative -ml-4 -mt-4">
      <Canvas
        camera={{ position: [0, 0, 4.5], fov: 40 }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 2]}
        shadows
      >
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} intensity={2} />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1.5} castShadow />
        <IconShape title={title} color={color} />
        <ContactShadows position={[0, -1.5, 0]} opacity={0.3} scale={5} blur={2.5} far={4} />
      </Canvas>
    </div>
  )
}


