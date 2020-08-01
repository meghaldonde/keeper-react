import React from "react";
import HighlightIcon from "@material-ui/icons/Highlight";

function Heading() {
  const appName = "Keeper";

  return (
    <header>
      <h1>
        <HighlightIcon />
        {appName}
      </h1>
    </header>
  );
}

export default Heading;
