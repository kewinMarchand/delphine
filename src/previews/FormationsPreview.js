import React from 'react'
import CollapseCardLayout from '../layouts/CollapseCardLayout'
import {RichText} from 'prismic-reactjs'

function FormationsPreview(props) {
  const {data} = props.doc
  return (
    <CollapseCardLayout
      Media={data.icone_de_la_formation.url}
      title={RichText.asText(data.titre_de_la_formation)}
      text={RichText.asText(data.texte_d_accroche_de_la_formation)}
      collapseContent={RichText.asText(data.texte_cache_de_la_formation)}
    />
  );
}

export default FormationsPreview
