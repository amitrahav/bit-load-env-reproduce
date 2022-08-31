import { ReactAppOptions } from '@teambit/react';

export const HostApp: ReactAppOptions = {
  name: 'host',
  entry: [require.resolve('./host.app-root')],
  prerender: {
    routes: ['/']
  }
};

export default HostApp;
