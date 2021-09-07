/** @format */

import * as React from "react";
import Head from "next/head";
import { PlasmicCanvasHost } from "@plasmicapp/loader-nextjs";
import "../plasmic-init";

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
