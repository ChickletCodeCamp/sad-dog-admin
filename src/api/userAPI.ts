import req from '../utils/fetchPlugin';
import { CreateUserDto, UpdateUserDto } from '../models/apiModels';

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
export const apiPostUser = (data: CreateUserDto) => {
  return req.post(`/user`, data, undefined);
};

/**建立使用者
 *
 * @param data 使用者資訊
 * @returns 更新的的使用者資訊
 */
export const apiPutUser = (data: UpdateUserDto) => {
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
