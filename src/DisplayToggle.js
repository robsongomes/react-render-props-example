import React from "react";
import Toggle from "./ToggleRenderChild";

const DisplayToggle = () => (
  <Toggle>
    {({ on, hide }) => (
      <div>
        {on ? <h1>Message</h1> : ""}
        <button onClick={hide}>Hide/Show</button>{" "}
      </div>
    )}
  </Toggle>
);

export default DisplayToggle;
