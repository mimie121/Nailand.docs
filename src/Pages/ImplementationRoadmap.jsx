import { Flag, Rocket, CalendarCheck, Layers, FileText } from "lucide-react";
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
          <div className="roadmap-item">
            <Flag className="roadmap-icon" />
            <div>
              <h3>Overview</h3>
              <p>
                (Condensed from the phased roadmap — milestones include MVP
                launch, $NAI deployment, DAO formation, marketplace launch,
                Naichain mainnet and metaverse launch.)
              </p>
            </div>
          </div>
        </div>
      </section>
    </DocsPageWrapper>
  );
}
