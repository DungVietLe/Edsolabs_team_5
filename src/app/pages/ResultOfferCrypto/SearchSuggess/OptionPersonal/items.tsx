import { Button } from '@mui/material';
import styled from 'styled-components/macro';
import staryellow from '../../../../../images/imagestar/staryellow.png';
import tick from '../../../../../images/imagetick/tick.png';
import warning from '../../../../../images/imagetick/warning.png';
import tag from '../../../../../images/imagetag/tag.png';
import { iconCoin } from './iconsCoins';

const InforPersonal = styled.div`
  background: #282c37;
  width: 100%;
  border-radius: 20px;
  color: #ffffff;
  margin: 20px auto 24px auto;
  @media (max-width: 425px) {
    margin: 0;
  }
`;
const Data = styled.div`
  width: 100%;
  padding: 20px;
  @media (max-width: 425px) {
    padding: 16px 14px 30px 14px;
    margin: 0;
  }
`;
const View = styled.div`
  text-decoration-line: underline;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #2596ff;
  .tick {
    padding-left: 12px;
    font-size: 20px;
    @media (max-width: 1920px) {
      margin-top: -20px;
    }
    @media (max-width: 990px) {
      margin-top: -40px;
    }
    @media (max-width: 845px) {
      margin-top: -60px;
    }
    @media (max-width: 768px) {
      margin-top: 2px;
    }
    @media (max-width: 608px) {
      margin-top: -20px;
    }
  }
  @media (max-width: 425px) {
    font-size: 16px;
    line-height: 20px;
  }
`;
const Rate = styled.div`
  max-width: 261px;
  padding-top: 10px;
  display: flex;
  .starYellow {
    width: 17px;
    height: 16px;
    margin-right: 5px;
    margin-top: 4px;
    @media (max-width: 425px) {
      width: 15px;
      height: 14px;
      margin-top: 0;
      margin-right: 6px;
    }
  }
  .signed {
    margin-left: 12px;
    @media (max-width: 425px) {
      margin-left: 8px;
      margin-top: -1px;
    }
  }
  .separation {
    padding-left: 16px;
    height: 12px;
    @media (max-width: 425px) {
      padding-left: 8px;
      margin-top: -2px;
    }
  }
  @media (max-width: 425px) {
    font-size: 14px;
    line-height: 17px;
  }
`;
const Percent = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #3fd762;
  padding-top: 10px;
  .warning {
    padding-left: 7.5px;
    @media (max-width: 910px) {
      margin-right: 5px;
    }
  }
  @media (max-width: 425px) {
    font-size: 18px;
    line-height: 22px;
  }
`;
const Tag = styled(Button)`
  &.Tag {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #dba83d;
    border: 1px solid #dba83d;
    box-sizing: border-box;
    border-radius: 17px;
    text-transform: capitalize;
    margin-right: 10px;
    margin-top: 13px;
    .iconTag {
      margin-right: 8px;
    }
  }
`;
const Collateral = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: center;
  color: #d1d1d3;
  padding-top: 16px;
  .renderIcon {
    display: flex;
    @media (max-width: 1238px) {
      margin-top: 80px;
      margin-left: -165px;
    }
    @media (max-width: 1024px) {
      margin-left: -165px;
      margin-top: 50px;
    }
    @media (max-width: 910px) {
      margin-left: -165px;
      margin-top: 75px;
    }
    @media (max-width: 460px) {
      margin-top: 50px;
      margin-left: -145px;
    }
  }
  .allIcon {
    margin-top: 5px;
    @media (min-width: 768px) and (max-width: 910px) {
      margin-top: 30px;
      margin-left: -145px;
    }
  }
  @media (max-width: 1238px) {
    margin-top: -35px;
  }
  @media (max-width: 991px) {
    margin-top: -30px;
  }
  @media (max-width: 910px) {
    margin-top: -55px;
  }
  @media (max-width: 460px) {
    padding: 0;
    max-width: 287px;
    margin-top: -20px;
    font-size: 14px;
    line-height: 17px;
  }
`;
const Request = styled(Button)`
  &.request {
    width: 155px;
    height: 48px;
    background: linear-gradient(
      221.15deg,
      #bd8727 0%,
      #ffd574 49.02%,
      #feca50 62.02%,
      #bd8727 101.47%
    );
    color: #282c37;
    text-transform: none;
    border-radius: 1000px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #282c37;
    display: flex;
    align-items: flex-start;
    flex-direction: row;
    align-items: flex-start;
    padding: 14px 2px;
    margin: 8px auto 24px auto;
  }
`;

export default function Items(props: any) {
  const { item } = props;
  const newarray = [
    ...item?.p2PLenderPackages[0]?.acceptableAssetsAsCollateral,
  ];
  const icon = [...iconCoin];
  const test = newarray.map(el => el.symbol);
  const test2 = test.slice(0, 5).map(el => {
    return icon.filter(e => el === e.value);
  });
  console.log(test2);
  return (
    <InforPersonal>
      <Data>
        <View>
          {item.associatedAddress}
          <img src={tick} alt="tick" className="tick" />
        </View>
        <Rate>
          <img src={staryellow} alt="star" className="starYellow" />
          {item.reputation}
          <p className="separation">|</p>
          <p className="signed">
            {item.completedContracts}
            signed contracts
          </p>
        </Rate>
        <Percent>
          {item.minInterestRate} - {item.maxInterestRate}%
          <img src={warning} alt="warning" className="warning" />
        </Percent>

        <Tag className=" Tag">
          <img src={tag} alt="tag" className="iconTag" />
          Good LTV
        </Tag>
        <Tag className="Tag">
          <img src={tag} alt="tag" className="iconTag" />
          Fast Disburement
        </Tag>
        <Tag className="Tag">
          <img src={tag} alt="tag" className="iconTag" />
          Trusted
        </Tag>

        <Collateral>
          <div>Collateral accepted: </div>
          {
            <div className="renderIcon">
              {test2?.map((e, index) => (
                <img
                  key={index}
                  src={e[0]?.url}
                  alt=""
                  style={{ height: '30px', padding: '5px' }}
                />
              ))}
              <p className="allIcon">
                & {newarray?.length - 5} {''}more
              </p>
            </div>
          }
        </Collateral>
      </Data>
      <Request className="request">Request loan</Request>
    </InforPersonal>
  );
}
