import {
  Users,
  IdCard,
  MessageSquare,
  Briefcase,
  Coins,
  Banknote,
  ShoppingBag,
  Settings,
  Bot,
  Globe,
  FileText
} from "lucide-react";
import DocsPageWrapper from "../Components/DocsPageWrapper";
import "./OurSolution.css";

export default function OurSolution() {
  return (
    <DocsPageWrapper title="Our Solution — Product Overview" icon={FileText}>
    <section className="our-solution">
     

      <p className="intro">
        NaiLAND is an integrated platform combining social collaboration, skill
        exchange, tokenized economics, AI mediation, and immersive metaverse
        elements. Below are the core components that power the ecosystem:
      </p>

      <div className="solution-list">
        <div className="solution-item">
          <Users className="solution-icon" />
          <div>
            <h3>Interest-based Regions & Hubs</h3>
            <p>
              Focused collaboration spaces for creativity, tech, business, education,
              wellness, spirituality, and commerce — including MarketCentral & Bank.
            </p>
          </div>
        </div>

        <div className="solution-item">
          <IdCard className="solution-icon" />
          <div>
            <h3>Onboarding & Identity</h3>
            <p>
              Pioneer’s Pledge, interest-tagging, SettlerChoice region selection, and
              NaiBot-assisted onboarding to personalize user experience.
            </p>
          </div>
        </div>

        <div className="solution-item">
          <MessageSquare className="solution-icon" />
          <div>
            <h3>Scan Chat</h3>
            <p>
              Real-time matchmaking for collaborators, community builders, and service
              exchanges within interest-based hubs.
            </p>
          </div>
        </div>

        <div className="solution-item">
          <Briefcase className="solution-icon" />
          <div>
            <h3>SkillExchange & SkillCredits</h3>
            <p>
              Barter and time-based exchange systems—recorded, verified, and
              convertible into Points that reflect reputation and contribution.
            </p>
          </div>
        </div>

        <div className="solution-item">
          <Coins className="solution-icon" />
          <div>
            <h3>Points Economy</h3>
            <p>
              Engagement-to-earn (E2E) Points ledger that transforms participation and
              verified contributions into economic and reputational capital.
            </p>
          </div>
        </div>

        <div className="solution-item">
          <Banknote className="solution-icon" />
          <div>
            <h3>Tokenization & Internal Exchange</h3>
            <p>
              $NAI token system enabling Points → $NAI biannual conversion, with
              integrated internal exchange for USDT ↔ $NAI transactions.
            </p>
          </div>
        </div>

        <div className="solution-item">
          <ShoppingBag className="solution-icon" />
          <div>
            <h3>MarketCentral & Bank</h3>
            <p>
              E-commerce marketplace featuring vendor stalls, P2P rentals, and a
              decentralized Central Bank region for digital and fiat exchange.
            </p>
          </div>
        </div>

        <div className="solution-item">
          <Settings className="solution-icon" />
          <div>
            <h3>Governance & DAOs</h3>
            <p>
              Community-led governance through region DAOs, global DAO, and on-chain
              proposal and treasury mechanisms for transparent decision-making.
            </p>
          </div>
        </div>

        <div className="solution-item">
          <Bot className="solution-icon" />
          <div>
            <h3>NaiBot (AI/ML)</h3>
            <p>
              Intelligent assistant for onboarding, matchmaking, fraud detection,
              and governance analytics using machine learning models.
            </p>
          </div>
        </div>

        <div className="solution-item">
          <Globe className="solution-icon" />
          <div>
            <h3>Metaverse & RWA Integration</h3>
            <p>
              3D territories, VR/AR experiences, and tokenized real-world assets that
              bring NaiLAND’s digital economy into physical reality.
            </p>
          </div>
        </div>
      </div>

      <p className="closing">
        NaiLAND is intentionally phased—progressively introducing token, governance,
        and immersive components to minimize friction and maximize inclusivity.
      </p>
    </section>
    </DocsPageWrapper>
  );
}
