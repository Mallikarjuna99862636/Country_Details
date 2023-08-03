import { call, put } from "redux-saga/effects"
import { SagaIterator } from "@redux-saga/types"
import { countryRedux } from "../../redux/countrydata/CountryDataRedux"


export function* CountryDetailsSaga(api: any, action: any): SagaIterator {
    try {
        const responce = yield call(api.countryData, action.payload)
        if (responce.status === 200) {
            yield put(countryRedux.actions.countryDataSuccess(responce.data))
        } else {
            yield put(countryRedux.actions.countryDataFailure(responce.data))
        }
    } catch (error: any) {
        yield put(countryRedux.actions.countryDataFailure(error))
    }
}

export function* getDetailsByName(api: any, action: any): SagaIterator {
    try {
        const responce = yield call(api.getDetailsByName, action.payload)
        if (responce.status === 200) {
            yield put(countryRedux.actions.nameDetailsSuccess(responce.data))
        } else {
            yield put(countryRedux.actions.nameDetailsFailure(responce.data))
        }
    } catch (error: any) {
        yield put(countryRedux.actions.nameDetailsFailure(error))
    }
}



