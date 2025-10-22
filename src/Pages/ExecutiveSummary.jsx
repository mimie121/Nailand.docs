import DocsPageWrapper from "../Components/DocsPageWrapper";
import { Globe2, Users, Zap, Coins, Building2, FileText } from "lucide-react";
import "./ExecutiveSummary.css";


export default function ExecutiveSummary() {
  return (
    <DocsPageWrapper title="Executive Summary" icon={FileText}>
     
      <section className="executive-summary">


      <p>
        NaiLAND is a hybrid <strong>SocialFi–DeFi Metaverse</strong> platform that reimagines how
        people connect, collaborate, and create wealth online. Built for creators,
        communities, and regions—starting with underrepresented African Gen-Z/Alpha
        creatives—NaiLAND replaces attention-driven feeds and extractive marketplaces
        with <strong>interest-based hubs</strong>, <strong>skill-exchange economies</strong>, and
        <strong> community governance</strong>.
      </p>

      <p>
        Our native token, <strong>$NAI</strong>, and a staged Points economy transform verified
        contribution into shared economic value. We aim to onboard billions through a
        phased roadmap:
      </p>

      <ul className="roadmap-list">
        <li>
          <Users className="icon" size={20} /> Onboarding & Engagement
        </li>
        <li>
          <Zap className="icon" size={20} /> Digital Hubs & Streaming
        </li>
        <li>
          <Coins className="icon" size={20} /> Tokenization & Internal Exchange
        </li>
        <li>
          <Building2 className="icon" size={20} /> Marketplaces & Governance
        </li>
        <li>
          <Globe2 className="icon" size={20} /> Global Scaling & Metaverse
        </li>
      </ul>
    </section>

    </DocsPageWrapper>
  );
}



