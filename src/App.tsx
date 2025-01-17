import { useThemeMode } from "@hooks"
import { Box, Button, CssBaseline, ThemeProvider, Typography } from '@mui/material'

function App() {
  const { mode, currentTheme, toggleThemeMode } = useThemeMode();



  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          bgcolor: 'background.default',
          color: 'text.primary',
          padding: 2,
        }}
      >
        <Typography variant="h3" gutterBottom>
          React + Vite + MUI + Redux Toolkit
        </Typography>
        <Typography variant="body1" gutterBottom>
          El tema actual es: <strong>{mode}</strong>
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={toggleThemeMode}
          sx={{ marginTop: 2 }}
        >
          Cambiar Tema
        </Button>
      </Box>
    </ThemeProvider>

  )
}

export default App
