import coin1 from '../../../../../images/imagecoin/coin1.png';
import { Sugges } from './style';

export default function SuggesItems(props: any) {
  const { img, title, content } = props;
  return (
    <Sugges>
      <div className="image">
        <img alt="img" src={img === '' ? coin1 : img} className="img" />
      </div>
      <h4 className="title">
        {title === '' ? 'You are not in a hurry and can wait?' : title}
      </h4>
      <p className="content">
        {content === ''
          ? 'Request a loan from a trusted P2P lender to get a better interest rate and LTV'
          : content}
      </p>
    </Sugges>
  );
}
