// not using now

import React from "react";
// import Img from "../../../public/Message.png";

function Hero() {
  return (
    <div className="flex justify-center mt-40">
      <img
        src={`${process.env.PUBLIC_URL}/assets/Message.png`}
        alt="key"
        className="w-1/2"
      />
    </div>
  );
}

export default Hero;
