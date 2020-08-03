import React from "react";

import Link from "@material-ui/core/Link";

import Emoji from "./Emoji";

const ExperienceSection = () => {
  return (
    <div className="container-3">
      <div>
        <Emoji symbol={"👨‍💻"} /> CoFounder and CTO at{" "}
        <Link
          href="https://www.foodhaven.app/"
          target="_blank"
          rel="noopener"
          color="inherit"
        >
          FoodHaven <Emoji symbol={"🥚"} />
        </Link>
      </div>
      <div>
        <Emoji symbol={"👨‍🏫"} />{" "}
        <Link
          href="https://csme.sfsu.edu/SI/"
          target="_blank"
          rel="noopener"
          color="inherit"
        >
          SF Hacks 2020
        </Link>{" "}
        Organiser{" "}
        <span style={{ color: "#6ba165" }}>
          {"// "}TODO: Update SF-Hacks website
        </span>
      </div>
      <div>
        <Emoji symbol={"👨‍🏫"} /> SCI 221 (Data Structures){" "}
        <Link
          href="https://csme.sfsu.edu/SI/"
          target="_blank"
          rel="noopener"
          color="inherit"
        >
          Facillator - SFSU
        </Link>
      </div>
      <div>
        <Emoji symbol={"👨‍🏫"} /> Tutoring Math and Science at{" "}
        <Link
          href="https://ueap.sfsu.edu/tutoring/"
          target="_blank"
          rel="noopener"
          color="inherit"
        >
          TASC - SFSU
        </Link>{" "}
        <span style={{ color: "#6ba165" }}>{"// "}We are online! </span>
      </div>
    </div>
  );
};

export default ExperienceSection;
