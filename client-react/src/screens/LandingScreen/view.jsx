import * as React from "react";
import { Box, Typography } from "@mui/material";
import bg from "../../assets/bg.png";
import { MuiAppBar, CustomBottom, Link } from "../../components";
const View = ({}) => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundColor: (t) =>
          t.palette.mode === "light" ? t.palette.grey[50] : t.palette.grey[900],
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "absolute",
      }}
    >
      <Box
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.6)",
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
      >
        <MuiAppBar />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            padding: "50px",
          }}
        >
          <Typography variant="h3" textAlign={"center"} gutterBottom>
            {"Bienvenidos a nuestra clinica"}
          </Typography>
          <Typography
            variant="subtitle1"
            textAlign={"center"}
            fontSize={20}
            gutterBottom
          >
            brindamos ayuda profesional a niños, adolescentes y adultos
          </Typography>
          <Link
            href={"/about-us"}
            variant="subtitle2"
            color="inherit"
            underline="none"
          >
            <CustomBottom
              name={"Sobre Nosotros"}
              fullWidth
              variant="contained"
              type="submit"
              sx={{
                width: "250px",
                borderRadius: "6px",
                mt: 3,
                backgroundImage:
                  "linear-gradient(180deg, #8AE0FB 0%, #3371EB 100%)",
              }}
            />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default View;
