import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  InputBase,
  alpha,
  styled,
  Box,
  InputAdornment,
  IconButton,
  FormHelperText,
} from "@mui/material";
import { Link } from "../../components";
import { Visibility, VisibilityOff } from "@mui/icons-material";

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

export const TextInputPassword = ({ helperText, fullWidth, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  return (
    <FormControl variant="standard" fullWidth {...props}>
      <Box sx={{ display: "flex", flexDirection: "row", mb: "3px" }}>
        <InputLabel sx={{ fontSize: 24 }} shrink htmlFor="bootstrap-input">
          {props.label}
        </InputLabel>

        {props.link ? (
          <Link
            href="#"
            color="inherit"
            underline="none"
            variant="subtitle2"
            fontSize={12}
            ml={"auto"}
            mt={"3px"}
          >
            ¿Has olvidado tu contraseña?
          </Link>
        ) : (
          <Box height={20} mt={"1px"} />
        )}
      </Box>

      <BootstrapInput
        id="bootstrap-input"
        type={showPassword ? "text" : "password"}
        fullWidth
        {...props}
        endAdornment={
          <InputAdornment position="end">
            <IconButton onClick={handleClickShowPassword} edge="end">
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
      <FormHelperText {...props}>{helperText}</FormHelperText>
    </FormControl>
  );
};
