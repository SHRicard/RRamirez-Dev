import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useThemeMode } from "@hooks";
import { AccountMenu, Footer } from "@molecules";
import { CustomBox } from "@atoms"
import { routes } from "@routes"

function App() {
  const { currentTheme } = useThemeMode();


  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <BrowserRouter>
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
            <Routes>
              {routes.map(({ path, component }, index) => (
                <Route key={index} path={path} element={component} />
              ))}
            </Routes>
          </CustomBox>

          {/* Footer */}
          <CustomBox
            component="footer"
          >
            <Footer />
          </CustomBox>
        </CustomBox>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
