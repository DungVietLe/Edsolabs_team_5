import axiosSearch from './axiosSearch';

export const searchApi = {
  //button search home/pawn
  getDataSearchHome(param: any) {
    const url = '/pawn-shop-package/search';
    return axiosSearch.get(url, { params: param });
  },
  getDataLentNFT(param: any) {
    const url = '/account/collaterals/nfts/search';
    return axiosSearch.get(url, { params: param });
  },
  getPersonalLending(param: any) {
    const url = '/pawn-shop/search-p2p-lenders';
    return axiosSearch.get(url, { params: param });
  },
};
