import { useThemeMode } from "@hooks";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { AccountMenu, Footer } from "@molecules";
import { CustomBox } from "@atoms"


function App() {
  const { currentTheme } = useThemeMode();


  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <CustomBox
        sx={{
          minHeight: "100vh",
          width: "100vw",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Menu flotante */}
        <CustomBox
          component="header"
          sx={{
            position: "fixed",
            top: "6%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            display: 'flex',
            alignItems: 'center',
            justifyContent: "center",
            zIndex: 10,
            width: "99%",
            borderRadius: 0.8,
          }}
        >
          <AccountMenu />
        </CustomBox>

        {/* Main */}
        <CustomBox
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
        </CustomBox>

        {/* Footer */}
        <CustomBox
          component="footer"
        >
          <Footer />
        </CustomBox>
      </CustomBox>
    </ThemeProvider>
  );
}

export default App;
