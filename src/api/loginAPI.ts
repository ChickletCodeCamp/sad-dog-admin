import req from '../utils/fetchPlugin'


// Get Hello Sad Dog!
export const apiGet = (data: any) => {
    return req.get(`/`, data, undefined)
}
