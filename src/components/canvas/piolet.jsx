import React, { Suspense } from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import image from "../../assets/moon.png";

// const Section = styled.div`
//   height: 100vh;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: space-between;

// `;

const Container = styled.div`
  height: 100vh;
  width: 100%;
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 74px;

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #da4ea2;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Img = styled.img`
  width: 800px;
  height: 500px;
  object-fit: cover;
  animation: animate 2s infinite ease alternate;
  @media only screen and (max-width: 768px) {
    bottom: -100;
    width: 300px;
    height: 300px;
  }

  @media only screen and (min-width: 1700px) {
    width: 800px;
    height: 600px;
  }

  @keyframes animate {
    to {
      transform: translateY(40px);
    }
  }
`;

const Hero = () => {
  return (
    // <Section>
    // <Container>
    //   {/* <Right> */}
    //   <Canvas>
    //     <Suspense fallback={null}>
    //       <OrbitControls enableZoom={false} />
    //       <ambientLight intensity={1} />
    //       <directionalLight position={[3, 2, 1]} />
    //       <Sphere args={[1, 100, 200]} scale={2.4}>
    //         <MeshDistortMaterial
    //           color="#3d1c56"
    //           attach="material"
    //           distort={0.5}
    //           speed={2}
    //         />
    //       </Sphere>
    //     </Suspense>
    //   </Canvas>

    // </Container>
    <Container>
      <div>
        <Img src={image} />
      </div>
    </Container>
    // </Section>
  );
};

export default Hero;
