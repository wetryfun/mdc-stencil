import { Config } from "@stencil/core";
import { sass } from "@stencil/sass";

export const config: Config = {
  namespace: "mdc-stencil",
  plugins: [
    sass({
      includePaths: ["node_modules"]
    })
  ],
  outputTargets: [
    {
      type: "dist",
      esmLoaderPath: "../loader"
    },
    {
      type: "docs-readme"
    },
    {
      type: "www",
      dir: "docs",
      copy: [{ src: "components/**/*.html", keepDirStructure: false }],
      serviceWorker: null // disable service workers
    }
  ]
};
