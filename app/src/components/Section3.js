import React from "react";

import Link from "@material-ui/core/Link";

import Emoji from "./Emoji";

const Section3 = () => {
  return (
    <div className="container-3">
      <div>
        <Emoji symbol={"💌"} /> I love Node.js! Especially React.js, React
        Native and Express.js!
      </div>
      <div>
        <Emoji symbol={"💢"} /> I hate deciding file and variable names!
      </div>
      <div>
        <Emoji symbol={"💌"} /> I'd love to explore CNNs, Auto Encoders and
        YOLO! - if you know what I mean <Emoji symbol={"😉"} />
      </div>
    </div>
  );
};

export default Section3;
