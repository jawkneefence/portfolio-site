import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const City = ({ isMobile }) => { //isMobile use-effect object
  const city = useGLTF("./sanfrancisco/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.05} groundColor='black' />
      <spotLight
        position={[-35, 100, 9]}
        angle={0.12}
        penumbra={1}
        intensity={0.14}
        
      />
      <primitive
        object={city.scene}
        scale={isMobile ? 0.004 : 0.007}
        position={isMobile ? [0, -3.6, 0] : [0, -3.8, 0]}
        rotation={[0, 0.965, 0]}
      />
    </mesh>
  );
};

const CityCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    //listener for changes to the screen size (mobile device?)
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted, since we are in a use-effect
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      camera={{ position: [20, 3, 5], fov: 25 }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <City isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default CityCanvas;