import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { countryRedux } from './countrydata/CountryDataRedux'
import { rootSaga } from '../saga'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const middlewares: any = []

    const middleware = createSagaMiddleware()
    middlewares.push(middleware)

    const sagaMiddleWare = () => middlewares

    const store = configureStore({
        reducer: {
            country: countryRedux.reducer,
        },
        middleware: sagaMiddleWare
    })

    middleware.run(rootSaga)

    return {
        store,
        sagaMiddleWare
    }
}