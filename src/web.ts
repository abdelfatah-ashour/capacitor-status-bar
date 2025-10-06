import { WebPlugin } from '@capacitor/core';

import type { StatusBarPlugin } from './definitions';

export class StatusBarWeb extends WebPlugin implements StatusBarPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
