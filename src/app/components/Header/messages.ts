import { translations } from 'locales/translations';
import { _t } from 'utils/messages';

export const messages = {
  navPawn: () =>
    _t(
      translations.header.pawn, // you can set the default value when extracting
    ),
  navBorrow: () => _t(translations.header.Borrow),
  navLend: () => _t(translations.header.Lend),
  navNTF: () => _t(translations.header.NTF),
  navMyaccount: () => _t(translations.header.Myaccount),
  navFAQ: () => _t(translations.header.FAQ),
};
