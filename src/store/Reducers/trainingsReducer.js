const initialState = { Trainings: [] }

function storeTrainings(state = initialState, action) {
    let nextState
    switch (action.type) {
        case 'STORE_TRAININGS':
            nextState = {
                ...state,
                Trainings: action.value
            }
            return nextState || state
    default:
        return state
    }
  }

  export default storeTrainings
