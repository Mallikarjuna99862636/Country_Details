import IloginService from './ApiServicesInterface'
import axios from 'axios'


const create = (baseURL = 'https://restcountries.com/v3.1/all'): IloginService => {
    const api = axios.create({
        baseURL: baseURL,
        headers: {
            "Cache-Control": "no-cache",
            "Content-Type": "application/json",
        },
        timeout: 10000
    })

    const countryData = async () => {
        return api.get('')
    }
    
    const getDetailsByName = async (params: any) => {
        const responce = api.get(`https://restcountries.com/v3.1/name/${params}`)
        return responce
    }

    return {
        countryData, getDetailsByName
    }

}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    create
}