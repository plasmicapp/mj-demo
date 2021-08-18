/** @format */

import React from "react";

export interface VideoProps {
  src: string;
  className?: string;
}

export default function Video({ src, className }: VideoProps) {
  return (
    <video playsInline autoPlay muted loop className={className}>
      <source src={src} type="video/mp4" />
    </video>
  );
}
