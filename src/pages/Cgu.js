import React from 'react'

import PageLayout from '../layouts/PageLayout'
import SectionLayout from '../layouts/SectionLayout'
import Lorem from '../components/Lorem'

function Cgu() {
    return (
        <PageLayout 
            ctaText="Retour à l&#39;accueil"  
            ctaHref="/" 
            noAnchor 
            titre="Conditions générales d'utilisation"
            soustitre="SRH Compétences"
        >
            <SectionLayout noCta noBanner>
                <Lorem/>
            </SectionLayout>
        </PageLayout>
    );
}

export default Cgu
