import { translations } from 'locales/translations';
import { _t } from 'utils/messages';

export const messages = {
  reset: () => _t(translations.filter.resetAll),
  interest: () => _t(translations.filter.interRange),
  loantovalue: () => _t(translations.filter.loantovalue),
  collateral: () => _t(translations.filter.collateral),
  loantoken: () => _t(translations.filter.loanToken),
  loantype: () => _t(translations.filter.loanType),
  duration: () => _t(translations.filter.duration),
  auto: () => _t(translations.filter.auto),
  semi: () => _t(translations.filter.semi),
  nego: () => _t(translations.filter.nego),
  week: () => _t(translations.filter.week),
  month: () => _t(translations.filter.month),
  col: () => _t(translations.filter.col),
  currency: () => _t(translations.filter.currency),
};
