/** @format */

import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import Iframe from "./components/Iframe";
import { ParallaxWrapper } from "./components/ParallaxWrapper";
import { Reveal } from "./components/Reveal";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "r1ECurSRvCQTGrWaG81BsV", // ID of a project you are using
      token:
        "z6wwGD1pyR8btKkzeecUUNpxfVY8jKklGiarbESQ2Ea0g8QSaJ0lYbPhOfE9vuBAHkAdAeDhOg1m5LzrM7Jg", // API token for that project
    },
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
});

PLASMIC.registerComponent(Iframe, {
  name: "Iframe",
  props: {
    src: "string",
    loadWhileEditing: "boolean",
  },
});

PLASMIC.registerComponent(ParallaxWrapper, {
  name: "Parallax",
  props: {
    x: "object",
    y: "object",
    disabled: "boolean",
    children: "slot",
  },
});

PLASMIC.registerComponent(Reveal, {
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
});
