import React, { useEffect, useMemo, useState } from "react";
import { EmergencyButton } from "../components/EmergencyButton";
import { SvgStrokeText } from "../components/SvgStrokeText";

const Page = () => {
  return (
    <>
      <style global jsx>{`
*,
*:before,
*:after {
  -webkit-box-sizing: inherit;
  box-sizing: inherit;
}

html {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font-size: 62.5%;
}

body {
  background: black;
}

div {
  margin: auto;
  height: 100vh;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
}
      `}</style>
      <div>
        <EmergencyButton />
      </div>
    </>
  );
};

export default Page;
