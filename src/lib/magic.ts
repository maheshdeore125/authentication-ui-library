import { Magic } from 'magic-sdk';
import { OAuthExtension } from '@magic-ext/oauth';

const REACT_APP_MAGIC_PUBLISHABLE_KEY= "pk_live_943EE01AB0BA3DA9";

export const magic = new Magic(REACT_APP_MAGIC_PUBLISHABLE_KEY, {
  extensions: [new OAuthExtension()],
});
