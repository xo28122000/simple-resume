import React from "react";

import Link from "@material-ui/core/Link";

import Emoji from "./Emoji";

const Section1 = () => {
  return (
    <div className="container-3">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "60px",
          paddingBottom: "60px",
          height: "100px",
          textAlign: "center"
        }}
      >
        <div style={{ alignSelf: "flex-start", paddingRight: "30px" }}>
          Meet
        </div>
        <div className="large-1"> Jainam Shah </div>
        <div style={{ alignSelf: "flex-end", paddingLeft: "30px" }}>2.0</div>
      </div>
      <div>
        <Emoji symbol={"📍"} />{" "}
        <Link
          href="https://www.google.com/maps/place/Johns+Creek,+GA/"
          target="_blank"
          rel="noopener"
          color="inherit"
        >
          Johns Creek, GA
        </Link>{" "}
      </div>
    </div>
  );
};

export default Section1;
