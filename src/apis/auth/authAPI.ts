import req from '@/utils/fetchPlugin';
import { LoginUserType } from './authType';

/**login
 *
 * @param data login data
 * @returns 登入結果
 */
export const apiLogin = (data: LoginUserType) => {
  return req.post(`/auth/login`, data, undefined);
};

/**logout
 *
 * @returns 登出結果
 */
export const apiLogout = () => {
  return req.get(`/auth/logout`, '');
};
