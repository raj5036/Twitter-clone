import { getHost } from '../lib/Constants';

// it will result the following ---> to =  T-((T-offset) % W) where T is current time and W is the window size (both in ms) and to will be the base/start time
export let calculateModulusFromArbValue = (
  curr_time,
  timeDifference = 86400000
) => {
  curr_time = new Date(curr_time); //T
  let offset = curr_time.getTimezoneOffset(); //returns offset in minutes  --> difference in local and UTC time (+ve if UTC is ahead of local time else -ve)
  let time_offset = offset * 60 * 1000; //offset
  curr_time = new Date(curr_time).getTime();
  let modulus = (curr_time - time_offset) % timeDifference; // (T-offset) % W
  if (curr_time !== curr_time - modulus) return curr_time - modulus;
  // T- ((T-offset) % W)
  else return calculateModulusFromArbValue(curr_time - 1, timeDifference);
};

export function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

export let ReplaceUrlHostname = (initialURL, newHostname = getHost()) => {
  // console.log(initialURL);
  return `${newHostname}/${initialURL.split('/').slice(3).join('/')}`;
};

export let GetUrlHostname = (URL) => {
  // console.log(initialURL);
  return URL.split('/')[2].split(':')[0];
};

export let getCorrespondingMonth = (monthNumber) => {
  const date = new Date(1970, parseInt(monthNumber) - 1, 1);
  return date.toLocaleString('default', { month: 'short' });
};

export function capitalizeFirstLetter(string) {
  if (!string) return undefined;
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function convertUnderscoreCaseToTitleCase(str) {
  if (!str) return undefined;
  let fragments = str.split('_');
  fragments.forEach((fragment, index) => {
    fragments[index] = fragment.charAt(0).toUpperCase() + fragment.slice(1);
  });
  // for (i = 0; i < fragments.length; i++) {
  //   fragments[i] = fragments[i].charAt(0).toUpperCase() + fragments[i].slice(1);
  // }
  return fragments.join(' ');
}

export function convertToTitleCase(str) {
  if (!str) return undefined;
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

export let trimNonNumbersFromString = (targetString) => {
  return targetString.replace(/[^\d.-]/g, '');
};

export let commonRoundOff = (targetNumber, decimalPlaces) => {
  return (
    Math.round((targetNumber + Number.EPSILON) * Math.pow(10, decimalPlaces)) /
    Math.pow(10, decimalPlaces)
  );
};

export let groupBy = (xs, key) => {
  return xs.reduce((rv, x) => {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};
