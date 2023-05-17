import * as React from "react";
import { CssBaseline, Paper, Box, Grid, Typography } from "@mui/material";
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
      <CssBaseline />
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
          <Typography component="h1" variant="h4" fontWeight={700}>
            BIENVENIDO
          </Typography>
          <Box
            component="form"
            onSubmit={formik.handleSubmit}
            sx={{ mt: "auto" }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextInput
                 id="name"
                 name={"name"}
                 label={"Nombre"}
                 placeholder={"Ingresa tu nombre"}
                 fullWidth={true}
                 value={formik.values.name}
                 onChange={formik.handleChange}
                 error={formik.touched.name && Boolean(formik.errors.name)}
                 helperText={formik.touched.name && formik.errors.name}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextInput
                  id="lastName"
                  name={"lastName"}
                  label={"Apellido"}
                  placeholder={"Ingresa tu apellido"}
                  fullWidth={true}
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                  helperText={formik.touched.lastName && formik.errors.lastName}
                />
              </Grid>
              <Grid item xs={12}>
                <TextInput
                  id="email"
                  name={"email"}
                  label={"Email"}
                  placeholder={"Ingresa tu email"}
                  fullWidth={true}
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextInputPassword
                  id="password"
                  name="password"
                  label="Contraseña"
                  placeholder={"Contraseña"}
                  fullWidth={true}
                  link={false}
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={formik.touched.password && Boolean(formik.errors.password)}
                  helperText={formik.touched.password && formik.errors.password}
                />
              </Grid>
              <Grid item xs={12}>
                <TextInputPassword
                  link={false}
                  id="confirmPassword"
                  name="confirmPassword"
                  label="Confirmar Contraseña"
                  placeholder={"Confirmar Contraseña"}
                  fullWidth={true}
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                  helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                />
              </Grid>
            </Grid>

            <CustomBottom
              name={"Crear una cuenta"}
              fullWidth
              variant="contained"
              type="submit"
              sx={{
                mt: 10,
                mb: 2,
                backgroundImage:
                  "linear-gradient(180deg, #8AE0FB 0%, #3371EB 100%)",
              }}
            />
          </Box>
          <Typography variant="body2" gutterBottom sx={{ mt: "auto" }}>
            ¿Tienes una cuenta?{" "}
            <Link
              href={"/"}
              variant="subtitle2"
              color="inherit"
              underline="none"
            >
              {"Inicia sesión"}
            </Link>
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default View;
