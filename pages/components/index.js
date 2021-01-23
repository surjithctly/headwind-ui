import React from "react";
import SigninOne from "./forms/SigninOne";
import { Resizable, ResizableBox } from "react-resizable";
import { useState } from "react";
import signinOne from "./forms/SigninOne";

export default function components() {
  const params = {
    width: 100,
    height: 100,
    absoluteWidth: 1300,
    absoluteHeight: 200,
    absoluteLeft: 0,
    absoluteTop: 0,
  };

  const [state, setState] = useState(params);

  const onResetClick = () => {
    setState({
      width: 200,
      height: 200,
      absoluteWidth: 200,
      absoluteHeight: 200,
    });
  };
  const onResize = (event, { element, size, handle }) => {
    setState({ width: size.width, height: size.height });
  };

  return (
    <>
      I'm a compoennt page
      <div
        className="mx-auto my-5 border-2 max-w-screen-2xl"
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <ResizableBox
          className="box"
          height={state.height}
          width={state.width}
          onResize={onResize}
          axis="x"
          minConstraints={[400, 700]}
          maxConstraints={[1500, 700]}
          style={{
            width: state.width + "px",
            height: state.height + "px",
          }}
        >
          <div className="bg-red-300">
            <span className="react-resizable-handle"></span>
            <SigninOne />
          </div>
        </ResizableBox>
      </div>
    </>
  );
}
