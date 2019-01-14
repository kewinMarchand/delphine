import React from 'react'

import PageLayout from '../layouts/PageLayout'
import SectionLayout from '../layouts/SectionLayout'
import Lorem from '../components/Lorem'

function Mentions() {
  return (
    <PageLayout 
      ctaText="Retour à l&#39;accueil"  
      ctaHref="/" 
      noAnchor 
      titre="Mentions légales"
      soustitre="SRH Compétences"
    >
      <SectionLayout noCta noBanner>
        <Lorem/>
      </SectionLayout>
    </PageLayout>
  );
}

export default Mentions
