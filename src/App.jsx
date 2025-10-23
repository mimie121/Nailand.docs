import { useState, useEffect, useRef } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import SearchBar from "./Components/SearchBar";
import SearchResults from "./Components/SearchResults";
import docsData from "./data/docsData";
import ExecutiveSummary from "./Pages/ExecutiveSummary";
import VisionMissionValues from "./Pages/VisionMissionValues";
import ProblemStatement from "./Pages/ProblemStatement";
import OurSolution from "./Pages/OurSolution";
import CorePrinciples from "./Pages/CorePrinciples";
import PlatformArchitecture from "./Pages/PlatformArchitecture";
import TokenomicsPage from "./Pages/TokenomicsPage";
import Features from "./Pages/Features";
import GovernanceModel from "./Pages/GovernanceModel";
import CommunityPartnerships from "./Pages/CommunityPartnerships";
import SecurityCompliance from "./Pages/SecurityCompliance";
import ImplementationRoadmap from "./Pages/ImplementationRoadmap";
import AcceptanceCriteria from "./Pages/AcceptanceCriteria";
import Conclusion from "./Pages/Conclusion";
import Addendum from "./Pages/Addendum";

import "./App.css";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const searchRef = useRef(null);

  useEffect(() => {
    if (searchTerm.trim()) {
      const filtered = docsData.filter(
        (page) =>
          page.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          page.content.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredResults(filtered);
    } else {
      setFilteredResults([]);
    }
  }, [searchTerm]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchTerm("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <Router>
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

      <main className="content">
        <header className="topbar">
          <button
            className="menu-btn"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            ☰
          </button>

          <div className="searchbar-wrapper" ref={searchRef}>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            {searchTerm && (
              <SearchResults
                searchTerm={searchTerm}
                results={filteredResults}
                onClose={() => setSearchTerm("")}
              />
            )}
          </div>
        </header>

        <section className="page">
          <Routes>
            <Route path="/" element={<ExecutiveSummary />} />
            <Route path="/VisionMissionValues" element={<VisionMissionValues />} />
            <Route path="/ProblemStatement" element={<ProblemStatement />} />
            <Route path="/OurSolution" element={<OurSolution />} />
            <Route path="/CorePrinciples" element={<CorePrinciples />} />
            <Route path="/PlatformArchitecture" element={<PlatformArchitecture />} />
            <Route path="/TokenomicsPage" element={<TokenomicsPage />} />
            <Route path="/Features" element={<Features />} />
            <Route path="/GovernanceModel" element={<GovernanceModel />} />
            <Route path="/CommunityPartnerships" element={<CommunityPartnerships />} />
            <Route path="/SecurityCompliance" element={<SecurityCompliance />} />
            <Route path="/ImplementationRoadmap" element={<ImplementationRoadmap />} />
            <Route path="/AcceptanceCriteria" element={<AcceptanceCriteria />} />
            <Route path="/Conclusion" element={<Conclusion />} />
            <Route path="/Addendum" element={<Addendum />} />
          </Routes>
        </section>
      </main>
    </Router>
  );
}
