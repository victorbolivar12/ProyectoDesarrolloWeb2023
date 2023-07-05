import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Typography, IconButton } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";

const columns = [
  { field: "username", headerName: "Username", width: 250 },
  {
    field: "firstName",
    headerName: "Primer nombre",
    width: 200,
    valueGetter: (params) => `${params.row.person?.name || ""}`,
  },
  {
    field: "lastName",
    headerName: "Primer apellido",
    width: 200,
    valueGetter: (params) => `${params.row.person?.lastName || ""}`,
  },
  {
    field: "fullName",
    headerName: "Nombre completo",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 200,
    valueGetter: (params) =>
      `${params.row.person?.firstName || ""} ${
        params.row.person?.lastName || ""
      }`,
  },
  {
    field: "entry_date",
    headerName: "Fecha de creación",
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
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

const View = ({ data }) => {
  return (
    <Box height={"100%"}>
      <Typography component="h1" variant="h4" fontWeight={700}>
        Usuarios Registrados
      </Typography>
      <Box mt={3} />
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={data}
          columns={columns}
          getRowId={(row) => row.username}
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
