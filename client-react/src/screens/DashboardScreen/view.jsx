import * as React from "react";
import { Box, Grid } from "@mui/material";
import  { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment/locale/es.js";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const View = ({}) => {
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
      <Grid container>
        <Grid item md>
          <Calendar
            localizer={localizer}
            culture="es-Es"
            startAccessor="start"
            endAccessor="end"
            events={myEventsList}
            style={{ height: 600 }}
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
        <Grid item md></Grid>
      </Grid>
    </Box>
  );
};

export default View;
