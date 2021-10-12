import { PayloadAction } from '@reduxjs/toolkit';
import { PayloadAccount, PayloadRegister } from 'models/payloadAccount';
import axiosClient from './axiosClient';
import axiosInfo from './axiosInfo';
export const authApi = {
  postAccount(data: PayloadAction<PayloadAccount>) {
    const url = '/users/login';
    return axiosClient.post(url, data);
  },
  postRegister(data: PayloadAction<PayloadRegister>) {
    const url = '/users/signup';
    return axiosClient.post(url, data);
  },
};
export const authApiInfo = {
  getUser(token: string | null) {
    const urlUser = '/users/profile';
    let config = { headers: { Authorization: 'Bearer ' + token } };
    return axiosInfo.get(urlUser, config);
  },
};
