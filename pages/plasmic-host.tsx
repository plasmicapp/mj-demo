/** @format */

import * as React from "react";
import { PlasmicCanvasHost, registerComponent } from "@plasmicapp/host";
import Head from "next/head";
import Iframe from "../components/Iframe";

registerComponent(Iframe, {
  name: "Iframe",
  props: {
    src: "string",
    loadWhileEditing: "boolean",
  },
  importPath: "./components/Iframe",
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
