import React, { useEffect, useMemo, useState } from "react";
import { SvgStrokeText } from "../components/SvgStrokeText";

const texts = ['ボタン連打で', '腐敗政権を', '打倒しろ！！'];
const Page = () => {
  const [text, setText] = useState(texts[0]);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(!visible)
      if (texts.indexOf(text) + 1 < texts.length) {
        setText(texts[texts.indexOf(text) + 1]);
      } else {
        setText(texts[0]);
      }
    }, 1000);
    return () => { clearTimeout(timeout); };
  }, [text, visible]);

  return (
    <>
      <style global jsx>{`
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
          opacity: 1;
          animation-duration: 0.4s;
          animation-name: fade-in;
          -moz-animation-duration: 0.4s;
          -moz-animation-name: fade-in;
          -webkit-animation-duration: 0.4s;
          -webkit-animation-name: fade-in;
        }
        svg {
          display: block;
          width: auto;
          height: auto;
          overflow: visible;
        }
    @keyframes fade-in {
      0% {
        display: none;
        opacity: 0;
      }

      50% {
        display: block;
        opacity: 0.5;
      }

      100% {
        display: block;
        opacity: 1;
      }
    }
      `}</style>
      <div style={{display: (visible ? 'flex' : 'none')}}>
        <svg>
          <SvgStrokeText
            text={text}
            textColorStart='#ff0000'
            textColorEnd='#ff3366'
            strokeColorStart='#B67B03'
            strokeColorEnd='#FEE9A0'
            strokeWidth={10}
          />
        </svg>
      </div>
    </>
  );
};

export default Page;
