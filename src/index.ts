import { registerPlugin } from '@capacitor/core';

import type { CAPStatusBarPlugin } from './definitions';

const CAPStatusBar = registerPlugin<CAPStatusBarPlugin>('CAPStatusBar', {
  web: () => import('./web').then((m) => new m.CAPStatusBarWeb()),
});

export * from './definitions';
export { CAPStatusBar };
