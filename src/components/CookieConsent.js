import React  from 'react'
import Cookies from 'js-cookie'
import Cta from './Cta'
import SrhLink from './SrhLink'
import { Card, CardContent, Drawer, Typography} from '@material-ui/core';

class CookieConsent extends React.Component {
    state = {
        cookieConsent: false,
        isCookieDrawerOpen: false
    }

    componentWillMount() {
        const consent = Cookies.get('cookieConsent') 
        if(undefined === consent) {
            this.setState({isCookieDrawerOpen: true}) 
        } 
    }

    handleCookie = () => {
        this.setState({isCookieDrawerOpen: false})
        Cookies.set('cookieConsent', true, { expires: 7 })
    }

    render() {
        const {isCookieDrawerOpen} = this.state
        return (
            <Drawer
                anchor="bottom"
                open={isCookieDrawerOpen}
                variant="persistent"
            >
                <Card>
                    <CardContent>
                        <Typography 
                            variant="h4" 
                            gutterBottom
                        >
                            Utilisation des cookies
                        </Typography>
                        <Typography variant="caption">
                            En poursuivant votre navigation, vous acceptez l'utilisation de cookies ou technologies similaires, y compris de partenaires tiers pour la diffusion de publicité ciblée et de contenus pertinents au regard de vos centres d'intérêts. 
                            Afin de continuer à améliorer la protection de vos données personnelles, nous avons mis à jour notre politique de confidentialité. 
                            <SrhLink 
                                to="/mentions_legales" 
                                text="En savoir plus."
                            />
                        </Typography>
                        <Cta 
                            onClick={this.handleCookie} 
                            text="J&#39;accepte"
                        />
                    </CardContent>
                </Card>
                
            </Drawer>  
        )
    }
}

export default CookieConsent