const initialState = { Datas: [] }

function storeDatas(state = initialState, action) {
    let nextState
    switch (action.type) {
        case 'STORE_DATAS':
            nextState = {
                ...state,
                Datas: action.value
            }
            return nextState || state
    default:
        return state
    }
  }

  export default storeDatas
