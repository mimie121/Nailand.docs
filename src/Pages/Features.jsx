import { useEffect, useState } from "react";
import "./Features.css";
import DocsPageWrapper from "../Components/DocsPageWrapper";
import { Map } from "lucide-react";

export default function Features() {
  const [activeSection, setActiveSection] = useState("");

  const sections = [
    { id: "phase1", title: "Phase 1: Onboarding & Foundational Engagement" },
    { id: "phase2", title: "Phase 2: Digital Hubs, Streaming & Collaboration" },
    { id: "phase3", title: "Phase 3: Tokenization & Internal Exchange" },
    { id: "phase4", title: "Phase 4: Marketplaces & Region Governance" },
    { id: "phase5", title: "Phase 5: Global Scaling, RWA & Metaverse" },
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -60% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    }, observerOptions);

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <DocsPageWrapper
      title="Features & Phased Roadmap"
      className="features-docs-wrapper"
      icon={Map}
    >
      <div className="features-page">
        <aside className="features-sidebar">
          <ul>
            {sections.map((section) => (
              <li
                key={section.id}
                className={activeSection === section.id ? "active" : ""}
                onClick={() => scrollToSection(section.id)}
              >
                {section.title}
              </li>
            ))}
          </ul>
        </aside>

        <div className="features-content">
          <section id="phase1">
            <h2>Phase 1: Onboarding & Foundational Engagement (Months 1–3)</h2>
            <p>
              Deliverables: Signup, Pioneer’s Pledge, interest tags, mini-groups → hubs, 
              Scan Chat, NaiBot MVP, Points dashboard. Pilot with no-code / Glide for 
              quick validation.
            </p>
          </section>

          <section id="phase2">
            <h2>Phase 2: Digital Hubs, Streaming & Collaboration (Months 4–6)</h2>
            <p>
              Deliverables: Hub auto-upgrades, multi-channel forums, Kanban project tools,
              streaming classrooms, educator network, NaiBot collaboration recommendations.
            </p>
          </section>

          <section id="phase3">
            <h2>Phase 3: Tokenization & Internal Exchange (Months 7–9)</h2>
            <p>
              Deliverables: $NAI ERC-20 on L2, biannual Points→$NAI conversion engine, 
              internal USDT↔$NAI exchange, wallet integrations, security audits, staking.
            </p>
          </section>

          <section id="phase4">
            <h2>Phase 4: Marketplaces & Region Governance (Months 10–12)</h2>
            <p>
              Deliverables: Skill-Exchange & E-commerce marketplaces, Region DAO formation, 
              on-chain voting and treasury dashboards, vendor onboarding.
            </p>
          </section>

          <section id="phase5">
            <h2>Phase 5: Global Scaling, RWA & Metaverse (Months 13–24)</h2>
            <p>
              Deliverables: RWA tokenization frameworks, 3D Metaverse territories, 
              VR/AR interfaces, Naichain migration, external exchange listings, 
              global launch events.
            </p>
          </section>
        </div>
      </div>
    </DocsPageWrapper>
  );
}
