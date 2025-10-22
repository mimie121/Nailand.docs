import { Layers3 } from "lucide-react";
import DocsPageWrapper from "../Components/DocsPageWrapper";
import "./Addendum.css";

export default function Addendum() {
  return (
    <DocsPageWrapper
      title="Addendum: SkillCredits, Points → $NAI Conversion & Governance"
      icon={Layers3}
      className="addendum-docs-wrapper"
    >
      <section className="addendum">
        <h2>Purpose</h2>
        <p>
          This addendum describes NaiLAND’s practical bridge from community activity to tokenized value.
          It introduces SkillCredits (a barter/time currency), clarifies the on-platform Points ledger,
          and specifies the mechanics and governance for biannual conversion of Points into $NAI. These
          layers enable participation for creators who lack upfront capital and ensure community control
          over economic parameters.
        </p>

        <h2>Value Units & Flow</h2>
        <p>
          <strong>SkillCredits</strong> (pilot: off-chain; production: on-platform ledger) — Units denominated
          in time or agreed work (e.g., 1 hour = 1 SkillCredit). SkillCredits allow members to directly barter
          services (design ↔ audio, mentoring ↔ development). In pilot, exchanges are recorded and verified
          by community Ambassadors or Admins; in production, verification is progressively automated via NaiBot
          and Proof-of-Participation signals.
        </p>

        <p>
          <strong>Points</strong> (on-platform ledger) — Earned for verified contributions: completed SkillExchanges,
          published projects, streaming contributions, moderation and community work. Points capture reputation
          and eligibility for economic conversion. Points are recorded in each user’s Resource Ledger and form
          the basis for epoch conversion.
        </p>

        <p>
          <strong>$NAI</strong> (on-chain token) — Issued through biannual conversion epochs. Points → $NAI conversion
          occurs twice per year at rates and rules proposed and ratified by DAO governance.
        </p>

        <h2>Conversion Mechanics</h2>
        <p>
          <strong>Pilot:</strong> SkillCredits → Points conversion and Points awarding are verified manually by
          Admins/Ambassadors according to published rules. Points are informational until the first conversion epoch.
        </p>

        <p>
          <strong>Production:</strong> Automated verification (NaiBot + PoP) supports SkillCredit → Points conversion.
          Points → $NAI conversion is executed in two scheduled epochs per year. The DAO proposes conversion ratios,
          caps and eligibility windows; community voting finalizes parameters. Conversion records, allocations and
          logs are published for transparency.
        </p>

        <p>
          <strong>Stability & Sinks:</strong> To protect token value and control inflation, on-platform sinks (promotion
          fees, AI module upgrades, minting/royalty burns) and periodic buybacks from platform revenue are used.
          The DAO may tune burn rates, epoch caps and liquidity policies.
        </p>

        <h2>Governance Roles</h2>
        <p>
          <strong>Region DAOs:</strong> Manage local treasury allocations, set region-level SkillCredit multipliers
          for local programs, and approve small grants.
        </p>

        <p>
          <strong>Global DAO:</strong> Ratifies epoch rules (conversion ratio, caps), major protocol changes, and
          Naichain migration plans.
        </p>

        <p>
          <strong>Executive Council (transitional):</strong> Operates during early phases to ensure continuity;
          powers transition to DAOs over defined milestones. All governance actions—proposals, votes, disbursements—
          are recorded and accessible via the Governance Dashboard.
        </p>

        <h2>Safety & Anti-Abuse Controls</h2>
        <p>
          <strong>Proof-of-Participation (PoP)</strong> and NaiBot anomaly detection monitor activity to reduce Sybil
          attacks and gaming.
        </p>

        <p>
          Manual verification by trained Ambassadors during pilot ensures quality before automation.
        </p>

        <p>
          <strong>Tiered KYC:</strong> Low friction for basic participation; KYC is required for conversions and
          withdrawals above defined thresholds.
        </p>

        <p>
          <strong>Audit & Transparency:</strong> Smart contracts and conversion processes are audited; conversion epoch
          results and treasury movements are published.
        </p>

        <h2>GTM & Pilot Priorities</h2>
        <p>
          <strong>Beachhead:</strong> African Gen-Z/Alpha creatives and Web3 learners; campus ambassadors and local incubators.
        </p>

        <p>
          <strong>Pilot targets (first 90 days):</strong> 1,000 signups, 100 verified SkillExchanges, 60% onboarding completion.
        </p>

        <p>
          <strong>Proof events:</strong> 4-week barter challenges and ambassador cohorts to validate verification flows and
          SkillCredit → Points mapping.
        </p>

        <h2>Why this adds disruptive value</h2>
        <p>
          By making skills and time a first-class currency, NaiLAND unlocks creative participation without cash barriers.
          SkillCredits and Points create an on-ramp to $NAI that aligns incentives with collaboration, community governance
          and real contribution—shifting economic value from extractive platforms back to creators and regions.
        </p>
      </section>
    </DocsPageWrapper>
  );
}
