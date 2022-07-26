export const baseUrl = "https://norma.nomoreparties.space/api";
export const wsUrl = "wss://norma.nomoreparties.space/orders";

export function formatDate(date: string) {
  let t = new Date(date)
  let now = new Date().getDate();
  let hr = ("0" + t.getHours()).slice(-2);
  let min = ("0" + t.getMinutes()).slice(-2);
  let totalDate = ""
  let utc = (t.getTimezoneOffset()/60)*(-1);
  let diffValue = now - t.getDate();
  if (diffValue == 0) {
    totalDate = "Сегодня"
  } else if (diffValue == 1) {
    totalDate = "Вчера"
  }
  else if (diffValue > 1 && diffValue <= 4) {
    totalDate = diffValue + "дня назад"
  } else {
    totalDate = diffValue + "дней назад"
  }
  return totalDate+","+" "+hr+":"+min+" i-GMT+"+utc;
}

export function checkResponse(res: Response) {
    if (res.ok) {
        return res.json();
    } else {
      return res.json().then((json) => Promise.reject(json));
    }
}

export function setCookie(name: string, value: string, props?: any) {
    props = props || {};
    let exp = props.expires;
    if (typeof exp == 'number' && exp) {
      const d = new Date();
      d.setTime(d.getTime() + exp * 1000);
      exp = props.expires = d;
    }
    if (exp && exp.toUTCString) {
      props.expires = exp.toUTCString();
    }
    value = encodeURIComponent(value);
    let updatedCookie = name + '=' + value;
    for (const propName in props) {
      updatedCookie += '; ' + propName;
      const propValue = props[propName];
      if (propValue !== true) {
        updatedCookie += '=' + propValue;
      }
    }
    document.cookie = updatedCookie;
  }
  
  export function getCookie(name: string) {
    const matches = document.cookie.match(
      new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)')
    );
    return matches ? decodeURIComponent(matches[1]) : undefined;
  } 