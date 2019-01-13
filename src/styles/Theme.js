import {createMuiTheme} from '@material-ui/core/styles'
import hex2rgba from '../utils/hex2rgba'


const palette = {
    primary: {
        light: '#A51C1b',
        main: '#841818',
        dark: '#A51C1b',
        contrastText: '#FFFFFF',
        alpha: hex2rgba('#841818', .3),
    },
    secondary: {
        light: '#9D9D9D',
        main: '#3A3737',
        dark: '#9D9D9D',
        contrastText: '#FFFFFF',
        alpha: hex2rgba('#3A3737', .3),
    },
    tertiary: {
        main: '#FFFFFF',
        light: '#ffA000',
        dark: '#ffE632',
        contrastText: '#333333'
    },
    textPrimary: {
        main: '#000',
    },
    textSecondary: {
        main: '#9D9D9D',
    },
    alert: {
        main: '#c91b1b',
    },
    background: {
        default: '#FFFFFF',
        grey: '#EDEDED',
        darkgrey: '#CDCDCD',
        dark: '#3D3D3D',
        gradient: 'linear-gradient(to bottom, #FFFFFF, #EDEDED)',
        overlay: 'rgba(0, 0, 0, 0.3)',
    },
    layout: {
        width: 1280,
    }
}

const breakpoints = {
    keys: {
        0: 'xs',
        1: 'sm',
        2: 'md',
        3: 'lg',
        4: 'xl',
    },
    values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1600,
    }
}

const typography = {
    fontFamily: '"Open Sans",sans-serif',
    fontWeightLight: 300,
    fontWeightRegular: 500,
    fontWeightMedium: 700,
    useNextVariants: true,
    h1 :{
        fontFamily: '"Playfair Display","Open Sans",sans-serif',
        fontSize: '3rem',
        fontWeight: 500,
    },
    h2 :{
        fontFamily: '"Playfair Display","Open Sans",sans-serif',
        fontSize: '2.25rem',
        fontWeight: 300,
    },
    h3 :{
        color: palette.textPrimary.main,
        fontSize: '1.50rem',
        fontWeight: 500,
    },
    h4 :{
        fontSize: '1.375rem',
        fontWeight: 300,
    },
    h5 :{
        fontSize: '1.25rem',
        fontWeight: 300,
    },
    h6: {
        fontSize: '1.25rem',
        fontWeight: 700,
    },
    subtitle1 : {
        fontSize: '1.125rem',
        fontWeight: 300,
    },
    body2 : {
        fontSize: '1rem',
        fontWeight: 300,
        lineHeight: '21px',
    },
    body1 : {
        fontSize: '0.875rem',
        fontWeight: 300,
    },
    caption : {
        fontSize: '0.75rem',
        fontWeight: 300,
    },
    button : {
        fontFamily: '"Open Sans",sans-serif',
        fontSize: '.75rem',
        textTransform : 'uppercase',
        fontWeight: 700,
    },
}

const spacing = {unit: 8}

const shadows = [
    'none',
    '0px 1px 2px -1px   rgba(0,84,164,0.10)',
    '0px 1px 2px 0px    rgba(0,84,164,0.10)',
    '0px 2px 4px -1px   rgba(0,84,164,0.12)',
    '0px 2px 4px 0px    rgba(0,84,164,0.12)',
    '0px 3px 6px -1px   rgba(0,84,164,0.14)',
    '0px 3px 6px 0px    rgba(0,84,164,0.14)',
    '0px 4px 8px -1px   rgba(0,84,164,0.16)',
    '0px 4px 8px 0px    rgba(0,84,164,0.16)',
    '0px 5px 10px -1px  rgba(0,84,164,0.18)',
    '0px 5px 10px 0px   rgba(0,84,164,0.18)',
    '0px 6px 12px -1px  rgba(0,84,164,0.20)',
    '0px 6px 12px 0px   rgba(0,84,164,0.20)',
    '0px 7px 14px -1px  rgba(0,84,164,0.22)',
    '0px 7px 14px 0px   rgba(0,84,164,0.22)',
    '0px 8px 16px -1px  rgba(0,84,164,0.24)',
    '0px 8px 16px 0px   rgba(0,84,164,0.24)',
    '0px 9px 18px -1px  rgba(0,84,164,0.26)',
    '0px 9px 18px 0px   rgba(0,84,164,0.26)',
    '0px 10px 20px -1px rgba(0,84,164,0.28)',
    '0px 10px 20px 0px  rgba(0,84,164,0.28)',
    '0px 11px 22px -1px rgba(0,84,164,0.30)',
    '0px 11px 22px 0px  rgba(0,84,164,0.30)',
    '0px 12px 24px -1px rgba(0,84,164,0.32)',
    '0px 12px 24px 0px  rgba(0,84,164,0.32)',
]

export {palette}

export default createMuiTheme({
    breakpoints: breakpoints,
    palette: palette,
    shadows: shadows,
    spacing: spacing,
    status: {
        danger: 'orange',
    },
    typography: typography,
    overrides: {
        MuiButton: {
            root: {
                borderRadius: 5,
                letterSpacing: 1,
                lineHeight: '1.5rem',
                padding: '.55rem 1.5rem',
                '&:hover':{
                    backgroundColor: palette.primary.alpha,
                    backgroundBlendMode: 'mix',
                }
            },
            sizeSmall: {
                fontFamily: '"Open Sans",sans-serif',
                fontSize: '.75rem',
                textTransform : 'uppercase',
                fontWeight: 700,
            }
        },
        MuiFormLabel: {
            root: {
                fontSize: '.75rem',
            }
        },
        MuiInputBase: {
            formControl: {
                fontSize: '.875rem',
            }
        }
    },

})
