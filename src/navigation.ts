import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';
import type { SerenityIconName } from './assets/icons/serenity';

export const headerData = {
  links: [
    {
      text: 'Home',
      mnemonic: 'H',
      icon: 'go-home' satisfies SerenityIconName,
      href: getPermalink('/'),
    },
    {
      text: 'About',
      mnemonic: 'A',
      icon: 'app-user-settings' satisfies SerenityIconName,
      href: getPermalink('/about'),
    },
    {
      text: 'Blog',
      mnemonic: 'B',
      icon: 'app-text-editor' satisfies SerenityIconName,
      href: getBlogPermalink(),
    },
    {
      text: 'Contact',
      mnemonic: 'C',
      icon: 'app-mail' satisfies SerenityIconName,
      href: getPermalink('/contact'),
    },
  ],
  actions: [],
};

export const footerData = {
  links: [],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: '',
};
