/** @format */

import * as React from "react";
import { PlasmicCanvasHost, registerComponent } from "@plasmicapp/host";
import Head from "next/head";
import Iframe from "../components/Iframe";
import { Reveal } from "../components/Reveal";
import { ParallaxWrapper } from "../components/ParallaxWrapper";

registerComponent(Iframe, {
  name: "Iframe",
  props: {
    src: "string",
    loadWhileEditing: "boolean",
  },
  importPath: "./components/Iframe",
});

registerComponent(ParallaxWrapper, {
  name: "Parallax",
  props: {
    x: "object",
    y: "object",
    disabled: "boolean",
    children: "slot",
  },
  importPath: "./components/ParallaxWrapper",
  importName: "ParallaxWrapper",
});

registerComponent(Reveal, {
  name: "Reveal",
  props: {
    children: "slot",
    effect: {
      type: "choice",
      options: [
        "bounce",
        "fade",
        "flip",
        "hinge",
        "jackinthebox",
        "roll",
        "rotate",
        "slide",
        "zoom",
      ],
    },
    cascade: "boolean",
    damping: "number",
    direction: {
      type: "choice",
      options: ["up", "down", "left", "right"],
    },
    delay: "number",
    duration: "number",
    fraction: "number",
    triggerOnce: "boolean",
  },
  importPath: "./components/Reveal",
  importName: "Reveal",
});

export default function Host() {
  return (
    <div>
      <Head>
        {/* eslint-disable-next-line */}
        <script src="https://static1.plasmic.app/preamble.js" />
      </Head>
      <PlasmicCanvasHost />
    </div>
  );
}
