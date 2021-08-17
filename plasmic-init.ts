/** @format */

import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
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
