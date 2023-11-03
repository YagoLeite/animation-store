import { OrbitControls, Point, Points } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import React, { useRef } from "react";
import dynamic from "next/dynamic";

const CodePlayground = dynamic(() => import("../code/CodePlayground"), {
  ssr: false,
});

export const ArrayOfAngles = (angle) => {
  const transformedAngle = angle * (Math.PI / 180);
  let arr = [];
  return (num) => {
    for (let i = 1; i < num; i++) {
      arr.push(transformedAngle * i);
    }
    return arr;
  };
};

export const ArrayOfPositions = (array) => {
  return (num) => {
    return array.map((angle, index) => {
      return {
        x: (num * index * 0.3 * Math.sin(angle)) / 2,
        y: (num * index * 0.3 * Math.cos(angle)) / 2,
      };
    });
  };
};

const GoldenStars = ({ isCoding }) => {
  const positions = ArrayOfPositions(ArrayOfAngles(222.5)(300))(5);
  return (
    <>
      {isCoding ? (
        <CodePlayground code={code()} />
      ) : (
        <Canvas camera={{ position: [0, 0, -500] }}>
          <OrbitControls enableZoom={true} autoRotate={true} />
          <Points>
            {positions?.map((position, index) => {
              return (
                <GoldenPoint
                  key={index}
                  z={index}
                  x={position.x}
                  y={position.y}
                  frequency={1.2 + index * 0.05}
                />
              );
            })}

            {positions?.map((position, index) => {
              return (
                <GoldenPoint
                  key={index}
                  z={-index}
                  x={position.x}
                  y={position.y}
                  frequency={1.2 + index * 0.05}
                />
              );
            })}
          </Points>

          <EffectComposer>
            <Bloom mipmapBlur luminanceThreshold={0.5} radius={0.7} />
          </EffectComposer>
        </Canvas>
      )}
    </>
  );
};

function GoldenPoint({ x, y, z }) {
  const pointRef = useRef(null);
  return (
    <>
      <pointsMaterial size={0.5} />
      <Point ref={pointRef} position={[x, y, z]} />
    </>
  );
}

function code() {
  return `
import { OrbitControls, Point, Points } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import React, { useRef } from "react";

export const ArrayOfAngles = (angle) => {
  const transformedAngle = angle * (Math.PI / 180);
  let arr = [];
  return (num) => {
    for (let i = 1; i < num; i++) {
      arr.push(transformedAngle * i);
    }
    return arr;
  };
};

export const ArrayOfPositions = (array) => {
  return (num) => {
    return array.map((angle, index) => {
      return {
        x: (num * index * 0.3 * Math.sin(angle)) / 2,
        y: (num * index * 0.3 * Math.cos(angle)) / 2,
      };
    });
  };
};

const GoldenStars = () => {
  const positions = ArrayOfPositions(ArrayOfAngles(222.5)(300))(5);
  return (
    <Canvas camera={{ position: [0, 0, -500] }}>
      <OrbitControls enableZoom={true} autoRotate={true} />
      <Points>
        {positions?.map((position, index) => {
          return (
            <GoldenPoint
              key={index}
              z={index}
              x={position.x}
              y={position.y}
              frequency={1.2 + index * 0.05}
            />
          );
        })}

        {positions?.map((position, index) => {
          return (
            <GoldenPoint
              key={index}
              z={-index}
              x={position.x}
              y={position.y}
              frequency={1.2 + index * 0.05}
            />
          );
        })}
      </Points>

      <EffectComposer>
        <Bloom mipmapBlur luminanceThreshold={0.5} radius={0.7} />
      </EffectComposer>
    </Canvas>
  );
};

function GoldenPoint({ x, y, z }) {
  const pointRef = useRef(null);
  return (
    <>
      <pointsMaterial size={0.5} />
      <Point ref={pointRef} position={[x, y, z]} />
    </>
  );
}

export default GoldenStars;

  `;
}

export default GoldenStars;
