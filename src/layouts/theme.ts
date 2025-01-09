import { createTheme } from '@mui/material/styles'

export const lightColors = {
  primary: { main: '#1d4ed8' }, // Tailwind CSS: Blue-700
  secondary: { main: '#262626' }, // Tailwind CSS: Neutral-800
  background: {
    default: '#f5f5f5', // Tailwind CSS: Neutral-100
    paper: '#e5e5e5', // Tailwind CSS: Neutral-200
  },
  text: {
    primary: '#262626', // Tailwind CSS: Neutral-800
    secondary: '#404040', // Tailwind CSS: Neutral-700
  },
}

export const darkColors = {
  primary: { main: '#1d4ed8' }, // Tailwind CSS: Blue-700
  secondary: { main: '#262626' }, // Tailwind CSS: Neutral-800
  background: {
    default: '#262626', // Tailwind CSS: Neutral-800
    paper: '#404040', // Tailwind CSS: Neutral-700
  },
  text: {
    primary: '#f5f5f5', // Tailwind CSS: Neutral-100
    secondary: '#e5e5e5', // Tailwind CSS: Neutral-200
  },
}

const DarkModeComponents = {
  MuiDataGrid: {
    styleOverrides: {
      root: {
        '& .MuiDataGrid-columnHeaders': {
          // backgroundColor: '#FF00FF',
          // color: '#DAA520',
        },
        '& .MuiDataGrid-cell': {
          // color: '#800000',
        },
        '& .MuiDataGrid-footerContainer': {
          // backgroundColor: '#171717',
          // color: '#ffffff',
        },
      },
    },
  },
  MuiFilledInput: {
    styleOverrides: {
      root: {
        '& .MuiInputBase-input': {
          backgroundColor: darkColors.background.default,
          color: darkColors.text.primary,
        },
      },
    },
  },
}
const LightModeComponents = {
  MuiDataGrid: {
    styleOverrides: {
      root: {
        '& .MuiDataGrid-columnHeaders': {
          // backgroundColor: '#FF00FF',
          // color: '#DAA520',
        },
        '& .MuiDataGrid-cell': {
          // color: '#800000',
        },
        '& .MuiDataGrid-footerContainer': {
          // backgroundColor: '#C',
          // color: '#ffffff',
        },
      },
    },
  },
  MuiFilledInput: {
    styleOverrides: {
      root: {
        '& .MuiInputBase-input': {
          backgroundColor: lightColors.background.default,
          color: lightColors.text.primary,
        },
      },
    },
  },
}

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: lightColors.primary,
    secondary: lightColors.secondary,
    background: {
      default: lightColors.background.default,
      paper: lightColors.background.paper,
    },
    text: {
      primary: lightColors.text.primary,
      secondary: lightColors.text.secondary,
    },
  },
  components: LightModeComponents,
})

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: darkColors.primary,
    secondary: darkColors.secondary,
    background: {
      default: darkColors.background.default,
      paper: darkColors.background.paper,
    },
    text: {
      primary: darkColors.text.primary,
      secondary: darkColors.text.secondary,
    },
  },
  components: DarkModeComponents,
})
