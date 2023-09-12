import React from "react";

export interface MuiIconProps {
  src?: any;
  alt?: string;
  width?: string;
  height?: string;
  onClick?: () => void;
  styles?: React.CSSProperties;
}

const MuiIcon = ({ styles, src, alt, width, height, onClick }: MuiIconProps) => {
  return (
    <>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        onClick={onClick}
        style={styles}
      />
    </>
  );
};

export default MuiIcon;