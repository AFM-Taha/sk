import { makeRequest, makeRequestWihActualStatus } from "./v1/request";
import Config from "../config";

// export const getUserStakeData = async (data) => {
//   const requestData = { method: "GET", url: Config.V1_API_URL + 'stake-trade/get-stake-user' };
//   const resp = await makeRequestWihActualStatus(requestData);
//   return resp;
// };
// export const getUserStakePayoutData = async (data) => {
//   const requestData = { method: "GET", url: Config.V1_API_URL + 'stake-trade/get-stake-user/payout' };
//   const resp = await makeRequestWihActualStatus(requestData);
//   return resp;
// };
// export const getUserReferralData = async (walletAddress) => {
//   const requestData = { method: "GET", url: Config.V1_API_URL + 'wallet-user/get-referral/' + walletAddress };
//   const resp = await makeRequestWihActualStatus(requestData);
//   return resp;
// };

// export const getBankDetails = async () => {
//   const res = await makeRequest({ method: 'GET', url: Config.V1_API_URL + 'admin/get-admin-bank' })
//   return res;
// }