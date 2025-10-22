import DocsPageWrapper from "../Components/DocsPageWrapper";
import { Compass, Wallet, Briefcase, Users, Shield, Globe } from "lucide-react";
import "./CorePrinciples.css";

export default function CorePrinciples() {
  return (
    <DocsPageWrapper title="Core Principles & Design Ethos" icon={Globe}>
      <section className="core-principles">

        <p className="intro">
          NaiLAND is guided by a set of foundational principles that define how we
          design, build, and scale our ecosystem. These principles ensure that
          innovation remains purposeful, inclusive, and empowering for all
          participants.
        </p>

        <div className="principles-list">
          <div className="principle-item">
            <Compass className="principle-icon" />
            <div>
              <h3>Interest-First Navigation</h3>
              <p>
                Home is discovery, not an endless feed. Hubs, projects, and
                collaboration are prioritized over passive content consumption,
                empowering users to build and engage meaningfully.
              </p>
            </div>
          </div>

          <div className="principle-item">
            <Wallet className="principle-icon" />
            <div>
              <h3>Progressive Web3</h3>
              <p>
                Users start walletless and familiar; tokens, wallets, and DAOs are
                introduced gradually as comfort and experience grow, ensuring a
                seamless Web3 adoption journey.
              </p>
            </div>
          </div>

          <div className="principle-item">
            <Briefcase className="principle-icon" />
            <div>
              <h3>Skill-First Economy</h3>
              <p>
                Skills and time become value. Contributions translate into reputation,
                trust, and tokens—reducing monetary barriers and rewarding real effort.
              </p>
            </div>
          </div>

          <div className="principle-item">
            <Users className="principle-icon" />
            <div>
              <h3>Community Ownership</h3>
              <p>
                Governance transitions from a central council to decentralized region
                DAOs and a global DAO, driven by transparent, tokenized participation.
              </p>
            </div>
          </div>

          <div className="principle-item">
            <Shield className="principle-icon" />
            <div>
              <h3>Trust & Safety</h3>
              <p>
                NaiBot, Proof-of-Participation metrics, verification layers, and KYC
                systems uphold safety and authenticity across the ecosystem.
              </p>
            </div>
          </div>
        </div>

        <p className="closing">
          Together, these principles ensure NaiLAND remains community-driven, secure,
          and empowering for every contributor in the ecosystem.
        </p>
      </section>
    </DocsPageWrapper>
  );
}
