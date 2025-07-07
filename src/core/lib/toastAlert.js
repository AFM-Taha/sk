import { toast as toaster } from 'react-toastify';

export function toastAlert(errorType, message, id = '',
    position = 'top-right' //TOP_RIGHT, TOP_CENTER
) {
    id = id + ' ' + new Date();
    if (errorType) {
        toaster[errorType](message, {
            autoClose: 2000,
            toastId: id,
            position: position
        });
    } else {
        toaster(message, {
            autoClose: 2000,
            toastId: id,
            position: position
        });
    }
}

export function toast(toastData) {
    const { errorType = "", message = "", id = "" } = toastData;
    // toaster.dismiss();
    toastAlert(errorType, message, id);
}
export function toastDismiss() {
    toaster.dismiss();
}