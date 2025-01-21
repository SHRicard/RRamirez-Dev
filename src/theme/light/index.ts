import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#64B5F6', // Color principal
            light: '#90CAF9', // Más claro que main
            dark: '#42A5F5', // Más oscuro que main
            contrastText: '#FFFFFF', // Texto que contrasta
        },
        secondary: {
            main: '#FFFFFF',
        },
    },
    typography: {
        fontFamily: '"Smooch Sans", sans-serif',

        h1: {
            fontSize: '2.5rem',
            fontWeight: 700,
        },
        h2: {
            fontSize: '2rem',
            fontWeight: 600,
        },
        h3: {
            fontSize: '1.75rem',
            fontWeight: 500,
        },
        body1: {
            fontSize: '1rem',
            fontWeight: 400,
        },
        body2: {
            fontSize: '0.875rem',
            fontWeight: 400,
        },
    },
});
