import { createTheme, darken, responsiveFontSizes, Theme, ThemeOptions } from '@mui/material/styles'

const fontFamily = 'Montserrat'
// Instead of exporting `colors` variable use theme:
// import theme from 'common/theme'
// <meta name="theme-color" content={theme.palette.primary.main} />
const colors = {
  blue: {
    light: '#F3FDFF',
    main: '#32A9FE',
    mainDark: darken('#32A9FE', 0.2),
    dark: '#294E85',
  },
  yellow: {
    main: '#FFCB57',
  },
  gray: {
    main: '#F5F5F5',
    background: '#FAFAFA',
  },
  white: {
    main: '#ffffff',
  },
}

export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      light: colors.blue.light,
      main: colors.blue.main,
      dark: colors.blue.dark,
    },
    secondary: {
      main: colors.yellow.main,
      light: colors.gray.main,
    },
    background: {
      default: colors.white.main,
    },
  },
  shape: {
    borderRadius: 3,
  },
  components: {
    MuiLink: {
      defaultProps: {
        underline: 'none',
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          lineHeight: 2,
          borderRadius: '25px',
        },
        textPrimary: {
          color: colors.blue.dark,
          '&:hover': {
            color: colors.blue.mainDark,
          },
        },
        outlinedPrimary: {
          color: colors.blue.dark,
        },
        containedPrimary: {
          backgroundColor: colors.blue.dark,
          color: colors.blue.light,
          '&:hover': {
            backgroundColor: darken(colors.blue.dark, 0.2),
          },
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontSize: '1rem',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: '1rem',
        },
      },
    },

    MuiAppBar: {
      styleOverrides: {
        root: {
          paddingLeft: 15,
          paddingRight: 15,
        },
      },
    },

    MuiMenuItem: {
      defaultProps: {
        sx: { py: 1.5 },
      },
    },
  },

  typography: {
    h1: { fontFamily },
    h2: { fontFamily },
    h3: { fontFamily, color: colors.blue.dark },
    h4: { fontFamily },
    h5: { fontFamily },
    h6: { fontFamily },
    button: { fontFamily, textTransform: 'initial' },
    body1: {
      fontSize: '0.875rem',
      lineHeight: '1.43',
      letterSpacing: '0.01071em',
    },
  },
}
// https://material-ui.com/customization/default-theme/#default-theme
const theme: Theme = createTheme(themeOptions)
const materialTheme = responsiveFontSizes(theme)
const podkrepiTheme = {
  borders: {
    dark: colors.blue.dark,
    light: colors.blue.main,
    roundRadius: 60,
  },
  ...materialTheme,
}

export default podkrepiTheme
