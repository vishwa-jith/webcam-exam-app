import React, { useState, useEffect } from "react";

import CustomContextView from "./customcontext.view";

const CustomContext = ({ items }) => {
  //Const
  const initialCoordinates = { x: 0, y: 0 };
  //States
  const [visible, setVisible] = useState(false);
  const [coordinates, setCoordinates] = useState(initialCoordinates);
  //useEffect
  useEffect(() => {
    document.addEventListener("contextmenu", function (event) {
      event.preventDefault();
      const clickX = event.clientX;
      const clickY = event.clientY;
      setVisible(true);
      setCoordinates({ x: clickX, y: clickY });
    });
    document.addEventListener("click", function (event) {
      event.preventDefault();
      setVisible(false);
      setCoordinates({ x: 0, y: 0 });
    });
  }, []);

  return (
    <>
      {visible && <CustomContextView coordinates={coordinates} items={items} />}
    </>
  );
};
export default CustomContext;
