import { CSSProperties } from "react";

interface ProgressBarProps {
  bgColor: string;
  progress: number;
}

export const ProgressBar:React.VFC<ProgressBarProps> = ({
  bgColor, progress
}) => {
  const containerStyles:CSSProperties = {
    height: 100,
    width: '100%',
    backgroundColor: "transparent",
    borderRadius: 0,
    margin: 50,
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: "1px",
  }

  const fillerStyles:CSSProperties = {
    height: '100%',
    width: `${progress}%`,
    backgroundColor: bgColor,
    borderRadius: 'inherit',
    textAlign: 'right',
    transition: 'width 0.05s ease-in-out',
  }

  const labelStyles:CSSProperties = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold',
  }

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}></span>
      </div>
    </div>
  );
};
