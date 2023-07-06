import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Typography, IconButton } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";

const columns = [
  { field: "id", headerName: "ID", width: 200 },
  { field: "quotes", headerName: "Citas", width: 200 },
  { field: "dateHour", headerName: "Fecha_Hora", type: "date", width: 200 },
  { field: "amount", headerName: "Monto", type: "number", width: 200 },
  { field: "observations", headerName: "Observaciones", width: 200},
  { field: "status", headerName: "Estado", width: 200},
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
  { id: 1, quotes: "primera cita", dateHour: new Date('December 17, 2023 03:24:00'), amount: 90.50, observations: "ninguno", status: "pago"},
  { id: 1, quotes: "segunda cita", dateHour: new Date('July 08, 2023 03:24:00'), amount: 50.50, observations: "ninguno", status: "pago"},
];

function View({ }) {
  return (
    <Box height={"100%"}>
      <Typography component="h1" variant="h4" fontWeight={700}>
       Pagos Registrados
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