import { Box } from "@mui/material";
import { InfinitySpin } from "react-loader-spinner";
export const Loader = () => {
  return (
    <Box
      style={{
        background: "#06020A",
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <InfinitySpin width="200" color="#00B2F2" />
    </Box>
  );
};
