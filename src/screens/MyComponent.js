import { useEffect, useRef, useState } from "react";
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";


export const MyComponent = () => {

  return (
    <MouseParallaxContainer>
    <MouseParallaxChild factorX={0.03} factorY={0.05} >
        <h1>Test Test</h1>
    </MouseParallaxChild>
    <MouseParallaxChild factorX={0.07} factorY={0.08}>
        <h2>TEST 2</h2>
    </MouseParallaxChild>
</MouseParallaxContainer>
  );
};