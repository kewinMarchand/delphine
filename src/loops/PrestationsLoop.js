import React from 'react'
import PrestationsPreview from '../previews/PrestationsPreview'
import {Grid} from '@material-ui/core/'

function PrestationsLoop(props) {
  const benefits = props.benefits
  return (
    <Grid container spacing={40}>
      {benefits.map((doc, i) => 
        <Grid key={i} 
          item xs={12} 
          md={i === 0 ? 12 : 6}
        >
          <PrestationsPreview doc={doc}/>  
        </Grid>   
      )}
    </Grid>
  );
}

export default PrestationsLoop
