import React from 'react'
import {connect} from 'react-redux'
import getAndStore from '../utils/getAndStore'

import ArticleLayout from '../layouts/ArticleLayout'
import Loader from '../components/Loader'

import {RichText} from 'prismic-reactjs'

class ArticleSingle extends React.Component {

    componentWillMount() {
        if (0 === this.props.storeNews.News.length) {
            getAndStore(this.props.dispatch, 'article', 6, 1, 'STORE_NEWS')
        } else {
            console.log('cache', this.props.storeNews.News)
        }
    }

    render() {
        const {News} = this.props.storeNews,
            ready = 0 !== News.length
        let doc = []

        if (ready) {
            for (let i = 0; i < News.length; i++) {
                if (News[i].uid === this.props.match.params.uid) {
                    doc = News[i].data
                }
            }
        }

        if(0 !== doc.length) {
            console.log('article', doc)
            return (
                <ArticleLayout
                    image_d_illustration={doc.image_d_illustration.url}
                    titre={RichText.asText(doc.titre)}
                    texte_principal={RichText.asText(doc.texte_principal_de_l_article)}
                    image_d_illustration_secondaire={doc.image_d_illustration_secondaire}
                />
            );
        }
        return <Loader/>;
    }
}

const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: (action) => { dispatch(action) }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ArticleSingle)
