import { Link } from "react-router-dom";
import "./SearchResults.css";

export default function SearchResults({ searchTerm, results, onClose }) {
  if (!searchTerm.trim()) return null;

  return (
    <div className="search-dropdown">
      {results.length > 0 ? (
        results.map((page, i) => (
          <Link
            key={i}
            to={page.path}
            className="search-result-item"
            onClick={onClose}
          > <strong className="header-styles">{page.header}</strong>
            <strong>{page.name}</strong>
            <p>{page.content}</p>
          </Link>
        ))
      ) : (
        <p className="no-results">No results for “{searchTerm}”</p>
      )}
    </div>
  );
}
