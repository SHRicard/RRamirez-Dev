import { useThemeMode } from "@hooks";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { AccountMenu } from "@molecules";

function App() {
  const { currentTheme } = useThemeMode();

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          bgcolor: "background.default",
          color: "text.primary",
        }}
      >
        {/* Menu flotante */}
        <Box
          component="header"
          sx={{
            position: "fixed",
            top: "6%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            display: 'flex',
            alignItems: 'center',
            justifyContent: "center",
            bgcolor: "primary.main",
            color: "primary.contrastText",
            zIndex: 10,
            width: "99%",
            borderRadius: 0.8,
          }}
        >
          <AccountMenu />
        </Box>

        {/* Main */}
        <Box
          component="main"
          sx={{
            flex: 1,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: 2,
            pt: 10,
          }}
        >
          {/* Contenido dinámico */}
          <h1>Bienvenido a mi Portafolio</h1>
          <p>Este es el contenido principal de la aplicación.</p>
        </Box>

        {/* Footer */}
        <Box
          component="footer"
          sx={{
            width: "100%",
            bgcolor: "secondary.main",
            color: "secondary.contrastText",
            padding: 1,
            textAlign: "center",
          }}
        >
          <p>&copy; 2025 RRamirez-Dev. Todos los derechos reservados.</p>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
