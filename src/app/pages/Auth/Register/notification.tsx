import React from 'react';
import { useSelector } from 'react-redux';
import { selectRegisterFaild, selectRegisterSuccess } from '../loginSlice';
import { BoxNtf, ContainerNtf, MybuttonNtf, TitleNtf } from '../stylesForAuth';

const NotificationRegiter = props => {
  const checkFaild = useSelector(selectRegisterFaild);
  const checkSuccess = useSelector(selectRegisterSuccess);
  return (
    <ContainerNtf>
      <BoxNtf>
        {checkFaild && (
          <TitleNtf>This email address is already registered!</TitleNtf>
        )}
        {checkSuccess && (
          <TitleNtf>
            Create Account Success ! Go to Email Active Your Account!
          </TitleNtf>
        )}
        <MybuttonNtf>OK</MybuttonNtf>
      </BoxNtf>
    </ContainerNtf>
  );
};

export default NotificationRegiter;
