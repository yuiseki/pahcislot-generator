import { useMemo } from "react";

interface SvgStrokeTextProps {
  text: string;
  textColorStart: string;
  textColorEnd: string;
  strokeColorStart: string;
  strokeColorEnd: string;
  strokeWidth: number;
}

export const SvgStrokeText:React.VFC<SvgStrokeTextProps> = ({
  text,
  textColorStart,
  textColorEnd,
  strokeColorStart,
  strokeColorEnd,
  strokeWidth,
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
        fill='url(#fill)'
        stroke='url(#stroke)'
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
        dominantBaseline="central"
        textAnchor="middle"
      >
        {text}
      </text>
      <defs>
        <linearGradient id="fill" x1="50%" y1="0%" x2="50%" y2="100%" > 
          <stop offset="0%" stopColor={textColorStart} />
          <stop offset="100%" stopColor={textColorEnd} />
        </linearGradient> 
        <linearGradient id="stroke" x1="50%" y1="0%" x2="50%" y2="100%" > 
          <stop offset="0%" stopColor={strokeColorStart} />
          <stop offset="100%" stopColor={strokeColorEnd} />
        </linearGradient>
      </defs>
    </>
  )
}
