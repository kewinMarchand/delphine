const initialState = { Benefits: [] }

function storeBenefits(state = initialState, action) {
    let nextState
    switch (action.type) {
        case 'STORE_BENEFITS':
            nextState = {
                ...state,
                Benefits: action.value
            }
            return nextState || state
    default:
        return state
    }
  }

  export default storeBenefits
