import React, { useState } from "react";

function Header(props) {
  return (
    <div>
      <h1 className="text-center text-white py-2">{props.name}</h1>
    </div>
  );
}

export default Header;
