
import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Typography, IconButton ,Button} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";

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

      const handleClickOpen = () => {
        setOpen(true);
      };
      
      return (
        <Box> 
               <Button variant="outlined" onClick={onClick}>
                    View Fichaa
              </Button>   
           
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
