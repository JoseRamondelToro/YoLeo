import React from "react";
import MenuLateral from "./MenuLateral";
import ContenidoCuenta from "./ContenidoCuenta";

const Account = () => {
  return (
    <div style={{ display: "flex" }}>
      <MenuLateral />
      <ContenidoCuenta />
    </div>
  );
};

export default Account;
