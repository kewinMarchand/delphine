import React from 'react'
import {connect} from 'react-redux'
import getAndStore from '../utils/getAndStore'

import PageLayout from '../layouts/PageLayout'
import SectionLayout from '../layouts/SectionLayout'
import Loader from '../components/Loader'

import {Grid, Typography} from '@material-ui/core/'

import {RichText} from 'prismic-reactjs'

class ArticleSingle extends React.Component {

    componentWillMount() {
        if (0 === this.props.storeNews.News.length) {
            getAndStore(this.props.dispatch, 'article', 6, 1, 'STORE_NEWS')
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
            return (
                <PageLayout 
                    ctaText="Retour à l&#39;accueil"  
                    ctaHref="/" 
                    noAnchor 
                    titre={RichText.asText(doc.titre)}
                    soustitre="SRH Compétences"
                    bgImage={doc.image_d_illustration.url}
                >
                    <SectionLayout noCta noBanner>
                        <Grid item xs={12}>
                            <Typography>
                                {RichText.asText(doc.texte_principal_de_l_article)}
                            </Typography>
                            {undefined !== doc.image_d_illustration_secondaire.url && 
                                <img 
                                    src={doc.image_d_illustration_secondaire.url} 
                                    alt="illustration secondaire"
                                />
                            }
                        </Grid>
                    </SectionLayout>
                </PageLayout>
                
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
