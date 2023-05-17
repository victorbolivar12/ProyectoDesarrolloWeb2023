import { Link as MuiLink } from "@mui/material";
import { Link as ReactRouterLink } from "react-router-dom";

import React from "react";

export const Link = (props) => {
  return (
    <MuiLink {...props} component={ReactRouterLink} to={props.href ?? "#"} />
  );
};
