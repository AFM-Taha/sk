const {
    // REACT_APP_API_URL = "/api/",
    // REACT_APP_FRONTEND_URL = "/",
    // REACT_APP_BACKEND_URL = "/",
    // REACT_APP_SOCKET_URL = "/",

    REACT_APP_API_URL = "http://localhost:5000/api/",
    REACT_APP_FRONTEND_URL = "http://localhost:3000/",
    REACT_APP_BACKEND_URL = "http://localhost:5000/",
    REACT_APP_SOCKET_URL = "http://localhost:5000/",

    REACT_APP_FRONEND_URL_PRINT = "skillra",
    REACT_APP_X_API_KEY = ""
} = process.env;

const Config = {
    V1_API_URL: REACT_APP_API_URL + "v1/",
    V2_API_URL: REACT_APP_API_URL + "v2/",
    BACKEND_URL: REACT_APP_BACKEND_URL,
    SOCKET_URL: REACT_APP_SOCKET_URL,
    FRONEND_URL: REACT_APP_FRONTEND_URL,
    FRONEND_URL_PRINT: REACT_APP_FRONEND_URL_PRINT,
    X_API_KEY: REACT_APP_X_API_KEY,

    SITENAME: "skillra",
    timer: {
        resendOtp: 60
    }
};

export default Config;