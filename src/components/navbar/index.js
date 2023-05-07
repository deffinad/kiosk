import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "./../../assets/logo.png";
import LogoWhite from "./../../assets/logo-white.png";
import { motion, useScroll } from "framer-motion";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Menu from "../menu";
import { useEffect } from "react";

const Navbar = ({ theme, activeMenu, children }) => {
  const navigate = useNavigate()
  const [openMenu, setOpenMenu] = useState(false)

  useEffect(() => {
    setOpenMenu(activeMenu)
  }, [activeMenu])

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu)

    openMenu ? navigate('/menu') : navigate(-1)
  }

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-left" onClick={handleOpenMenu}>
          <FontAwesomeIcon icon={activeMenu ? faXmark : faBars} color={theme === 'dark' ? "#0e204d" : '#fff'} />
        </div>

        <div className="navbar-brand">
          <img src={theme === 'dark' ? Logo : LogoWhite} />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
