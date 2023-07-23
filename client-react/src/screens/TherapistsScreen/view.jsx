import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Typography, IconButton } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";

import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

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
    width: 200,
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
    renderCell: (params) => {
      const onClick = (e) => {
        e.stopPropagation(); // don't select this row after clicking
        return alert(JSON.stringify(params.row, null, 4));
      };

      const handleClickOpen = () => {
          setOpen(true);
      };

      return (
        <Box>
          <Button variant="outlined" onClick={handleClickOpen}>
          Open dialog
          </Button>
          <IconButton onClick={handleClickOpen}>
            <Edit />
          </IconButton>
          <IconButton onClick={onClick}>
            <Delete />
          </IconButton>
        </Box>
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
  { id: 6, lastName: "Melisandre", firstName: null, therapy_name: "cognitiva" },
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
