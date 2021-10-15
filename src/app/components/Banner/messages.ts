import { translations } from 'locales/translations';
import { _t } from 'utils/messages';

export const messages = {
  title: () => _t(translations.mainBanner.title),
  content: () => _t(translations.mainBanner.content),
  learnMore: () => _t(translations.mainBanner.learnmore),
};
