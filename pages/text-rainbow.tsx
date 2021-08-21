import React, { useEffect, useMemo, useState } from "react";
import { SvgRainbowText } from "../components/SvgRainbowText";
import { WarpView } from "../components/WarpView";

const Page = () => {
  return (
    <>
      <style global jsx>{`
        body {
          background: black;
          perspective: 300px;
          overflow: hidden;
        }
        div#wrap {
          margin: auto;
          width: 100vw;
          height: 100vh;
          display: flex;
          align-items: center;
          text-align: center;
          justify-content: center;
        }
        svg {
          display: block;
          width: auto;
          height: auto;
          overflow: visible;
        }
      `}</style>
      <WarpView />
      <div id="wrap">
        <svg>
          <SvgRainbowText text='新政権樹立確定' />
        </svg>
      </div>
    </>
  );
};

export default Page;
