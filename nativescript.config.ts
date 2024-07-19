import { NativeScriptConfig } from '@nativescript/core';

export default {
  appPath: 'app',
  appResourcesPath: 'App_Resources',
  ios: {
    id: 'org.nativescript.testid',
  },
  android: {
    id: 'org.nativescript.testid.android',
    v8Flags: '--expose_gc',
    markingMode: 'none'
  }
} as NativeScriptConfig;