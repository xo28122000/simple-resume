import React from "react";

import Link from "@material-ui/core/Link";

import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

import Emoji from "./Emoji";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        paddingTop: "40px",
        paddingBottom: "40px"
      }}
    >
      <div>
        Hello World! <Emoji symbol="🌎" />
      </div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div className="container-2">
          <Link
            href="https://www.linkedin.com/in/jainam-s"
            target="_blank"
            rel="noopener"
            color="inherit"
          >
            <LinkedInIcon className="icon-1" />
          </Link>
        </div>
        <div className="container-2">
          <Link
            href="https://www.github.com/xo28122000"
            target="_blank"
            rel="noopener"
            color="inherit"
          >
            <GitHubIcon className="icon-1" />
          </Link>
        </div>
        <div className="container-2">
          <Link
            href="https://www.instagram.com/jxxshah"
            target="_blank"
            rel="noopener"
            color="inherit"
          >
            <InstagramIcon className="icon-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
