import { NavLink } from "react-router-dom";
import "./SidebarItem.css";

export default function SidebarItem({ name, path, onClick }) {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `sidebar-item ${isActive ? "active" : ""}`
      }
      onClick={onClick}
    >
      {name}
    </NavLink>
  );
}
