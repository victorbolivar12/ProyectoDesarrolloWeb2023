import React, { Suspense } from "react";
import { AppRouter } from "./routes";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Loader } from "./components";

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<Loader />}>
        <AppRouter />
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
