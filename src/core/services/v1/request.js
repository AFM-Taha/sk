import axios from 'axios';
import { toast } from '../../lib/toastAlert';
import { responseChanges } from './responseModify.js';

import { getCookie } from '../../helper/cookie';
import { decodeJWT } from '../../helper/jwt-decode';
import Config from '../../config/index.js';

export const makeRequest = async (reqData = {}) => {
    try {
        await axios.interceptors.request.use(function (config) {
            let token = options?.token;
            if (!token) {
                token = getCookie("userToken");
            }
            const isValid = decodeJWT(token);
            if (isValid) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            config.headers.uncoapikey = Config.X_API_KEY;
            config.headers.otpexpiration = `Bearer ${getCookie("otpExpiration") || ''}`;
            return config;
        });
        const defaultHeaders = { 'Content-Type': 'application/json' };
        const { url = '', method = 'get', options = {}, headers: reqHeaders = {} } = reqData;
        const headers = Object.assign(defaultHeaders, reqHeaders);
        const { toastShow = false } = options;

        let passData = { method: method, url: url, headers: headers };
        // console.log(headers);
        if (method && (method.toLowerCase() === 'post' || method.toLowerCase() === 'put')) {
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
            status: 'error',
            message: "Something went wrong"
        }
    }
}
export const makeRequestWihActualStatus = async (reqData = {}) => {
    try {
        await axios.interceptors.request.use(function (config) {
            let token = options?.token;
            if (!token) {
                token = getCookie("userToken");
            }
            const isValid = decodeJWT(token);
            if (isValid) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            config.headers.uncoapikey = Config.X_API_KEY;
            config.headers.otpexpiration = `Bearer ${getCookie("otpExpiration") || ''}`;
            return config;
        });
        const defaultHeaders = { 'Content-Type': 'application/json' };
        const { url = '', method = 'get', options = {}, headers: reqHeaders = {} } = reqData;
        const headers = Object.assign(defaultHeaders, reqHeaders);
        const { toastShow = false } = options;

        let passData = { method: method, url: url, headers: headers };
        // console.log(headers);
        if (method && (method.toLowerCase() === 'post' || method.toLowerCase() === 'put')) {
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
            message: err?.response?.data?.message || err?.message
        }
    }
}

export const makeRequestWithErrorMessage = async (reqData = {}) => {
    try {
        await axios.interceptors.request.use(function (config) {
            let token = options?.token;
            if (!token) {
                token = getCookie("userToken");
            }
            const isValid = decodeJWT(token);
            if (isValid) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            config.headers.uncoapikey = Config.X_API_KEY;
            config.headers.otpexpiration = `Bearer ${getCookie("otpExpiration") || ''}`;
            return config;
        });
        const defaultHeaders = { 'Content-Type': 'application/json' };
        const { url = '', method = 'get', options = {}, headers: reqHeaders = {} } = reqData;
        const headers = Object.assign(defaultHeaders, reqHeaders);
        const { toastShow = false } = options;

        let passData = { method: method, url: url, headers: headers };
        // console.log(headers);
        if (method && (method.toLowerCase() === 'post' || method.toLowerCase() === 'put')) {
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
            message: err?.response?.data?.message || err?.message
        }
    }
}