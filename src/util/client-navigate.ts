import { $, isBrowser } from '@qwik.dev/core';
// @ts-expect-error -- we don't have types for the preloader yet https://github.com/QwikDev/qwik/blob/b3a5f7ed8145842defcd09c576292809448ea6ca/packages/qwik-city/src/runtime/src/client-navigate.ts#L2
import { p as preload } from '@builder.io/qwik/preloader';

const preloadRouteBundles = (path: string, probability: number = 0.8): void => {
  if (isBrowser) {
    path = path.endsWith('/') ? path : path + '/';
    path = path.length > 1 && path.startsWith('/') ? path.slice(1) : path;
    preload(path, probability);
  }
};

export const handlePreload = $((href: string) => {
  const url = new URL(href, globalThis.location.origin);

  preloadRouteBundles(url.pathname, 1);
});
