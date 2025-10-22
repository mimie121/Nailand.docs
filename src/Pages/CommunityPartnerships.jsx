import { Users, GraduationCap, Cpu, Coins, Building2, Handshake, FileText } from "lucide-react";
import DocsPageWrapper from "../Components/DocsPageWrapper";
import "./CommunityPartnerships.css";

export default function CommunityPartnerships() {
  return (
    <DocsPageWrapper title="Community & Partnerships" icon={FileText}>
      <section className="community-partnerships">

        <div className="partnerships-list">

          <div className="partnerships-item">
            <GraduationCap className="partnerships-icon" />
            <div>
              <h3>Education Partners</h3>
              <p>streaming educators, certification bodies and bootcamps.</p>
            </div>
          </div>

          <div className="partnerships-item">
            <Cpu className="partnerships-icon" />
            <div>
              <h3>Tech Alliances</h3>
              <p>cloud providers, blockchain protocols (Polygon, ConsenSys), and developer tools.</p>
            </div>
          </div>

          <div className="partnerships-item">
            <Coins className="partnerships-icon" />
            <div>
              <h3>Investment & Accelerator Partners</h3>
              <p>venture and DeFi networks for liquidity and scaling.</p>
            </div>
          </div>

          <div className="partnerships-item">
            <Building2 className="partnerships-icon" />
            <div>
              <h3>Real-World Partners</h3>
              <p>universities, NGOs, incubators for talent and verification channels.</p>
            </div>
          </div>

          <div>
            
            <div>
              
              <p className="closing"> Community growth relies on ambassadors, bootstrap grants, barter challenge events and local incubator partnerships.</p>
            </div>
          </div>

        </div>

      </section>
    </DocsPageWrapper>
  );
}
