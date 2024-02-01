import React, { useRef } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { PerspectiveCamera, OrbitControls, Stats } from "@react-three/drei";
import { Suspense } from "react";

interface ModelProps {
  nodes: { Scene: THREE.Group };
}

function Model({ nodes }: ModelProps) {
  const gltf = useRef<THREE.Group>();

  return <primitive ref={gltf} object={nodes.Scene} />;
}

interface CodeBird3DLogoProps {}

function CodeBird3DLogo({}: CodeBird3DLogoProps) {
  return (
    <div className="w-full h-full">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <Suspense fallback={null}>
          <Model {...useLoader(GLTFLoader, "/CodeBird3D.glb")} />
        </Suspense>
        <OrbitControls
          enableZoom
          zoomSpeed={0.5}
          minPolarAngle={Math.PI / 10}
          maxPolarAngle={Math.PI / 2}
        />
        {/* <Stats /> */}
      </Canvas>
    </div>
  );
}

export default CodeBird3DLogo;
