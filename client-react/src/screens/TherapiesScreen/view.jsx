import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Typography, IconButton } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";

const columns = [
  { field: "id", headerName: "Id", width: 250 },
  {
    field: "firstName",
    headerName: "Nombre del paciente",
    width: 200,
  },
  {
    field: "lastName",
    headerName: "Apellido del paciente",
    width: 200,
  },
  {
    field: "fullName",
    headerName: "Nombre completo",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 200,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
  {
    field: "therapy_name",
    headerName: "Nombre de la terapia",
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
  { id: 1, lastName: "Snow", firstName: "Jon", therapy_name: "psicoanalítica" },
  {
    id: 2,
    lastName: "Lannister",
    firstName: "Cersei",
    therapy_name: "neuropsicológica",
  },
  {
    id: 3,
    lastName: "Lannister",
    firstName: "Jaime",
    therapy_name: "cognitivo-conductual",
  },
  {
    id: 4,
    lastName: "Stark",
    firstName: "Arya",
    therapy_name: "Gestalt humanista",
  },
  {
    id: 5,
    lastName: "Targaryen",
    firstName: "Daenerys",
    therapy_name: "racional-emotiva-conductual TREC",
  },
  { id: 6, lastName: "Melisandre", firstName: null, therapy_name: "cognitiva" },
  {
    id: 7,
    lastName: "Clifford",
    firstName: "Ferrara",
    therapy_name: "neuropsicológica",
  },
  {
    id: 8,
    lastName: "Frances",
    firstName: "Rossini",
    therapy_name: "Counseling",
  },
  {
    id: 9,
    lastName: "Roxie",
    firstName: "Harvey",
    therapy_name: "Psicoanálisis",
  },
];

const View = () => {
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
          pageSizeOptions={[5, 10]}
          // checkboxSelection
        />
      </div>
    </Box>
  );
};

export default View;
