import { toast } from "../lib/toastAlert";

export const isEmpty = (str) => {
  try {
    if (str && str != undefined && str != "") {
      return false;
    }
    return true;
  } catch (e) {
    return true;
  }
}

export const copyText = (data = {}) => {
  if (data.text) {
    var input = document.createElement("input");
    document.body.appendChild(input);
    input.value = data.text;
    input.select();
    document.execCommand("Copy");
    input.remove();
    toast({ type: "success", message: data.message });
  }
}