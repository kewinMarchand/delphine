import React from 'react'

import PageLayout from '../layouts/PageLayout'
import SectionLayout from '../layouts/SectionLayout'

import {Grid, Typography} from '@material-ui/core/'

function NotFound() {
    return (
        <PageLayout 
            ctaText="Retour à l&#39;accueil"  
            ctaHref="/" 
            noAnchor 
            titre="404"
            soustitre="SRH Compétences"
        >
            <SectionLayout noCta noBanner>
                <Grid item xs={12}>
                    <Typography align="center">
                        Oups ! Quelque chose s'est mal passé
                    </Typography>
                </Grid>
            </SectionLayout>
        </PageLayout>
    );
}

export default NotFound
