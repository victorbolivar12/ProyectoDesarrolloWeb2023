import * as React from "react";
import {
  FormControl,
  InputLabel,
  InputBase,
  alpha,
  styled,
  FormHelperText,
} from "@mui/material";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 6,
    position: "relative",
    backgroundColor: theme.palette.mode === "light" ? "#f4f4f4" : "#1A2027",
    border: "1px solid",
    borderColor: theme.palette.mode === "light" ? "#E0E3E7" : "#2D3843",
    fontSize: 16,
    padding: "10px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

export const TextInput = ({ helperText, fullWidth, ...props }) => {
  return (
    <FormControl variant="standard" fullWidth {...props}>
      <InputLabel sx={{ fontSize: 24 }} shrink htmlFor={props.id}>
        {props.label}
      </InputLabel>
      <BootstrapInput fullWidth {...props} />
      <FormHelperText {...props}>{helperText}</FormHelperText>
    </FormControl>
  );
};
