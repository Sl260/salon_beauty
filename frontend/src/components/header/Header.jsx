import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

const Header = () => {
  const HeaderWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 100%;
    background-color: white;
    position: sticky;
    top: 0;
    right: 0;
    left: 0;
    padding: 2rem 0;
  `;

  const NavLink = styled(Link)`
    font-size: bold;
    text-decoration: none;
    color: inherit;
  `;

  const HomeLink = styled(Link)`
    font-size: bold;
    text-decoration: none;
    margin-left: 8rem;
    color: inherit;
  `;

  const NavLinks = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 4rem;
    color: black;
    margin-right: 8rem;
  `;

  const Logo = styled.img`
    width: 8rem;
    margin-left: 8rem;
  `;

  const [token, setToken] = useState(localStorage.getItem("token"));
  const navigate = useNavigate();

  console.log("tok", token);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/login", { replace: true });
  };
  useEffect(() => {}, [token]);

  return (
    <HeaderWrapper>
      <HomeLink to="/">Accueil</HomeLink>
      <Logo src="/" alt="Logo" />
      <NavLinks>
        <NavLink to="/service">Service</NavLink>
        <NavLink to="/about-us">About us</NavLink>
        {token && <NavLink to="/appointments">Appointments</NavLink>}
        {(!token && <NavLink to="/login">Login</NavLink>) || (
          <NavLink onClick={() => handleLogout()}>Logout</NavLink>
        )}
      </NavLinks>
    </HeaderWrapper>
  );
};

export default Header;
