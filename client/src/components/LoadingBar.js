import { Button } from "@mui/material";
import React, { useEffect } from "react"
import { animated, useSpring } from "react-spring";

function LoadingBar() {
  // const springApi = useSpringRef();
  const [{ x }, set] = useSpring(() => ({
    loop: true,
    x: -400
  }));

  let index = 0
  let values = [-300, -200, -100, 0, -100, -200];

  useEffect(() => {
    const interval = setInterval(() => {
      index += 1;
      let value = values[index % values.length];
      set({ x: value });
    }, 300)

    return () => clearInterval(interval);
  }, []);

  return <div>
    <svg width={168} height={74}>
      <animated.path fill="white" d={x.to({
        range: [-400, -300, -200, -100, 0],
        output: [
          "M4 32h0s4 0 4 4v0s0 4 -4 4h0s-4 0 -4 -4v0s0 -4 4 -4",
          "M4 12h0s4 0 4 4v40s0 4 -4 4h0s-4 0 -4 -4v-40s0 -4 4 -4",
          "M4 28h0s4 0 4 4v8s0 4 -4 4h0s-4 0 -4 -4v-8s0 -4 4 -4",
          "M4 0h0s4 0 4 4v64s0 4 -4 4h0s-4 0 -4 -4v-64s0 -4 4 -4",
          "M4 24h0s4 0 4 4v16s0 4 -4 4h0s-4 0 -4 -4v-16s0 -4 4 -4"
        ]
      })} />
      <animated.path fill="white" d={x.to({
        range: [-400, -300, -200, -100, 0],
        output: [
          "M24 32h0s4 0 4 4v0s0 4 -4 4h0s-4 0 -4 -4v0s0 -4 4 -4",
          "M24 24h0s4 0 4 4v16s0 4 -4 4h0s-4 0 -4 -4v-16s0 -4 4 -4",
          "M24 12h0s4 0 4 4v40s0 4 -4 4h0s-4 0 -4 -4v-40s0 -4 4 -4",
          "M24 20h0s4 0 4 4v24s0 4 -4 4h0s-4 0 -4 -4v-24s0 -4 4 -4",
          "M24 12h0s4 0 4 4v40s0 4 -4 4h0s-4 0 -4 -4v-40s0 -4 4 -4"
        ]
      })} />
      <animated.path fill="white" d={x.to({
        range: [-400, -300, -200, -100, 0],
        output: [
          "M44 32h0s4 0 4 4v0s0 4 -4 4h0s-4 0 -4 -4v0s0 -4 4 -4",
          "M44 16h0s4 0 4 4v32s0 4 -4 4h0s-4 0 -4 -4v-32s0 -4 4 -4",
          "M44 30h0s4 0 4 4v4s0 4 -4 4h0s-4 0 -4 -4v-4s0 -4 4 -4",
          "M44 24h0s4 0 4 4v16s0 4 -4 4h0s-4 0 -4 -4v-16s0 -4 4 -4",
          "M44 28h0s4 0 4 4v8s0 4 -4 4h0s-4 0 -4 -4v-8s0 -4 4 -4"
        ]
      })} />
      <animated.path fill="white" d={x.to({
        range: [-400, -300, -200, -100, 0],
        output: [
          "M64 32h0s4 0 4 4v0s0 4 -4 4h0s-4 0 -4 -4v0s0 -4 4 -4",
          "M64 20h0s4 0 4 4v24s0 4 -4 4h0s-4 0 -4 -4v-24s0 -4 4 -4",
          "M64 4h0s4 0 4 4v56s0 4 -4 4h0s-4 0 -4 -4v-56s0 -4 4 -4",
          "M64 20h0s4 0 4 4v24s0 4 -4 4h0s-4 0 -4 -4v-24s0 -4 4 -4",
          "M64 32h0s4 0 4 4v0s0 4 -4 4h0s-4 0 -4 -4v0s0 -4 4 -4"
        ]
      })} />
      <animated.path fill="white" d={x.to({
        range: [-400, -300, -200, -100, 0],
        output: [
          "M84 32h0s4 0 4 4v0s0 4 -4 4h0s-4 0 -4 -4v0s0 -4 4 -4",
          "M84 0h0s4 0 4 4v64s0 4 -4 4h0s-4 0 -4 -4v-64s0 -4 4 -4",
          "M84 20h0s4 0 4 4v24s0 4 -4 4h0s-4 0 -4 -4v-24s0 -4 4 -4",
          "M84 0h0s4 0 4 4v64s0 4 -4 4h0s-4 0 -4 -4v-64s0 -4 4 -4",
          "M84 2h0s4 0 4 4v60s0 4 -4 4h0s-4 0 -4 -4v-60s0 -4 4 -4"
        ]
      })} />
      <animated.path fill="white" d={x.to({
        range: [-400, -300, -200, -100, 0],
        output: [
          "M104 32h0s4 0 4 4v0s0 4 -4 4h0s-4 0 -4 -4v0s0 -4 4 -4",
          "M104 4h0s4 0 4 4v56s0 4 -4 4h0s-4 0 -4 -4v-56s0 -4 4 -4",
          "M104 26h0s4 0 4 4v12s0 4 -4 4h0s-4 0 -4 -4v-12s0 -4 4 -4",
          "M104 16h0s4 0 4 4v32s0 4 -4 4h0s-4 0 -4 -4v-32s0 -4 4 -4",
          "M104 12h0s4 0 4 4v40s0 4 -4 4h0s-4 0 -4 -4v-40s0 -4 4 -4"
        ]
      })} />
      <animated.path fill="white" d={x.to({
        range: [-400, -300, -200, -100, 0],
        output: [
          "M124 32h0s4 0 4 4v0s0 4 -4 4h0s-4 0 -4 -4v0s0 -4 4 -4",
          "M124 22h0s4 0 4 4v20s0 4 -4 4h0s-4 0 -4 -4v-20s0 -4 4 -4",
          "M124 18h0s4 0 4 4v28s0 4 -4 4h0s-4 0 -4 -4v-28s0 -4 4 -4",
          "M124 28h0s4 0 4 4v8s0 4 -4 4h0s-4 0 -4 -4v-8s0 -4 4 -4",
          "M124 26h0s4 0 4 4v12s0 4 -4 4h0s-4 0 -4 -4v-12s0 -4 4 -4" 
        ]
      })} />
      <animated.path fill="white" d={x.to({
        range: [-400, -300, -200, -100, 0],
        output: [
          "M144 32h0s4 0 4 4v0s0 4 -4 4h0s-4 0 -4 -4v0s0 -4 4 -4",
          "M144 12h0s4 0 4 4v40s0 4 -4 4h0s-4 0 -4 -4v-40s0 -4 4 -4",
          "M144 30h0s4 0 4 4v4s0 4 -4 4h0s-4 0 -4 -4v-4s0 -4 4 -4",
          "M144 20h0s4 0 4 4v24s0 4 -4 4h0s-4 0 -4 -4v-24s0 -4 4 -4",
          "M144 24h0s4 0 4 4v16s0 4 -4 4h0s-4 0 -4 -4v-16s0 -4 4 -4" 
        ]
      })} />
      <animated.path fill="white" d={x.to({
        range: [-400, -300, -200, -100, 0],
        output: [
          "M164 32h0s4 0 4 4v0s0 4 -4 4h0s-4 0 -4 -4v0s0 -4 4 -4",
          "M164 24h0s4 0 4 4v16s0 4 -4 4h0s-4 0 -4 -4v-16s0 -4 4 -4",
          "M164 12h0s4 0 4 4v40s0 4 -4 4h0s-4 0 -4 -4v-40s0 -4 4 -4",
          "M164 22h0s4 0 4 4v20s0 4 -4 4h0s-4 0 -4 -4v-20s0 -4 4 -4",
          "M164 10h0s4 0 4 4v44s0 4 -4 4h0s-4 0 -4 -4v-44s0 -4 4 -4"
        ]
      })} />
    </svg>
  </div>;
}

export default LoadingBar;