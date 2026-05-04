"use client"

import { useRef, useMemo, useEffect, useState, Suspense } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { useTexture } from "@react-three/drei"
import * as THREE from "three"

const SECONDARY = new THREE.Color("#4f72d4")
const ACCENT    = new THREE.Color("#dfc94a")
const GLOW      = new THREE.Color("#7899f0")
const PRIMARY   = new THREE.Color("#1a2a5e")

const PLATFORM_LOGOS = [
  "/meesho.jpg",
  "/flipkart.jpg",
  "/amazon.png",
  "/myntra.png",
  "/jioMart.jpg",
]

// Keep orbits tighter so logos never clip outside canvas
const ORBIT_CONFIG = [
  { tiltX:  0.30, tiltZ:  0.10, radius: 0.95, speed: 0.42, offset: 0.0  },
  { tiltX: -0.50, tiltZ:  0.40, radius: 1.20, speed: 0.32, offset: 1.26 },
  { tiltX:  0.70, tiltZ: -0.30, radius: 1.45, speed: 0.24, offset: 2.51 },
  { tiltX:  0.10, tiltZ:  0.60, radius: 1.10, speed: 0.36, offset: 3.77 },
  { tiltX: -0.60, tiltZ: -0.20, radius: 1.30, speed: 0.28, offset: 5.03 },
]

// ─── Orbit ring ───────────────────────────────────────────────────────────────
function OrbitRing({ radius, tiltX = 0, tiltZ = 0, color }: {
  radius: number; tiltX?: number; tiltZ?: number; color: THREE.Color
}) {
  const positions = useMemo(() => {
    const pts: number[] = []
    for (let i = 0; i <= 128; i++) {
      const a = (i / 128) * Math.PI * 2
      pts.push(Math.cos(a) * radius, 0, Math.sin(a) * radius)
    }
    return new Float32Array(pts)
  }, [radius])

  return (
    <group rotation={[tiltX, 0, tiltZ]}>
      <line>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color={color} transparent opacity={0.20} />
      </line>
    </group>
  )
}

// ─── White-removal GLSL shaders (removes JPG white backgrounds) ───────────────
const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`
const fragmentShader = `
  uniform sampler2D map;
  varying vec2 vUv;
  void main() {
    vec4 c = texture2D(map, vUv);
    float brightness  = (c.r + c.g + c.b) / 3.0;
    float saturation  = max(c.r, max(c.g, c.b)) - min(c.r, min(c.g, c.b));
    if (brightness > 0.88 && saturation < 0.14) discard;
    gl_FragColor = c;
  }
`

// ─── Logo orbiting node ────────────────────────────────────────────────────────
function LogoOrbit({ texturePath, orbitRadius, speed, offset, tiltX, tiltZ }: {
  texturePath: string; orbitRadius: number; speed: number
  offset: number; tiltX: number; tiltZ: number
}) {
  const groupRef = useRef<THREE.Group>(null!)
  const meshRef  = useRef<THREE.Mesh>(null!)
  const texture  = useTexture(texturePath)

  const mat = useMemo(() => {
    texture.minFilter = THREE.LinearFilter
    texture.magFilter = THREE.LinearFilter
    texture.colorSpace = THREE.SRGBColorSpace
    return new THREE.ShaderMaterial({
      uniforms: { map: { value: texture } },
      vertexShader,
      fragmentShader,
      transparent: true,
      side: THREE.DoubleSide,
      depthWrite: false,
    })
  }, [texture])

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed + offset
    const x = Math.cos(t) * orbitRadius
    const z = Math.sin(t) * orbitRadius
    const tiltedY = -z * Math.sin(tiltX)
    const tiltedZ =  z * Math.cos(tiltX)
    groupRef.current.position.set(
      x * Math.cos(tiltZ) - tiltedY * Math.sin(tiltZ),
      x * Math.sin(tiltZ) + tiltedY * Math.cos(tiltZ),
      tiltedZ
    )
    meshRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.4 + offset) * 0.25
  })

  return (
    <group ref={groupRef}>
      <mesh ref={meshRef} material={mat}>
        <planeGeometry args={[0.46, 0.46]} />
      </mesh>
    </group>
  )
}

function LogoOrbits() {
  return (
    <>
      {PLATFORM_LOGOS.map((src, i) => {
        const cfg = ORBIT_CONFIG[i]
        return (
          <LogoOrbit
            key={src}
            texturePath={src}
            orbitRadius={cfg.radius}
            speed={cfg.speed}
            offset={cfg.offset}
            tiltX={cfg.tiltX}
            tiltZ={cfg.tiltZ}
          />
        )
      })}
    </>
  )
}

// ─── Central glowing sphere ───────────────────────────────────────────────────
function CentralSphere() {
  const meshRef = useRef<THREE.Mesh>(null!)
  const glowRef = useRef<THREE.Mesh>(null!)

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    meshRef.current.rotation.y = t * 0.25
    meshRef.current.rotation.x = Math.sin(t * 0.18) * 0.08
    glowRef.current.scale.setScalar(1 + Math.sin(t * 1.6) * 0.05)
  })

  return (
    <group>
      <mesh ref={meshRef}>
        <sphereGeometry args={[0.38, 64, 64]} />
        <meshStandardMaterial
          color={PRIMARY}
          emissive={SECONDARY}
          emissiveIntensity={0.6}
          roughness={0.2}
          metalness={0.85}
        />
      </mesh>
      <mesh ref={glowRef}>
        <sphereGeometry args={[0.46, 32, 32]} />
        <meshBasicMaterial color={GLOW} transparent opacity={0.10} />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.65, 16, 16]} />
        <meshBasicMaterial color={GLOW} transparent opacity={0.04} />
      </mesh>
      {/* Gold accent dot */}
      <mesh position={[0.25, 0.25, 0.18]}>
        <sphereGeometry args={[0.05, 8, 8]} />
        <meshStandardMaterial color={ACCENT} emissive={ACCENT} emissiveIntensity={1.2} />
      </mesh>
    </group>
  )
}

// ─── Background particles ─────────────────────────────────────────────────────
function Particles() {
  const count = 70
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const r     = 1.6 + Math.random() * 2.0
      const theta = Math.random() * Math.PI * 2
      const phi   = Math.acos(2 * Math.random() - 1)
      arr[i * 3]     = r * Math.sin(phi) * Math.cos(theta)
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      arr[i * 3 + 2] = r * Math.cos(phi)
    }
    return arr
  }, [])

  const ref = useRef<THREE.Points>(null!)
  useFrame(({ clock }) => { ref.current.rotation.y = clock.getElapsedTime() * 0.04 })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.020} color={SECONDARY} transparent opacity={0.4} sizeAttenuation />
    </points>
  )
}

// ─── Mouse parallax rig ───────────────────────────────────────────────────────
function CameraRig() {
  const mouse  = useRef({ x: 0, y: 0 })
  const target = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth  - 0.5) * 2
      mouse.current.y = -(e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener("mousemove", handler)
    return () => window.removeEventListener("mousemove", handler)
  }, [])

  useFrame(({ camera }) => {
    target.current.x += (mouse.current.x - target.current.x) * 0.04
    target.current.y += (mouse.current.y - target.current.y) * 0.04
    camera.position.x = target.current.x * 0.5
    camera.position.y = target.current.y * 0.35
    camera.lookAt(0, 0, 0)
  })

  return null
}

// ─── Scene ────────────────────────────────────────────────────────────────────
function Scene() {
  return (
    <>
      <CameraRig />
      <ambientLight intensity={1.0} />
      <pointLight position={[4, 4, 4]} intensity={1.6} color={GLOW} />
      <pointLight position={[-3, -2, -2]} intensity={0.6} color={ACCENT} />
      <directionalLight position={[0, 5, 5]} intensity={0.5} />

      {ORBIT_CONFIG.map((cfg, i) => (
        <OrbitRing
          key={i}
          radius={cfg.radius}
          tiltX={cfg.tiltX}
          tiltZ={cfg.tiltZ}
          color={i % 2 === 0 ? SECONDARY : GLOW}
        />
      ))}

      <CentralSphere />

      <Suspense fallback={null}>
        <LogoOrbits />
      </Suspense>

      <Particles />
    </>
  )
}

// ─── Exported component ───────────────────────────────────────────────────────
export function HeroThreeScene() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])
  if (!mounted) return null

  return (
    // overflow-visible so logos that slightly cross canvas edge are not clipped
    <div className="w-full h-full min-h-[520px]" style={{ overflow: "visible" }}>
      <Canvas
        camera={{ position: [0, 0, 5.0], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent", overflow: "visible" }}
      >
        <Scene />
      </Canvas>
    </div>
  )
}
