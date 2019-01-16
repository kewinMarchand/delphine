import React from 'react'

import PageLayout from '../layouts/PageLayout'
import SectionLayout from '../layouts/SectionLayout'
import {Typography} from '@material-ui/core'

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
        <Typography>
          Raison sociale : SOCIAL RH COMPETENCES

          Siège social : 16 rue Vauvenargues – 13 650 MEYRARGUES – Tél. : 06.73.50.20.87. – contact web : contact@srhcompetences.com

          Entreprise : SAS-U au capital de 5000 euros – immatriculée au RCS d’Aix-en-Provence – N° SIRET : 821 725 827 00017

          Représentante légale : Delphine WITKOWSKI

          Activité : Formation et conseil

          Responsable de la publication : Delphine WITKOWSKI

          Hébergeur : OVH – SAS OVH, 2 rue Kellermann – 59100 Roubaix – France

          Conformément à la loi informatique et libertés du 6 janvier 1978, nous vous informons que vous avez un droit de modification, de rectification et de suppression des données personnelles vous concernant qui auraient pu être collectées via ce site internet. Vos données ne sont utilisés que dans le cadre de l’activité de SOCIAL RH COMPETENCES.

          Tous les contenus de SOCIAL RH COMPETENCES sont sa propriété exclusive : marques, logos, programmes de formation, prestations proposées et tout texte figurant sur le site ne peuvent en aucun cas être copiés ou utilisés sans autorisation expresse, ce sous peine de poursuites.
        </Typography>
      </SectionLayout>
    </PageLayout>
  );
}

export default Mentions
