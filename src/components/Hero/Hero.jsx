// not using now

import React from "react";
// import Img from "../../../public/Message.png";

function Hero() {
  // eslint-disable-next-line react/jsx-filename-extension
  return (
    <div className="flex justify-center">
      <img
        src={`${process.env.PUBLIC_URL}/assets/Message.png`}
        alt="key"
        className="w-1/2"
      />
    </div>
  );
}

export default Hero;
