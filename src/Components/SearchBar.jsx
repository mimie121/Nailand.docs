import { useRef, useEffect, useState } from "react";
import { FiSearch, FiX } from "react-icons/fi";
import "./SearchBar.css";

export default function SearchBar({ searchTerm, setSearchTerm }) {
  const inputRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);


  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  useEffect(() => {
    const handleShortcut = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleShortcut);
    return () => window.removeEventListener("keydown", handleShortcut);
  }, []);

  return (
    <div className="search-container">
      <FiSearch className="search-icon" />
      <input
        ref={inputRef}
        type="text"
        className="search-input"
        placeholder={isMobile ? "Search docs..." : "Search docs... (Ctrl + K)"}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {searchTerm && (
        <button className="clear-btn" onClick={() => setSearchTerm("")}>
          <FiX />
        </button>
      )}
    </div>
  );
}
