import React from "react";
import AcUnitIcon from "@mui/icons-material/AcUnit";

export default function Header(props) {
  return (
    <header>
      <h1>
        <AcUnitIcon />
        {props.siteName}
      </h1>
    </header>
  );
}
