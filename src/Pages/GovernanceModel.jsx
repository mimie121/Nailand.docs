import { Users, Globe2, Landmark, FileText, GitBranch } from "lucide-react";
import DocsPageWrapper from "../Components/DocsPageWrapper";
import "./GovernanceModel.css";

export default function GovernanceModel() {
  return (
    <DocsPageWrapper title="Governance Model" icon={FileText}>
      <section className="governance-model">

        <div className="governance-list">

          <div className="governance-item">
            <Users className="governance-icon" />
            <div>
              <h3>Executive Council (early phases)</h3>
              <p>Visioneer + leadership team for operational delivery.</p>
            </div>
          </div>

          <div className="governance-item">
            <Globe2 className="governance-icon" />
            <div>
              <h3>Region DAOs</h3>
              <p>Local governance for hub rules, small grants, and region treasury usage.</p>
            </div>
          </div>

          <div className="governance-item">
            <Landmark className="governance-icon" />
            <div>
              <h3>Global DAO</h3>
              <p>Oversees major decisions ( inline with the vision and culture of NaiLAND ).</p>
            </div>
          </div>

          <div className="governance-item">
            <GitBranch className="governance-icon" />
            <div>
              <h3>Smart Contracts</h3>
              <p>On-chain voting, treasury disbursement and execution where applicable.</p>
            </div>
          </div>

          <div >
        
            <div>
              <p className="closing">Governance milestones and transfer of authority
              are programmed into the roadmap.</p>
            </div>
          </div>

        </div>

      </section>
    </DocsPageWrapper>
  );
}
