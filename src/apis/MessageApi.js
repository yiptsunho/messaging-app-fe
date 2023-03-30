import { GET_MESSAGE_HISTORY } from "../utils/ApiConst"

export const getMessageHistory = (params) => {
    const { userId } = params

    try {
        axios.get(`${GET_MESSAGE_HISTORY}/${userId}`)
        params?.successCallback?.()
    } catch {
        params?.failCallback?.()
    }
}