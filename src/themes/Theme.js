import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      light: '#f6f6f6',
      main: '#212121',
      dark: '#000000',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff9d3f',
      main: '#ef6c00',
      dark: '#b53d00',
      contrastText: '#000',
    },
  },
});