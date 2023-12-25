import req from '@/utils/fetchPlugin';
import { CreateUserType, UpdateUserType } from './userType';

/**get user by id
 *
 * @param data user id
 * @returns 查詢的使用者
 */
export const apiGetUser = (data: string) => {
  return req.get(`/user`, data, undefined);
};

/**建立使用者
 *
 * @param data 使用者資訊
 * @returns 新建立的使用者資訊
 */
export const apiPostUser = (data: CreateUserType) => {
  return req.post(`/user`, data, undefined);
};

/**建立使用者
 *
 * @param data 使用者資訊
 * @returns 更新使用者的資訊
 */
export const apiPutUser = (data: UpdateUserType) => {
  return req.put(`/user`, data, undefined);
};

/**delete user by id
 *
 * @param data user id
 * @returns 刪除的使用者
 */
export const apiDeleteUser = (data: string) => {
  return req.delete(`/user`, data, undefined);
};
