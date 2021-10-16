import { translations } from 'locales/translations';
import { _t } from 'utils/messages';

export const messages = {
  hanoi: () => _t(translations.footer.titleHanoi),
  london: () => _t(translations.footer.titleLondon),
  find: () => _t(translations.footer.finduson),
  quick: () => _t(translations.footer.quickNav),
  titleAbout: () => _t(translations.footer.about),
  detailAbout: () => _t(translations.footer.detalAbout),
  white: () => _t(translations.footer.whitepaper),
  getApp: () => _t(translations.footer.getapp),
  term: () => _t(translations.subFooter.term),
  privacy: () => _t(translations.subFooter.Privacy),
  view: () => _t(translations.footer.viewHouse),
};
