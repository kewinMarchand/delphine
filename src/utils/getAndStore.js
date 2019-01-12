import apiEndpoint from '../utils/apiEndpoint'
import Prismic from 'prismic-javascript'

const getAndStore = (dispatch, docType, limit, page, actionType) => {
  Prismic.api(apiEndpoint)
    .then(api => {
      api.query([
        Prismic.Predicates.at('document.type', docType),
      ],{ pageSize : limit, page : page})
    .then(response => {
      if (response) {
        const action = {type: actionType, value: response.results}
        dispatch(action)
      }
    })
  });       
}

export default getAndStore
