import moment from "moment";

export const dateAddFormat = (date, data = {}) => {
  try {
    var result = moment(date).add(data.addCount, data.addType).format("MMM D, Y,hh:mm:ss");
    return result;
  } catch (e) { }
}

export const dateFormat = (date) => {
  try {
    if (date == 0|| !date) return 0
    var result = moment(date).format("MMM D, YYYY, hh:mm:ss A");
    return result;
  } catch (e) { }
}

export const yearmonthdateFormat = (date) => {
  try {
    let result = moment(date).format("YYYY-MM-DD");
    return result;
  } catch (e) { }
}
export const dateFormatOnly = (date) => {
  try {
    if(!date) return 0;
    let result = moment(date).format("DD-MM-YYYY");
    return result;
  } catch (e) { }
}

export const blogDateFormat = (date) => {
  try {
    var result = moment(date).format("MMM D Y");
    return result;
  } catch (e) { }
}

export const shortAdrress = (str) => {
  try {
    return str.length > 29 ? str.substring(0, 29) + "..." : str;
  } catch (e) { }
}

export const showEmail = (email) => {
  try {
    if (email) {
      const splitEmail = email.split('@');
      let middleEmail = "";
      if (splitEmail[0] && splitEmail[0].length > 7) {
        middleEmail = splitEmail[0].substr(splitEmail[0].length - 2);
      }
      return splitEmail[0].substring(0, 3) + '***' + middleEmail + '@***.' + splitEmail[1].split('.')[1];
    }
    else {
      return "-";
    }
  } catch (e) { }
}

export const showPhone = (phoneno) => {
  try {
    if (phoneno) {
      const first2Str = String(phoneno).slice(0, 5);
      const lastnum = String(phoneno).slice(9, 13);
      const value = first2Str + "****" + lastnum
      return value;
    }
    else {
      return "-";
    }
  } catch (e) { }
}

export const showPairName = (pairName = "") => {
  if (pairName) {
    return pairName.replace("_", "/");
  }
  else {
    return "";
  }
}

export const showNumber = (x = 0) => {
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}
export const decimalValue = (value, decimal = 0) => {
  if (decimal === 0) {
    return showNumber(parseFloat(value));
  }
  return showNumber(parseFloat(value).toFixed(decimal));
}
export const formatDate = (dateString) => {
  const date = new Date(dateString);

  const options = {
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  };

  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
  return formattedDate;
};