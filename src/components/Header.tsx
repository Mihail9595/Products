import { NavLink } from "react-router-dom";

import style from "../styles/header.module.css";
const Header = () => {
  return (
    <div className={style.header}>
      <NavLink to={"/products"}>HOME</NavLink>
      <NavLink to={"/liked"}>LIKED</NavLink>
      <NavLink to={"/create-product"}>CREATE</NavLink>
    </div>
  );
};

export default Header;
