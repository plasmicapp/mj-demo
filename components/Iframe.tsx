/** @format */

import { PlasmicCanvasContext } from "@plasmicapp/host";
import React, { useContext } from "react";

export interface IframeProps {
  src: string;
  loadWhileEditing?: boolean;
  className?: string;
}

export default function Iframe({
  loadWhileEditing,
  src,
  className,
}: IframeProps) {
  const isEditing = useContext(PlasmicCanvasContext);
  if (isEditing && !loadWhileEditing) {
    return (
      <div className={className}>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "#eee",
            color: "#888",
            fontSize: "64px",
            fontFamily: "sans-serif",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          Iframe placeholder
        </div>
      </div>
    );
  }
  return <iframe src={src} className={className} />;
}
