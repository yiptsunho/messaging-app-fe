import {USER_LOGIN, USER_REGISTER} from "../utils/ApiConst";
import axios from "axios";

export const register = async (params) => {
    const { payload } = params
    let response = null

    try {
        response = await axios.post(USER_REGISTER, payload)
        params?.successCallback(response)
    } catch (err) {
        console.log(err)
        params?.failCallback(err)
    }
}

export const login = async (params) => {
    const { payload } = params
    let response = null

    try {
        response = await axios.post(USER_LOGIN, payload)
        params?.successCallback(response)
    } catch (err) {
        console.log(err)
        params?.failCallback(err)
    }

}