import * as React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { CustomBottom, TextInput } from "../../components";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment/locale/es.js";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useNavigate } from "react-router-dom";

const localizer = momentLocalizer(moment);

const View = ({}) => {
  const navigate = useNavigate();

  //array de eventos
  const myEventsList = [
    {
      title: "Cita",
      start: new Date("2023-07-18 10:22:00"),
      end: new Date("2023-07-18 10:42:00"),
    },
    {
      title: "Cita",
      start: new Date("2023-07-05 12:22:00"),
      end: new Date("2023-07-05 13:42:00"),
    },
  ];
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item md>
          <Calendar
            localizer={localizer}
            culture="es-Es"
            startAccessor="start"
            endAccessor="end"
            events={myEventsList}
            style={{ height: "85vh" }}
            messages={{
              next: "Sig",
              previous: "Ant",
              today: "Hoy",
              month: "Mes",
              week: "Semana",
              day: "Día",
            }}
          />
        </Grid>
        <Grid item md>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              p: 5,
              border: "1px solid grey",
              borderRadius: 5,
            }}
          >
            <Typography fontSize={22} mb={10} fontWeight={700}>
              {"Registra una cita"}
            </Typography>
            <Box
            // component="form"
            // onSubmit={formik.handleSubmit}
            // sx={{ mt: "auto" }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextInput
                    id="name"
                    name={"name"}
                    label={"Nombre"}
                    placeholder={"Ingresa tu nombre"}
                    fullWidth={true}
                    // value={formik.values.name}
                    // onChange={formik.handleChange}
                    // error={formik.touched.name && Boolean(formik.errors.name)}
                    // helperText={formik.touched.name && formik.errors.name}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextInput
                    id="lastName"
                    name={"lastName"}
                    label={"Apellido"}
                    placeholder={"Ingresa tu apellido"}
                    fullWidth={true}
                    // value={formik.values.lastName}
                    // onChange={formik.handleChange}
                    // error={
                    //   formik.touched.lastName && Boolean(formik.errors.lastName)
                    // }
                    // helperText={
                    //   formik.touched.lastName && formik.errors.lastName
                    // }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextInput
                    id="date"
                    name={"date"}
                    type={"date"}
                    label={"Fecha de la cita"}
                    placeholder={"Ingresa la fecha"}
                    fullWidth={true}
                    // value={formik.values.lastName}
                    // onChange={formik.handleChange}
                    // error={
                    //   formik.touched.lastName && Boolean(formik.errors.lastName)
                    // }
                    // helperText={
                    //   formik.touched.lastName && formik.errors.lastName
                    // }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextInput
                    id="reason"
                    name={"reason"}
                    label={"Motivo de la consulta"}
                    placeholder={"Ingresa tu motivo"}
                    multiline
                    fullWidth={true}
                    // value={formik.values.email}
                    // onChange={formik.handleChange}
                    // error={formik.touched.email && Boolean(formik.errors.email)}
                    // helperText={formik.touched.email && formik.errors.email}
                  />
                </Grid>
              </Grid>

              <CustomBottom
                name={"Registrar cita"}
                fullWidth
                variant="contained"
                onClick={() => {
                  navigate("/pay-appointment", { replace: true });
                }}
                // type="submit"
                sx={{
                  mt: 10,
                  mb: 2,
                  borderRadius: "40px",
                  backgroundImage:
                    "linear-gradient(180deg, #8AE0FB 0%, #3371EB 100%)",
                }}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default View;
