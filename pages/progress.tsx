import React, { useEffect, useState } from "react";
import { ProgressBar } from "../components/ProgressBar";

const Page = () => {
  const [progress, setProgress] = useState(100);
  useEffect(() => {
    if (progress <= 0) {
      return;
    }
    const timeout = setTimeout(() => {
      setProgress(progress - 1);
    }, 50)
    return () => { clearTimeout(timeout); };
  }, [progress]);
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
      <div id="wrap">
        <ProgressBar bgColor='#ff0000' progress={progress} />
      </div>
    </>
  );
};

export default Page;
