import coin1 from '../../../../../images/imagecoin/coin1.png';
import { Sugges } from './style';
import { messages } from '../../messages';
import { useTranslation } from 'react-i18next';
export default function SuggesItems(props: any) {
  const { t } = useTranslation();
  const { img, title, content } = props;
  return (
    <Sugges>
      <div className="image">
        <img alt="img" src={img === '' ? coin1 : img} className="img" />
      </div>
      <h4 className="title">
        {title === '' ? `${t(messages.titleHero())}` : title}
      </h4>
      <p className="content">
        {content === '' ? `${t(messages.desHero())}` : content}
      </p>
    </Sugges>
  );
}
