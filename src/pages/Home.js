import React, { Component } from 'react'
import {connect} from 'react-redux'
import getAndStore from '../utils/getAndStore'

import Header from '../components/Header'
import Section from '../layouts/SectionLayout'
import About from '../sections/About'
import ArticlesLoop from '../loops/ArticlesLoop'
import FormationsLoop from '../loops/FormationsLoop'
import PrestationsLoop from '../loops/PrestationsLoop'
import Contact from '../sections/Contact'
import Loader from '../components/Loader'

class Home extends Component {

  componentWillMount() {
    getAndStore(this.props.dispatch, 'page_daccueil', 100, 1, 'STORE_DATAS')
    getAndStore(this.props.dispatch, 'article', 6, 1, 'STORE_NEWS')
    getAndStore(this.props.dispatch, 'formations', 3, 1, 'STORE_TRAININGS')
    getAndStore(this.props.dispatch, 'prestations', 3, 1, 'STORE_BENEFITS')
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
      console.log('page accueil', doc)
      console.log('articles', News)
      console.log('formations', Trainings)
      console.log('prestations', Benefits)
      return (
        <React.Fragment>
          <Header doc={doc}/>
          <Section 
            id="apropos"
            ctaText="decouvrez nos formations"
            ctaHref="/#formations"
            children={<About doc={doc}/>}
          />
          <Section 
            title="Nos formations" 
            id="formations"
            ctaText="notre offre conseil"
            ctaHref="/#prestations"
            children={<FormationsLoop trainings={Trainings}/>}
          />
          <Section 
            title="Nos prestations de conseil" 
            id="prestations"
            ctaText="l&#39;actualité social rh"
            ctaHref="/#articles"
            children={<PrestationsLoop benefits={Benefits}/>}
          />
          <Section 
            title="L&#39;actualité Social RH" 
            id="articles" 
            ctaText="voir tous les articles"
            ctaHref="/articles"
            children={<ArticlesLoop news={News} section/>}
          />
          <Section 
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
