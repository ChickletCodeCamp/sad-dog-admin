import req from '../utils/fetchPlugin'


// Get Hello Sad Dog!
export const apiGetHelloSadDog = (data: any) => {
    return req.get(`/`, data, undefined)
}
