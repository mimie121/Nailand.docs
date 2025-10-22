import { AlertTriangle, Globe, HandCoins, Users, Lock, FileText } from "lucide-react";
import DocsPageWrapper from "../Components/DocsPageWrapper";
import "./ProblemStatement.css";

export default function ProblemStatement() {
  return (
    <DocsPageWrapper title="Problem Statement" icon={FileText}>
    <section className="problem-statement">
     

      <p>
        Modern digital platforms concentrate attention, control, and economic
        value into centralized entities. NaiLAND recognizes the following key
        problems:
      </p>

      <div className="problem-list">
        <div className="problem-item">
          <Globe className="problem-icon" size={24} />
          <div>
            <h3>Digital Marginalization</h3>
            <p>
              Creators and communities—especially in underbanked regions—receive
              little of the wealth their activity generates.
            </p>
          </div>
        </div>

        <div className="problem-item">
          <HandCoins className="problem-icon" size={24} />
          <div>
            <h3>Economic Inequity</h3>
            <p>
              Monetization and marketplace fees exclude many creators. Access to
              freelancing or patronage markets is often gatekept by capital and
              reputation.
            </p>
          </div>
        </div>

        <div className="problem-item">
          <Users className="problem-icon" size={24} />
          <div>
            <h3>Fragmented Collaboration</h3>
            <p>
              Interest groups and micro-communities lack unified tools to launch
              projects, exchange skills, and scale effectively.
            </p>
          </div>
        </div>

        <div className="problem-item">
          <Lock className="problem-icon" size={24} />
          <div>
            <h3>Barriers to Web3 Adoption</h3>
            <p>
              Token complexity, wallet friction, and regulatory uncertainty slow
              down participation and limit accessibility.
            </p>
          </div>
        </div>
      </div>

      <p className="problem-conclusion">
        <strong>NaiLAND</strong> addresses these challenges by making skills and
        verified contribution first-class currencies, introducing low-friction
        onboarding, and enabling community-controlled economic flows.
      </p>
    </section>
    </DocsPageWrapper>
  );
}
