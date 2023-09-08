import React, { Suspense, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Earth = ({ freezeRotation, isClockWise }) => {
  const ref = useRef();
  const earth = useGLTF("./planet/scene.gltf");
  useFrame((_, delta) => {
    const unitVector = isClockWise ? 1 : -1;
    const tempRotation = ref.current.rotation.y;
    freezeRotation
      ? (ref.current.rotation.y = tempRotation)
      : (ref.current.rotation.y += unitVector * delta);
  });
  return <primitive ref={ref} object={earth.scene} scale={4.0} />;
};

const EarthCanvas = () => {
  const [isClockWise, setIsClockWise] = useState(true);
  const [freezeRotation, setFreezeRotation] = useState(false);
  return (
    <Canvas
      style={{
        marginBottom: "8rem",
        height: "60vh",
        cursor: "pointer",
      }}
      onMouseOver={() => {
        setFreezeRotation(true);
      }}
      onMouseLeave={() => {
        setFreezeRotation(false);
      }}
      onClick={() => {
        setIsClockWise(!isClockWise);
        freezeRotation && setFreezeRotation(false);
      }}
      frameloop="always"
      camera={{
        fov: 100,
      }}
      scale={4}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI}
          minPolarAngle={-Math.PI}
        />
        <Earth freezeRotation={freezeRotation} isClockWise={isClockWise} />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;

// import React, { Suspense } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

// import CanvasLoader from "../Loader";

// const Earth = () => {
//   const earth = useGLTF("./planet/scene.gltf");

//   return (
//     <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
//   );
// };

// const EarthCanvas = () => {
//   return (
//     <Canvas
//       shadows
//       frameloop='demand'
//       dpr={[1, 2]}
//       gl={{ preserveDrawingBuffer: true }}
//       camera={{
//         fov: 45,
//         near: 0.1,
//         far: 200,
//         position: [-4, 3, 6],
//       }}
//     >
//       <Suspense fallback={<CanvasLoader />}>
//         <OrbitControls
//           autoRotate
//           enableZoom={false}
//           maxPolarAngle={Math.PI / 2}
//           minPolarAngle={Math.PI / 2}
//         />
//         <Earth />

//         <Preload all />
//       </Suspense>
//     </Canvas>
//   );
// };

// export default EarthCanvas;
