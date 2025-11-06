import { CheckCircle, BarChart3, Shield, ClipboardList } from "lucide-react";
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
          {/* Acceptance Dimensions */}
          <div className="criteria-item">
            <ClipboardList className="criteria-icon" />
            <div>
              <h3>Acceptance Dimensions (for any deliverable)</h3>
              <ul>
                <li>
                  <strong>Functional —</strong> meets spec and user flows.
                </li>
                <li>
                  <strong>Non-functional —</strong> performance, reliability, UX
                  targets.
                </li>
                <li>
                  <strong>Security/Compliance —</strong> audits passed, KYC
                  thresholds met.
                </li>
              </ul>
            </div>
          </div>

          {/* Core KPIs */}
          <div className="criteria-item">
            <BarChart3 className="criteria-icon" />
            <div>
              <h3>Core KPIs (examples)</h3>
              <ul>
                <li>Signups and onboarding completion rate.</li>
                <li>Activation (first valued action within 7 days).</li>
                <li>DAU/WAU/MAU and DAU/MAU stickiness.</li>
                <li>Verified SkillExchanges completed and Points issued.</li>
                <li>Points→$NAI conversion health and transaction volume.</li>
                <li>
                  DAO participation (voting rates), fraud/PoP anomaly rate,
                  audit findings.
                </li>
              </ul>
            </div>
          </div>

          {/* Pilot Targets */}
          <div className="criteria-item">
            <CheckCircle className="criteria-icon" />
            <div>
              <h3>Pilot Targets (90 days)</h3>
              <p>
                1,000 signups; 60% onboarding completion; 100 verified
                SkillExchanges; DAU/WAU ≥ 10%.
              </p>
            </div>
          </div>

          {/* Reporting */}
          <div className="criteria-item">
            <Shield className="criteria-icon" />
            <div>
              <h3>Reporting</h3>
              <p>
                Realtime dashboard + daily/weekly/monthly reports; use analytics
                + on-chain data; NaiBot flags anomalies for review.
              </p>
            </div>
          </div>
        </div>
      </section>
    </DocsPageWrapper>
  );
}
