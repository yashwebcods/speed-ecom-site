"use client"

import { useRef, useMemo, useEffect, useState, Suspense } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { useTexture, Billboard, RoundedBox } from "@react-three/drei"
import * as THREE from "three"

const SECONDARY = new THREE.Color("#4f72d4")
const ACCENT = new THREE.Color("#dfc94a")
const GLOW = new THREE.Color("#7899f0")
const PRIMARY = new THREE.Color("#1a2a5e")

const PLATFORM_LOGOS = [
  "/meesho.jpg",
  "/flipkart.jpg",
  "/amazon.png",
  "/myntra.png",
  "/Snapdeal.png",
]

// Two distinct intersecting rings as requested
const RINGS = [
  { tiltX: 0.45, tiltZ: 0.15, radius: 1.25, speed: 0.35 },
  { tiltX: -0.15, tiltZ: -0.45, radius: 1.50, speed: 0.25 },
]

const LOGO_CONFIG = [
  { ringIndex: 0, offset: 0.0 }, // Meesho
  { ringIndex: 1, offset: 0.0 }, // Flipkart
  { ringIndex: 0, offset: 2.1 }, // Amazon
  { ringIndex: 1, offset: 3.14 }, // Myntra
  { ringIndex: 0, offset: 5.2 }, // Snapdeal
]

// ─── Orbit ring ───────────────────────────────────────────────────────────────
function OrbitRing({ radius, tiltX = 0, tiltZ = 0 }: {
  radius: number; tiltX?: number; tiltZ?: number;
}) {
  return (
    <group rotation={[tiltX, 0, tiltZ]}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[radius, 0.012, 16, 100]} />
        <meshBasicMaterial transparent opacity={0.6} />
      </mesh>
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
function LogoOrbit({ texturePath, ringIndex, offset }: {
  texturePath: string; ringIndex: number; offset: number
}) {
  const pivotRef = useRef<THREE.Group>(null!)
  const meshRef = useRef<THREE.Mesh>(null!)
  const texture = useTexture(texturePath)
  const ring = RINGS[ringIndex]

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
    const t = clock.getElapsedTime() * ring.speed + offset
    if (pivotRef.current) {
      pivotRef.current.rotation.y = -t
    }
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.4 + offset) * 0.15
    }
  })

  return (
    <group rotation={[ring.tiltX, 0, ring.tiltZ]}>
      <group ref={pivotRef}>
        <group position={[ring.radius, 0, 0]}>
          <Billboard>
            <mesh ref={meshRef} material={mat}>
              <planeGeometry args={[0.46, 0.46]} />
            </mesh>
          </Billboard>
        </group>
      </group>
    </group>
  )
}

function LogoOrbits() {
  return (
    <>
      {PLATFORM_LOGOS.map((src, i) => {
        const cfg = LOGO_CONFIG[i]
        return (
          <LogoOrbit
            key={src}
            texturePath={src}
            ringIndex={cfg.ringIndex}
            offset={cfg.offset}
          />
        )
      })}
    </>
  )
}

// ─── Central glowing box ──────────────────────────────────────────────────────
function CentralBox() {
  const meshRef = useRef<THREE.Group>(null!)
  const glowRef = useRef<THREE.Group>(null!)
  const logoTexture = useTexture("/logo_light.png")

  useMemo(() => {
    logoTexture.colorSpace = THREE.SRGBColorSpace
    // Reset wrapping to ensure clean 1:1 application on planes
    logoTexture.wrapS = THREE.ClampToEdgeWrapping
    logoTexture.wrapT = THREE.ClampToEdgeWrapping
    logoTexture.repeat.set(1, 1)
    logoTexture.offset.set(0, 0)
  }, [logoTexture])

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    if (meshRef.current) {
      // Horizontal rotation
      meshRef.current.rotation.y = t * 0.4

      // Vertical movement (floating up and down)
      meshRef.current.position.y = Math.sin(t * 0.8) * 0.15

      // Subtle tilt for extra depth
      meshRef.current.rotation.x = Math.sin(t * 0.4) * 0.1
    }
    if (glowRef.current) {
      glowRef.current.scale.setScalar(1 + Math.sin(t * 1.6) * 0.05)
      // Sync glow with mesh position
      glowRef.current.position.y = Math.sin(t * 0.8) * 0.15
    }
  })

  return (
    <group>
      <group ref={meshRef}>
        <RoundedBox args={[0.6, 0.6, 0.6]} radius={0.1} smoothness={4}>
          <meshStandardMaterial
            color="#ffffff" // White base
            emissive={SECONDARY}
            emissiveIntensity={0.2}
            roughness={0.3}
            metalness={0.6}
          />
        </RoundedBox>
        {/* Logos mapped explicitly using planes to guarantee perfect layout on all 6 sides */}
        <mesh position={[0, 0, 0.31]} rotation={[0, 0, 0]}>
          <planeGeometry args={[0.38, 0.38]} />
          <meshBasicMaterial map={logoTexture} side={THREE.DoubleSide} />
        </mesh>
        <mesh position={[0, 0, -0.31]} rotation={[0, Math.PI, 0]}>
          <planeGeometry args={[0.38, 0.38]} />
          <meshBasicMaterial map={logoTexture} side={THREE.DoubleSide} />
        </mesh>
        <mesh position={[0.31, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
          <planeGeometry args={[0.38, 0.38]} />
          <meshBasicMaterial map={logoTexture} side={THREE.DoubleSide} />
        </mesh>
        <mesh position={[-0.31, 0, 0]} rotation={[0, -Math.PI / 2, 0]}>
          <planeGeometry args={[0.38, 0.38]} />
          <meshBasicMaterial map={logoTexture} side={THREE.DoubleSide} />
        </mesh>
        <mesh position={[0, 0.31, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[0.38, 0.38]} />
          <meshBasicMaterial map={logoTexture} side={THREE.DoubleSide} />
        </mesh>
        <mesh position={[0, -0.31, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <planeGeometry args={[0.38, 0.38]} />
          <meshBasicMaterial map={logoTexture} side={THREE.DoubleSide} />
        </mesh>
      </group>

      <group ref={glowRef}>
        <RoundedBox args={[0.72, 0.72, 0.72]} radius={0.12} smoothness={4}>
          <meshBasicMaterial color={GLOW} transparent opacity={0.10} />
        </RoundedBox>
      </group>
      <RoundedBox args={[1.0, 1.0, 1.0]} radius={0.15} smoothness={4}>
        <meshBasicMaterial color={GLOW} transparent opacity={0.04} />
      </RoundedBox>

      {/* Gold accent dot */}
      <mesh position={[0.3, 0.3, 0.35]}>
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
      const r = 1.6 + Math.random() * 2.0
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta)
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
  const mouse = useRef({ x: 0, y: 0 })
  const target = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2
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

      {RINGS.map((ring, i) => (
        <OrbitRing
          key={i}
          radius={ring.radius}
          tiltX={ring.tiltX}
          tiltZ={ring.tiltZ}
        />
      ))}

      <CentralBox />

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
