import req from '../utils/fetchPlugin'
import { LoginUserDto } from '../models/apiModels'


/**login
 * 
 * @param data login data
 * @returns 登入結果
 */
export const apiLogin = (data: LoginUserDto) => {
    return req.post(`/auth/login`, data, {
        credentials: 'include',
        withCredentials: true
    })
}
