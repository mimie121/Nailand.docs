import { CheckCircle } from "lucide-react";
import DocsPageWrapper from "../Components/DocsPageWrapper";
import "./AcceptanceCriteria.css";

export default function AcceptanceCriteria() {
  return (
    <DocsPageWrapper
      title="Acceptance Criteria & Key Metrics"
      icon={CheckCircle}
    >
      <section className="acceptance-criteria">
        <div className="criteria-list">
          <div className="criteria-item">
            <CheckCircle className="criteria-icon" />
            <div>
              <h3>Core KPIs</h3>
              <p>
                Core KPIs include signups, onboarding completion rate, active hub
                metrics (DAU/WAU), verified SkillExchange completions, Points
                issuance, Points→$NAI conversion health, and governance
                participation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </DocsPageWrapper>
  );
}
