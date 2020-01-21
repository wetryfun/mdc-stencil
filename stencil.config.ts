import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'mdc-stencil',
  plugins: [
    sass({
      includePaths: ['node_modules'],
      injectGlobalPaths: ['src/global/variables.scss', 'src/global/mixins.scss']
    })
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      copy: [
        {src: 'components/**/*.html', keepDirStructure: false}
      ],
      serviceWorker: null // disable service workers
    }
  ]
};
