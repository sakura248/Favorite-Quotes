// not using now

import React from "react";
// import Img from "../../../public/Message.png";

function Hero() {
  return (
    <div className="flex justify-center mt-4">
      <img
        src={`${process.env.PUBLIC_URL}/assets/Message.png`}
        alt="key"
        className="h-64"
      />
    </div>
  );
}

export default Hero;
