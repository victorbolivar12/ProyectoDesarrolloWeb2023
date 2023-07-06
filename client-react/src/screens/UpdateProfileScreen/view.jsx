import * as React from "react";
import { Paper, Box, Grid, Typography } from "@mui/material";
import {
  CustomBottom,
  TextInput,
  Link,
} from "../../components";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const View = ({ formik }) => {
  return (
    <Grid container component="main" sx={{ height: "70vh" }}>
      <Grid
        item
        xs={12}
        sm={10}
        md={30}
        //component={Paper}
        //elevation={6}
        sx={{
          pt: 2,
          pb: 6,
          pl: 1,
          pr: 1,
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
          <Typography component="h1" variant="h4" fontWeight={700} sx={{mb:5}}>
            Actualizar Perfil
          </Typography>
          <Box
            component="form"
            onSubmit={formik.handleSubmit}
            sx={{ mt: "auto" }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={3}>
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
              <Grid item xs={12} sm={3}>
                <TextInput
                  id="lastName"
                  name={"lastName"}
                  label={"Apellido"}
                  placeholder={"Ingresa tu apellido"}
                  fullWidth={true}
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.lastName && Boolean(formik.errors.lastName)
                  }
                  helperText={formik.touched.lastName && formik.errors.lastName}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
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
              <Grid item xs={12} sm={4}>
                <TextInput
                  id="birthDate"
                  name={"birthDate"}
                  label={"Fecha de nacimiento"}
                  placeholder={"Ingresa tu fecha de nacimiento"}
                  fullWidth={true}
                  value={formik.values.birthDate}
                  onChange={formik.handleChange}
                  error={formik.touched.birthDate && Boolean(formik.errors.birthDate)}
                  helperText={formik.touched.birthDate && formik.errors.birthDate}
                />
              </Grid>
              <Grid item xs={12} sm={1}>
                <TextInput
                  id="edad"
                  name={"age"}
                  label={"Edad"}
                  placeholder={"Edad"}
                  fullWidth={true}
                  value={formik.values.age}
                  onChange={formik.handleChange}
                  error={formik.touched.age && Boolean(formik.errors.age)}
                  helperText={formik.touched.age && formik.errors.age}
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextInput
                  id="dni"
                  name={"dni"}
                  label={"DNI"}
                  placeholder={"Ingresa tu DNI"}
                  fullWidth={true}
                  value={formik.values.dni}
                  onChange={formik.handleChange}
                  error={formik.touched.dni && Boolean(formik.errors.dni)}
                  helperText={formik.touched.dni && formik.errors.dni}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextInput
                  id="contact"
                  name={"contact"}
                  label={"Contacto"}
                  placeholder={"Ingresa tu Contacto"}
                  fullWidth={true}
                  value={formik.values.contact}
                  onChange={formik.handleChange}
                  error={formik.touched.contact && Boolean(formik.errors.contact)}
                  helperText={formik.touched.contact && formik.errors.contact}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextInput
                  id="address"
                  name={"address"}
                  label={"Direccion"}
                  placeholder={"Ingresa tu Dirección"}
                  fullWidth={true}
                  value={formik.values.address}
                  onChange={formik.handleChange}
                  error={formik.touched.address && Boolean(formik.errors.address)}
                  helperText={formik.touched.address && formik.errors.address}
                />
              </Grid>
            </Grid>

            <CustomBottom
              name={"Guardar"}
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
        </Box>
      </Grid>
    </Grid>
  );
};

export default View;
