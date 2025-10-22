import { useEffect, useState } from "react";
import "./TokenomicsPage.css";
import DocsPageWrapper from "../Components/DocsPageWrapper";
import { FileText } from "lucide-react";

export default function TokenomicsPage() {
  const [activeSection, setActiveSection] = useState("");

  const sections = [
    { id: "overview", title: "8.1 Token Overview" },
    { id: "principles", title: "8.2 Core Principles" },
    { id: "allocation", title: "8.3 Supply Allocation & Vesting" },
    { id: "emissions", title: "8.4 Emissions & Conversion" },
    { id: "deflation", title: "8.5 Deflationary Mechanisms" },
    { id: "market", title: "Market Strategy & Phases" },
    { id: "risk", title: "Risk Management & Sustainability" },
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -60% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
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
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <DocsPageWrapper title="Tokenomics & Economic Model" className="tokenomics-docs-wrapper" icon={FileText}>
      <div className="tokenomics-page">
        {/* Sidebar */}
        <aside className="tokenomics-sidebar">
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

        {/* Main Content */}
        <div className="tokenomics-content">
          <section id="overview">
            <h2>8.1 Token Overview</h2>
            <p>
              <strong>Name:</strong> NaiLAND Token <br />
              <strong>Symbol:</strong> $NAI <br />
              <strong>Total Supply:</strong> 1,000,000,000 $NAI <br />
              <strong>Standards:</strong> Phase 1 ERC-20 on L2; Phase 2 Naichain sovereign token.
            </p>
          </section>

          <section id="principles">
            <h2>8.2 Core Principles</h2>
            <ul>
              <li><strong>Utility-Driven:</strong> $NAI powers marketplace transactions, AI modules, governance staking, visibility boosts, and creator tools.</li>
              <li><strong>User-Centric Incentives:</strong> Points and SkillCredits reward content creation, verified collaboration, and community contributions.</li>
              <li><strong>Sustainability:</strong> Emissions paired with burn sinks and revenue buybacks.</li>
              <li><strong>Progressive Decentralization:</strong> Governance power flows to DAOs over time.</li>
              <li><strong>Phased Market Strategy:</strong> Build strong internal demand before external exchange listings.</li>
            </ul>

            <h3>Utility & Value Accrual</h3>
            <ul>
              <li><strong>Medium of Exchange:</strong> Used for marketplace transactions (land, wearables, dApps), AI-agent services, subscriptions, and events.</li>
              <li><strong>AI Companion Services:</strong> Upgrade NaiBot, accelerate learning modules, and rent AI companions with revenue sharing.</li>
              <li><strong>Governance & Influence:</strong> Stake $NAI to vote on roadmap, treasury allocations, and Naichain launch.</li>
              <li><strong>Content & Visibility Boosting:</strong> Spend $NAI to amplify streams, posts, and unlock advanced creator tools.</li>
            </ul>
          </section>

          <section id="allocation">
            <h2>8.3 Supply Allocation & Vesting</h2>
            <table>
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Allocation</th>
                  <th>Tokens</th>
                  <th>Vesting & Release</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Community Incentives & Rewards</td>
                  <td>40%</td>
                  <td>400,000,000</td>
                  <td>5–7 years; high initial emissions; DAO-controlled releases</td>
                </tr>
                <tr>
                  <td>Ecosystem Development & Partners</td>
                  <td>20%</td>
                  <td>200,000,000</td>
                  <td>4–6 years; milestone-tied, DAO oversight</td>
                </tr>
                <tr>
                  <td>Team & Advisors</td>
                  <td>15%</td>
                  <td>150,000,000</td>
                  <td>1-year cliff + 36-48 months linear</td>
                </tr>
                <tr>
                  <td>Strategic Treasury & Reserve</td>
                  <td>10%</td>
                  <td>100,000,000</td>
                  <td>Minimal unlock; multi-sig + DAO-governed</td>
                </tr>
                <tr>
                  <td>Liquidity & Exchange Ops</td>
                  <td>8%</td>
                  <td>80,000,000</td>
                  <td>Year 2+ strategic unlocks for pools & market-making</td>
                </tr>
                <tr>
                  <td>Private/Seed Sale</td>
                  <td>7%</td>
                  <td>70,000,000</td>
                  <td>1-year cliff + 24-36 months linear</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section id="emissions">
            <h2>8.4 Emissions & Conversion</h2>
            <ul>
              <li><strong>Engagement-to-Earn (E2E):</strong> Users earn Points; Points form the basis for biannual Points→$NAI conversions.</li>
              <li><strong>Biannual Conversion:</strong> DAO proposes rates and parameters prior to each epoch.</li>
              <li><strong>Reputation Multipliers & Anti-Sybil:</strong> AI & Proof-of-Participation maintain integrity.</li>
              <li><strong>Staking Emissions:</strong> Rewards drawn from Community pool; dynamic rates support PoS validators on Naichain.</li>
            </ul>
          </section>

          <section id="deflation">
            <h2>8.5 Deflationary Mechanisms</h2>
            <ul>
              <li>Transaction Burns: 2–5% of fees are permanently burned.</li>
              <li>NFT Royalties: Minting and sales allocate a portion to burn contracts.</li>
              <li>AI Module Burns: Personalization and upgrades incur burns.</li>
              <li>Promotion Fees: Partial burn when amplifying content.</li>
              <li>Revenue Buy-Backs: Enterprise revenues fund $NAI repurchases and burns.</li>
            </ul>
          </section>

          <section id="market">
            <h2>Market Strategy & Phases</h2>
            <p><strong>Year 1 (Polygon or Asset chain):</strong> Controlled internal listing; build utility vs. USDT; refine ecosystem features.</p>
            <p><strong>Year 2+ (Naichain):</strong> Audit, testnet, mainnet launch; migration incentives; full CEX & DEX listings under compliance.</p>
          </section>

          <section id="risk">
            <h2>Risk Management & Sustainability</h2>
            <ul>
              <li><strong>Inflation Control:</strong> DAO-tunable emission parameters and burn sinks.</li>
              <li><strong>Sybil Protection:</strong> AI analytics and PoP ensure fair reward distribution.</li>
              <li><strong>Market Volatility Mitigation:</strong> DAO-governed treasury market-making.</li>
              <li><strong>Regulatory Compliance:</strong> Continuous legal reviews across jurisdictions.</li>
              <li><strong>Migration Safeguards:</strong> Phased bridge processes and audits.</li>
              <li><strong>Economic Monitoring:</strong> Real-time KPI dashboards with DAO reviews.</li>
            </ul>
          </section>
        </div>
      </div>
    </DocsPageWrapper>
  );
}
