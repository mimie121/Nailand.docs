import SidebarItem from "./SidebarItem";
import docsData from "../data/docsData";
import "./Sidebar.css";
import { useEffect } from "react";

export default function Sidebar({ open, setOpen }) {
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setOpen(true); 
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setOpen]);

  return (
    <aside className={`sidebar ${open ? "open" : ""}`}>
      <div className="sidebar-header">
        <h2 className="logo">NaiLAND Docs</h2>
        <button className="close-btn" onClick={() => setOpen(false)}>
          ✕
        </button>
      </div>

      <nav className="sidebar-nav">
        {docsData.map((page, i) => (
          <SidebarItem
            key={i}
            name={page.name}
            path={page.path}
            onClick={() => {
              setOpen(false);
            }}
          />
        ))}
      </nav>
    </aside>
  );
}
