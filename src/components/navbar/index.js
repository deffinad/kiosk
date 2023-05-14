import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "./../../assets/logo.png";
import LogoWhite from "./../../assets/logo-white.png";
import { motion, useScroll } from "framer-motion";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Menu from "../menu";
import { useEffect } from "react";

const Navbar = ({ children }) => {
  const navigate = useNavigate()
  const [openMenu, setOpenMenu] = useState(false)

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu)
  }

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-left" onClick={handleOpenMenu}>
          <FontAwesomeIcon icon={openMenu ? faXmark : faBars} color={!openMenu ? "#0e204d" : '#fff'} />
        </div>

        <div className="navbar-brand">
          <img src={!openMenu ? Logo : LogoWhite} />
        </div>
      </nav>

      {openMenu ? (
        <Menu />
      ) :
        children
      }
    </div>
  );
};

export default Navbar;
