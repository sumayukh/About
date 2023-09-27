import React, { useEffect, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";

const Stars = (props) => {
  const positionsRef = useRef([]);
  const pointsRef = useRef();

  useEffect(() => {
    for (let i = 0; i < 5000; i++) {
      const x = Math.random() * 2 - 1;
      const y = Math.random() * 2 - 1;
      const z = Math.random() * 2 - 1;
      positionsRef.current.push(x, y, z);
    }
  }, []);

  useFrame((_, delta) => {
    pointsRef.current.rotation.x -= delta / 10;
    pointsRef.current.rotation.y -= delta / 10;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={pointsRef}
        positions={positionsRef.current}
        stride={3}
        frustumCulled={false}
        {...props}
      >
        <PointMaterial
          transparent
          color="#fff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "auto",
        position: "absolute",
        inset: "0",
        zIndex: "-1",
      }}
    >
      <Canvas camera={[0, 0, 1]}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
