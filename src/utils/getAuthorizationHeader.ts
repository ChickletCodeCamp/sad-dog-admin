// import jsSHA from 'jssha'
import { CookieDao } from './dao';

export function getAuthorizationHeader(): any {
  const authToken = new CookieDao().read('Authorization');

  const GMTString = new Date().toUTCString();
  // const shaObj = new jsSHA('SHA-1', 'TEXT')
  // shaObj.setHMACKey("appKey", 'TEXT')
  // shaObj.update('x-date: ' + GMTString)
  //const HMAC = shaObj.getHMAC('B64')
  //const Authorization = `hmac  algorithm="hmac-sha1", headers="x-date", signature="${HMAC}"`

  return {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    'X-Date': GMTString,
    Authorization: authToken
  };
}
