import React from "react";

import Link from "@material-ui/core/Link";

import Emoji from "./Emoji";

const EducationSection = () => {
  return (
    <div className="container-3">
      <div>
        <Emoji symbol={"📚"} /> I'm pursuing my B.S. Computer Science at{" "}
        <Link
          href="https://www.sfsu.edu/"
          target="_blank"
          rel="noopener"
          color="inherit"
        >
          SFSU <Emoji symbol={"🐊"} />
        </Link>{" "}
        !
      </div>
      <div style={{ paddingTop: "20px" }}>
        <div style={{ paddingLeft: "60px" }}>
          <div>
            <Emoji symbol={"➕"} /> I'm serving on the student body as{" "}
            <Link
              href="http://asi.sfsu.edu/bod/"
              target="_blank"
              rel="noopener"
              color="inherit"
            >
              Science and Engineering Rep
            </Link>
            !
          </div>
          <div>
            <Emoji symbol={"➕"} /> I've worked super hard to maintain my 4.0
            GPA from when I started! <Emoji symbol={"🤞"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationSection;
