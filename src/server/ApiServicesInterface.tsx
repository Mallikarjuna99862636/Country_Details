interface IApiServices {
    countryData: (reqBody: any) => Promise<any>,
    getDetailsByName: (reqBody: any) => Promise<any>
}

export default IApiServices
