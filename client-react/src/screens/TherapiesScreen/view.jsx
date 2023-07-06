import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Typography, IconButton } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";

const columns = [
  { field: "id", headerName: "ID", width: 200 },
  { field: "treatmentType", headerName: "Tipo de Tratamiento", width: 200 },
  { field: "psychologist", headerName: "Psicólogo", width: 200 },
  { field: "therapist", headerName: "Terapeuta", width: 200 },
  {
    field: "therapyDate",
    headerName: "Fecha Terapia",
    type: "date",
    width: 200,
  },
  {
    field: "results",
    headerName: "Resultados",
    width: 200,
  },
  {
    field: "observations",
    headerName: "Observaciones",
    width: 200,
  },
  {
    field: "action",
    headerName: "Action",
    sortable: false,
    renderCell: (params) => {
      const onClick = (e) => {
        e.stopPropagation(); // don't select this row after clicking
        return alert(JSON.stringify(params.row, null, 4));
      };

      return (
        <Box>
          <IconButton onClick={onClick}>
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
  { id: 1, treatmentType: "terapia", psychologist: "Jon kele", therapist: "Maria Navarro",  
  therapyDate: new Date(1995, 11, 17), results: "Necesita más terapia", observations: "Ninguna"},
  { id: 2, treatmentType: "terapia", psychologist: "Jesús Parra", therapist: "Veronica Navas",  
  therapyDate: new Date(1995, 11, 17), results: "Necesita más terapia", observations: "Ninguna"},
];

function View({ }) {
  return (
    <Box height={"100%"}>
      <Typography component="h1" variant="h4" fontWeight={700}>
        Terapias Registradas
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
          pageSizeOptions={[5, 10]} />
      </div>
    </Box>
  );
}

export default View;
