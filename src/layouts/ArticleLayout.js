import React from 'react'
import {withStyles, Grid, Typography} from '@material-ui/core/'

const styles = () => ({
  header: {
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: 400,
  },
  overlay: {
    backgroundColor: 'rgba(50,50,50,.5)',
    height: '100%',
  },
  typography: {
    color: '#fff',
  },
  media: {
    height: 'auto',
    maxWidth: '100%',
  }
})

function ArticleLayout(props) {
    const {classes, image_d_illustration, titre, texte_principal, image_d_illustration_secondaire} = props
    return (
        <Grid container alignItems="center">
            <Grid container alignItems="center">
                <Grid
                    container
                    alignItems="center"
                    justify="center"
                    component="header"
                    className={classes.header}
                    style={{
                        backgroundImage: image_d_illustration && 'url(' + image_d_illustration + ')'
                    }}
                >
                    <Grid
                        container
                        alignItems="center"
                        justify="center"
                        className={classes.overlay}
                    >
                        <Typography
                            variant="h1"
                            className={classes.typography}
                        >
                            {titre && titre}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container alignItems="center">
                <Typography>
                    {texte_principal && texte_principal}
                </Typography>
                {undefined !== image_d_illustration_secondaire &&
                    <img
                        alt="illustration"
                        className={classes.media}
                        src={image_d_illustration_secondaire}
                    />
                }
            </Grid>
        </Grid>
    );
}

export default withStyles(styles)(ArticleLayout)
