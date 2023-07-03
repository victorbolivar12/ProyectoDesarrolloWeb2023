import * as React from "react";
import { Paper, Box, Grid, Typography } from "@mui/material";
import bg from "../../assets/login-bg.jpg";
import {
  CustomBottom,
  TextInput,
  TextInputPassword,
  Link,
} from "../../components";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const View = ({ formik }) => {
  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
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
        sm={8}
        md={5}
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
          {/* <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar> */}
          <Typography component="h1" variant="h4" fontWeight={700}>
            BIENVENIDO
          </Typography>
          <Box
            component="form"
            onSubmit={formik.handleSubmit}
            sx={{ mt: "auto" }}
          >
            <TextInput
              id="email"
              name={"email"}
              label={"Email"}
              placeholder={"Ingresa tu email"}
              margin="dense"
              fullWidth={true}
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextInputPassword
              id="password"
              name="password"
              label="Password"
              placeholder={"Ingresa tu contraseña"}
              margin="dense"
              link={true}
              fullWidth={true}
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />

            <CustomBottom
              name={"Iniciar Sesión"}
              fullWidth
              variant="contained"
              type="submit"
              sx={{
                mt: 10,
                mb: 2,
                borderRadius:"40px",
                backgroundImage:
                  "linear-gradient(180deg, #8AE0FB 0%, #3371EB 100%)",
              }}
            />
          </Box>
          <Typography variant="body2" gutterBottom sx={{ mt: "auto" }}>
            ¿Todavía no tienes una cuenta?{" "}
            <Link
              href={"/register"}
              variant="subtitle2"
              color="inherit"
              underline="none"
            >
              {"Regístrate ya!!!"}
            </Link>
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default View;
