import React, { useRef } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";
import { PerspectiveCamera, OrbitControls, Stats } from "@react-three/drei";
import { Suspense } from "react";

interface ModelProps {
  nodes: { Scene: THREE.Group };
}

const Model: React.FC<ModelProps> = ({ nodes }) => {
  const gltf = useRef<THREE.Group>();

  return <primitive ref={gltf} object={nodes.Scene} />;
};

interface CodeBird3DLogoProps {}

function CodeBird3DLogo({}: CodeBird3DLogoProps) {
  return (
    <div className="code-bird-3d-logo">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <Suspense fallback={null}>
          <Model {...useLoader(GLTFLoader, "/path/to/your/logo.glb")} />
        </Suspense>
        <OrbitControls />
        <Stats />
      </Canvas>
    </div>
  );
}

export default CodeBird3DLogo;
