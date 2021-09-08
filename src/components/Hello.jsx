import React from "react";

function Hello({ name, children }) {
  return (
    <div>
      <div>Привет, {name}{children}</div>
    </div>
  )
}

export default Hello;