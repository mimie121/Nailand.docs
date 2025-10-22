import { Shield, UserCheck, FileSearch, Scale, FileText } from "lucide-react";
import DocsPageWrapper from "../Components/DocsPageWrapper";
import "./SecurityCompliance.css";

export default function SecurityCompliance() {
  return (
    <DocsPageWrapper title="Security, Compliance & Risk Mitigation" icon={FileText}>
      <section className="security-compliance">

        <div className="security-list">

          <div className="security-item">
            <Shield className="security-icon" />
            <div>
              <h3>Sybil & Fraud</h3>
              <p>NaiBot PoP, anomaly detection, manual verification for pilot.</p>
            </div>
          </div>

          <div className="security-item">
            <UserCheck className="security-icon" />
            <div>
              <h3>KYC & AML</h3>
              <p>Tiered KYC—optional/walletless interaction by default; KYC required for conversions and larger withdrawals.</p>
            </div>
          </div>

          <div className="security-item">
            <FileSearch className="security-icon" />
            <div>
              <h3>Audits</h3>
              <p>Security audits for smart contracts and penetration testing across infrastructure.</p>
            </div>
          </div>

          <div >
           
            <div>
              
              <p className="closing"> Legal Jurisdictional legal review for RWA and token listings; region-specific compliance planning.</p>
            </div>
          </div>

        </div>

      </section>
    </DocsPageWrapper>
  );
}
