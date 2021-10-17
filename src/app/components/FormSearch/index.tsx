import React, { useState } from 'react';
import { ItemSearch, LabelTab, TabContent, Tabheader, Tabs } from './styles';
import Borrow from '../Borrow';
import Lend from '../Lend';
import { messages } from '../Borrow/messages';
import { useTranslation } from 'react-i18next';
const FormSearch = props => {
  const { t } = useTranslation();
  const [value, setValue] = useState(1);
  const handleChange = (newValue: number) => {
    setValue(newValue);
  };

  const Content = value === 1 ? <Borrow /> : value === 2 ? <Lend /> : '';

  return (
    <ItemSearch>
      <Tabs>
        <Tabheader>
          <LabelTab
            onClick={() => handleChange(1)}
            className={value === 1 ? 'active' : ''}
          >
            {t(messages.heroBorrow())}
          </LabelTab>
          <LabelTab
            onClick={() => handleChange(2)}
            className={value === 2 ? 'active' : ''}
          >
            {t(messages.heroLend())}
          </LabelTab>
        </Tabheader>
        <TabContent>{Content}</TabContent>
      </Tabs>
    </ItemSearch>
  );
};

export default FormSearch;
