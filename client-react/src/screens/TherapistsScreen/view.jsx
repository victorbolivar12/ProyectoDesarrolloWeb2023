import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Typography, IconButton ,Button, Grid} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";

import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import CloseIcon from '@mui/icons-material/Close';

import { CustomBottom, TextInput } from "../../components";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment/locale/es.js";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useNavigate } from "react-router-dom";

const localizer = momentLocalizer(moment);

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};


const columns = [
  
  { field: "id", headerName: "Id", width: 250 },
  /*{
    field: "firstName",
    headerName: "Nombre del Terapeuta",
    width: 200,
  },
  {
    field: "lastName",
    headerName: "Apellido del Terapeuta",
    width: 200,
  },*/
  {
    field: "fullName",
    headerName: "Nombre completo",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 350,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
 /* {
    field: "therapy_name",
    headerName: "Nombre de la terapia",
    width: 200,
  },*/
  {
    field: "action",
    headerName: "Action",
    sortable: false,
    width: 250,
    renderCell: (params) => {
      const onClick = (e) => {
        e.stopPropagation(); // don't select this row after clicking
        return alert(JSON.stringify(params.row, null, 4));
      };

       const [open, setOpen] = React.useState(false);
      const [fullWidth, 500] = React.useState(true);
      const [maxWidth, 350] = React.useState('sm');

      const handleClickOpen = () => {
        setOpen(true);
      };
      const handleClose = () => {
        setOpen(false);
      };

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
              <div>
                <Button variant="outlined" onClick={handleClickOpen}>
                 View Ficha
                </Button>
                <BootstrapDialog
                  onClose={handleClose}
                  aria-labelledby="customized-dialog-title"
                 style={{ width: "100%",
                  maxWidth: 550,}}
                  open={open}
                >
                  <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Especialista 
                  </BootstrapDialogTitle>
                  <Grid container spacing={2}>
                    <Grid item md>
                        <DialogContent dividers>
                          <Typography gutterBottom>
                            Caracteristicas del Especialista.
                          </Typography>
                          <Typography gutterBottom>
                            Caracteristicas del Especialista 2.
                          </Typography>
                        </DialogContent>
                      </Grid>
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
                    </Grid>
                  <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                      Ok
                    </Button>
                  </DialogActions>
                </BootstrapDialog>
              </div> 
      );
    },
  },
];

const rows = [
  { id: 1, lastName: "Lowell", firstName: "George", therapy_name: "psicoanalítica" },
  {
    id: 2,
    lastName: "Turner",
    firstName: "Tina",
    therapy_name: "neuropsicológica",
  },
  {
    id: 3,
    lastName: "Oldfield",
    firstName: "Mike",
    therapy_name: "cognitivo-conductual",
  },
  {
    id: 4,
    lastName: "Atteberry",
    firstName: "Emily",
    therapy_name: "Gestalt humanista",
  },
  {
    id: 5,
    lastName: "Beaumont",
    firstName: "Susan",
    therapy_name: "racional-emotiva-conductual TREC",
  },
  { id: 6, lastName: "Teylor", firstName: "James", therapy_name: "cognitiva" },
  {
    id: 7,
    lastName: "Browning",
    firstName: "William",
    therapy_name: "neuropsicológica",
  },
  {
    id: 8,
    lastName: "Campbell",
    firstName: "Robert",
    therapy_name: "Counseling",
  },
  {
    id: 9,
    lastName: "James",
    firstName: "Oliver",
    therapy_name: "Psicoanálisis",
  },
];

const View = () => {
  return (
    <Box height={"100%"}>
      <Typography component="h1" variant="h4" fontWeight={700}>
        Terapeutas Registrados
      </Typography>
      <Box mt={3} />
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          rowSelection={false}
          pageSizeOptions={[5, 10]}
          // checkboxSelection
        />
      </div>
    </Box>
    
  );
};

export default View;
