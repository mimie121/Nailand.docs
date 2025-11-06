import {
  Flag,
  Rocket,
  CalendarCheck,
  Layers,
  FileText,
  Shield,
} from "lucide-react";
import DocsPageWrapper from "../Components/DocsPageWrapper";
import "./ImplementationRoadmap.css";

export default function ImplementationRoadmap() {
  return (
    <DocsPageWrapper
      title="Implementation Roadmap & Milestones"
      icon={FileText}
    >
      <section className="implementation-roadmap">
        <div className="roadmap-list">
          {/* Overview */}
          <div className="roadmap-item">
            <Flag className="roadmap-icon" />
            <div>
              <h3>High-level timeline</h3>
              <ul>
                <li>
                  <strong>Pre-launch (Month 0):</strong> legal, infra, hires,
                  pilot plan.
                </li>
                <li>
                  <strong>Phase 1 (M1–3):</strong> MVP signup, Pioneer’s Pledge,
                  Scan Chat, Points dashboard, pilot.
                </li>
                <li>
                  <strong>Phase 2 (M4–6):</strong> Hubs, streaming, Kanban,
                  NaiBot collaboration.
                </li>
                <li>
                  <strong>Phase 3 (M7–9):</strong> $NAI ERC-20 (L2), testnet
                  Points→$NAI engine, audits.
                </li>
                <li>
                  <strong>Phase 4 (M10–12):</strong> SkillExchange marketplace,
                  Region DAOs, vendor onboarding.
                </li>
                <li>
                  <strong>Phase 5 (M13–24):</strong> Naichain migration,
                  metaverse pilots, RWA work, listings.
                </li>
              </ul>
            </div>
          </div>

          {/* Milestones & Owners */}
          <div className="roadmap-item">
            <Rocket className="roadmap-icon" />
            <div>
              <h3>Milestones & Owners</h3>
              <p>
                Each phase has a clear milestone owner (Product, Engineering,
                Community, Legal, Security) and an acceptance gate before moving
                to the next phase.
              </p>
            </div>
          </div>

          {/* Cross-cutting Work */}
          <div className="roadmap-item">
            <Layers className="roadmap-icon" />
            <div>
              <h3>Cross-cutting Work</h3>
              <p>
                Security & audits, KYC/AML, community growth, monitoring, and
                ops run continuously across all phases.
              </p>
            </div>
          </div>

          {/* Risks & Mitigations */}
          <div className="roadmap-item">
            <Shield className="roadmap-icon" />
            <div>
              <h3>Top Risks & Mitigations</h3>
              <ul>
                <li>
                  <strong>Low adoption →</strong> ambassador programs and
                  simplified onboarding.
                </li>
                <li>
                  <strong>Regulatory delay →</strong> phased walletless rollout
                  and legal counsel.
                </li>
                <li>
                  <strong>Sybil/gaming →</strong> manual checks in pilot then
                  NaiBot PoP.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </DocsPageWrapper>
  );
}
