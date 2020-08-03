import React from "react";
import Link from "@material-ui/core/Link";

const Section4 = () => {
  return (
    <div className="container-3">
      <div className="large-2" style={{ textAlign: "center" }}>
        That's all for now!
      </div>
      <div style={{ textAlign: "center" }}>
        I'd love for us to chat! Drop me a message on{" "}
        <Link
          href="https://www.linkedin.com/in/jainam-s"
          target="_blank"
          rel="noopener"
          color="inherit"
        >
          LinkedIn
        </Link>{" "}
        or{" "}
        <Link
          href="https://www.instagram.com/jxxshah"
          target="_blank"
          rel="noopener"
          color="inherit"
        >
          Instagram
        </Link>
        !
      </div>
      <div>
        <span style={{ color: "#6ba165" }}>{"// "}TODO: add more stuff</span>
      </div>
    </div>
  );
};

export default Section4;
