import { translations } from 'locales/translations';
import { _t } from 'utils/messages';

export const messages = {
  heroBanner: () => _t(translations.heroBanner.des),
  heroBorrow: () => _t(translations.heroBanner.borrow),
  heroLend: () => _t(translations.heroBanner.lend),
  heroCryptocurrency: () => _t(translations.heroBanner.cryptocurrency),
  heroCollateral: () => _t(translations.heroBanner.collateral),
  heroDuration: () => _t(translations.heroBanner.Duration),
  heroLoanAmount: () => _t(translations.heroBanner.loanAmount),
  heroOr: () => _t(translations.heroBanner.or),
  heroRecomment: () => _t(translations.heroBanner.recomment),
  heroSearch: () => _t(translations.heroBanner.search),
};
