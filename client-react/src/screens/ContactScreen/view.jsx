import * as React from "react";
import { Box, Grid, Paper, Typography  } from "@mui/material";
import bg from "../../assets/bg-4.png";
import { MuiAppBar } from "../../components";
const View = ({}) => {
  return (
    <Box>
      <MuiAppBar />
      <Grid container component="main" sx={{ height: "100vh" }}>
        <Grid
          item
          xs={false}
          sm={3}
          md={5}
          sx={{
            backgroundImage: `url(${bg})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid
          item
          xs={12}
          sm={9}
          md={7}
          component={Paper}
          elevation={6}
          sx={{
            pt: 10,
            pb: 5,
            pl: 10,
            pr: 10,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <Typography variant="h4" textAlign={"center"} gutterBottom>
              {"Contacto"}
            </Typography>
            
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default View;