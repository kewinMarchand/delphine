const initialState = { News: [] }

function storeNews(state = initialState, action) {
    let nextState
    switch (action.type) {
        case 'STORE_NEWS':
            nextState = {
                ...state,
                News: action.value
            }
            return nextState || state
    default:
        return state
    }
  }

  export default storeNews
