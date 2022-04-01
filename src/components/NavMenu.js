import React from "react";
import { NavLink } from "react-router-dom";

export default function NavMenu() {
  return (
    <div>
      <ul>
          
        <li>
          <NavLink to="/">home</NavLink>
        </li>

        <li>
          <NavLink to="/about">about</NavLink>
        </li>

        <li>
          <NavLink to="/projects">projects</NavLink>
        </li>

        <li>
          <NavLink to="/contacts">contact</NavLink>
        </li>

      </ul>
    </div>
  );
}
