import React, { Component } from 'react'
import {connect} from 'react-redux'
import getAndStore from '../utils/getAndStore'

import PageLayout from '../layouts/PageLayout'
import SectionLayout from '../layouts/SectionLayout'
import About from '../sections/About'
import ArticlesLoop from '../loops/ArticlesLoop'
import FormationsLoop from '../loops/FormationsLoop'
import PrestationsLoop from '../loops/PrestationsLoop'
import Contact from '../sections/Contact'
import Loader from '../components/Loader'

class Home extends Component {

  componentWillMount() {
    const {dispatch, storeDatas, storeNews, storeTrainings, storeBenefits} = this.props
    if(0 === storeDatas.Datas.length) {
      getAndStore(dispatch, 'page_daccueil', 100, 1, 'STORE_DATAS')
    }
    if(0 === storeNews.News.length) {
      getAndStore(dispatch, 'article', 6, 1, 'STORE_NEWS')
    }
    if(0 === storeTrainings.Trainings.length) {
      getAndStore(dispatch, 'formations', 3, 1, 'STORE_TRAININGS')
    }
    if(0 === storeBenefits.Benefits.length) {
      getAndStore(dispatch, 'prestations', 3, 1, 'STORE_BENEFITS')
    }
  }

  render() {
    const {storeDatas, storeNews, storeTrainings, storeBenefits} = this.props,
      {Datas} = storeDatas,
      {News} = storeNews,
      {Trainings} = storeTrainings,
      {Benefits} = storeBenefits,
      ready = 0 !== Datas.length && 0 !== News.length && 0 !== Trainings.length && 0 !== Benefits.length

    if (ready) {
      const doc = Datas[0].data
      return (
        <PageLayout
          doc={doc} 
          titre={doc.titre[0].text} 
          soustitre={doc.sous_titre[0].text} 
          cta
          noCta
        >
          <React.Fragment>
            <SectionLayout 
              id="apropos"
              ctaText="decouvrez nos formations"
              ctaHref="#formations"
              children={<About doc={doc}/>}
            />
            <SectionLayout 
              title="Nos formations" 
              id="formations"
              ctaText="notre offre conseil"
              ctaHref="#prestations"
              children={<FormationsLoop trainings={Trainings}/>}
            />
            <SectionLayout 
              title="Nos prestations de conseil" 
              id="prestations"
              ctaText="l&#39;actualité social rh"
              ctaHref="#articles"
              children={<PrestationsLoop benefits={Benefits}/>}
            />
            <SectionLayout 
              title="L&#39;actualité Social RH" 
              id="articles" 
              ctaText="voir tous les articles"
              ctaHref="/articles"
              noAnchor
              children={<ArticlesLoop news={News} section/>}
            />
            <SectionLayout 
              title="Contactez-nous" 
              subtitle="pour connaître nos programmes et tarifs" 
              id="contact" 
              noCta
              noBanner
              bgImage={doc.image_de_fond_section_contact && doc.image_de_fond_section_contact.url}
              overlay
              white
              children={<Contact/>}
            />
          </React.Fragment>
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
)(Home)
