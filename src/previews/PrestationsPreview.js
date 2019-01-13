import React from 'react'

import CollapseCardLayout from '../layouts/CollapseCardLayout'
import {RichText} from 'prismic-reactjs'

function PrestationsPreview(props) {
  const {data} = props.doc
    return (
      <CollapseCardLayout
        Media={data.icone_de_la_prestation.url}
        title={RichText.asText(data.titre_de_la_prestation)}
        text={RichText.asText(data.texte_d_accroche_de_la_prestation)}
        collapseContent={RichText.asText(data.texte_cache_de_la_prestation)}
      />
    );
}

export default PrestationsPreview
