import { createStore, combineReducers } from 'redux'
import storeDatas from './Reducers/datasReducer'
import storeNews from './Reducers/newsReducer'
import storeTrainings from './Reducers/trainingsReducer'
import storeBenefits from './Reducers/benefitsReducer'

const rootReducer = combineReducers({
    storeDatas,
    storeNews,
    storeTrainings,
    storeBenefits
})

export default createStore(rootReducer)
