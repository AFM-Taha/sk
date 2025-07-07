import axios from 'axios';

import { getCookie } from './cookie';
import { decodeJWT } from './jwt-decode';
import { toast } from '../lib/toastAlert.js';
const responseChanges = (data) => {
    const {
        message,
        error,
        status = false
    } = data;
    if (message && message === 'Data retrived successfully') {
        delete data.message;
    }
    if (status) {
        data.toastType = "success";
    }
    else {
        data.toastType = "error";
    }
    if (typeof error === 'undefined') { data.error = {}; }
    return data;
}
export const makeRequest = async (reqData = {}) => {
    try {
        await axios.interceptors.request.use(function (config) {
            let token = options?.token;
            if (!token) {
                token = getCookie("adminToken");
            }
            const isValid = decodeJWT(token);
            if (isValid) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        });
        const defaultHeaders = { 'Content-Type': 'application/json' };
        const { url = '', method = 'get', options = {}, headers: reqHeaders = {} } = reqData;
        const headers = Object.assign(defaultHeaders, reqHeaders);
        const { toastShow = false } = options;

        let passData = { method: method, url: url, headers: headers };
        // console.log(headers);
        if (method && method.toLowerCase() === 'post') {
            if (reqData.data) {
                passData.data = reqData.data;
            }
            else if (reqData.body) {
                passData.data = reqData.body;
            }
            else if (reqData.payload) {
                passData.data = reqData.payload;
            }
        }
        if (reqData.params) { passData.params = reqData.params; }
        let resp = await axios(passData);

        resp = responseChanges(resp.data);

        if (resp && resp.toastType && resp.message && toastShow && typeof resp.message === 'string' && resp.message !== 'Data retrived successfully') {
            toast({ type: resp.toastType, message: resp.message });
        }
        return resp;
    }
    catch (err) {
        console.log('request err : ', err);
        //alert(reqData.url);

        return {
            status: false,
            message: "Something went wrong"
        }
    }
}