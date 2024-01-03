import axios from "axios"

// "http://api.ardotex.uz/"

export const baseUrl = "https://api.ardotex.uz/"

const instance = axios.create({
    baseURL: baseUrl + "api/v1/"
})

export default instance