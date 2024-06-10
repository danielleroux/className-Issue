import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'other-lib-code',
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: 'other-lib-code',
      proxiesFile: '../other-lib-code-react/lib/components/stencil-generated/index.ts',
      includeImportCustomElements: true,
      includePolyfills: false,
      includeDefineCustomElements: false,
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      dir: 'components',
      copy: [
        {
          src: '../scripts/custom-elements',
          dest: 'components',
          warn: true,
        },
      ],
      includeGlobalScripts: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  testing: {
    browserHeadless: 'new',
  },
};
