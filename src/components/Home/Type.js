import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: ["HUS HIGH SCHOOL FOR GIFTED STUDENTS"],
        autoStart: true,
        loop: false,
        pauseFor: 999999,
      }}
    />
  );
}

export default Type;
