import React from "react"
import { NavLink } from "react-router-dom"

const Header = () => (
  <header>
    <h1>Expenzy</h1>
    <NavLink
      to="/"
      className={({ isActive }) => (isActive ? "active" : "inactive")}
    >
      Dashboard
    </NavLink>
    <NavLink
      to="/create"
      className={({ isActive }) => (isActive ? "active" : "inactive")}
    >
      Create
    </NavLink>
    <NavLink
      to="/help"
      className={({ isActive }) => (isActive ? "active" : "inactive")}
    >
      Help
    </NavLink>
  </header>
)

export default Header
