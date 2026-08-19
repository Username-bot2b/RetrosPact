import type { ImageMetadata } from 'astro';

import goHome from './go-home.png';
import homeDirectory from './home-directory.png';
import appWelcome from './app-welcome.png';
import appUserSettings from './app-user-settings.png';
import appTextEditor from './app-text-editor.png';
import appMail from './app-mail.png';
import appBrowser from './app-browser.png';
import appSystemMonitor from './app-system-monitor.png';
import appHelp from './app-help.png';
import bookOpen from './book-open.png';
import filetypeText from './filetype-text.png';

/** SerenityOS 16×16 icons (BSD-2-Clause). See NOTICE.txt + LICENSE in this folder. */
export const serenityIcons = {
  'go-home': goHome,
  'home-directory': homeDirectory,
  'app-welcome': appWelcome,
  'app-user-settings': appUserSettings,
  'app-text-editor': appTextEditor,
  'app-mail': appMail,
  'app-browser': appBrowser,
  'app-system-monitor': appSystemMonitor,
  'app-help': appHelp,
  'book-open': bookOpen,
  'filetype-text': filetypeText,
} as const satisfies Record<string, ImageMetadata>;

export type SerenityIconName = keyof typeof serenityIcons;

export function isSerenityIcon(name: string): name is SerenityIconName {
  return name in serenityIcons;
}
