import { fileURLToPath } from "node:url";

/** @type {import('@rspack/cli').Configuration} */
const config = {
  entry: {
    main: "./src/index.js",
  },
  output: {
    path: fileURLToPath(new URL("lib", import.meta.url)),
  },
};

export default config;
