import { takeEvery } from 'redux-saga/effects'
import ApiServices from '../server/ApiServices'
import { countryDataRequest, nameDetailsRequest } from '../redux/countrydata/CountryDataRedux'
import { CountryDetailsSaga, getDetailsByName } from './countrydata/CounrtyDataSaga'

const api = ApiServices.create()

export function* rootSaga() {
    yield takeEvery(countryDataRequest, CountryDetailsSaga, api)
    yield takeEvery(nameDetailsRequest, getDetailsByName, api)
} 