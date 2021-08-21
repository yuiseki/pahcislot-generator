import { useMemo } from "react";

interface SvgRainbowTextProps {
  text: string;
}

export const SvgRainbowText:React.VFC<SvgRainbowTextProps> = ({
  text,
}) => {
  const fontSize = useMemo(() => {
    if (text) {
      const charSize = Math.floor(100 / text.length);
      return charSize+"vw";
    }
  }, [text]);
  return (
    <>
      <style jsx>{`
      `}</style>
      <text
        x="50%" y="50%"
        fontSize={fontSize}
        fontWeight="bold"
        fill='url(#rainbow)'
        dominantBaseline="central"
        textAnchor="middle"
      >
        {text}
      </text>
      <defs>
        <defs>
          <linearGradient id="rainbow" x1="50%" y1="0%" x2="50%" y2="100%" > 
            <stop offset="0%" stopColor="#ff2400">
              <animate attributeName="stop-color" values="#ff2400; #e3e81d; #1de840; #1ddde8; #cc66ff;" dur="0.8s" repeatCount="indefinite"></animate>
            </stop>
            <stop offset="25%" stopColor="#e3e81d">
              <animate attributeName="stop-color" values="#1de840; #1ddde8; #cc66ff #ff2400; #e3e81d;" dur="0.8s" repeatCount="indefinite"></animate>
            </stop>
            <stop offset="50%" stopColor="#1de840">
              <animate attributeName="stop-color" values="#1ddde8; #cc66ff; #ff2400; #e3e81d; #1de840;" dur="0.8s" repeatCount="indefinite"></animate>
            </stop>
            <stop offset="75%" stopColor="#1ddde8">
              <animate attributeName="stop-color" values="#cc66ff; #ff2400; #e3e81d; #1de840; #1ddde8;" dur="0.8s" repeatCount="indefinite"></animate>
            </stop>
            <stop offset="100%" stopColor="#cc66ff">
              <animate attributeName="stop-color" values="#ff2400; #e3e81d; #1de840; #1ddde8; #cc66ff" dur="0.8s" repeatCount="indefinite"></animate>
            </stop>
          </linearGradient> 
        </defs>
      </defs>
    </>
  )
}
