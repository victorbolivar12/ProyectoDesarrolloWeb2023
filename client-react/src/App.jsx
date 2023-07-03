import React, { Suspense } from "react";
import { AppRouter } from "./routes";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { Loader } from "./components";
import { SnackbarProvider } from "notistack";
const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Suspense fallback={<Loader />}>
        <AppRouter />
        <SnackbarProvider autoHideDuration={5000} />
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
