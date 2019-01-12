import React from 'react'
import FormationsPreview from '../previews/FormationsPreview'
import {Grid} from '@material-ui/core/'

function FormationsLoop(props) {
  const trainings = props.trainings
  return (
    <Grid container spacing={40}>
      {trainings.map((doc, i) => 
        <Grid key={i} 
          item xs={12} 
          md={i === 0 ? 12 : 6} 
        >
          <FormationsPreview doc={doc}/>  
        </Grid>   
      )}
    </Grid>
  );
}

export default FormationsLoop
