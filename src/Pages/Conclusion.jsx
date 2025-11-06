import { Flag } from "lucide-react";
import DocsPageWrapper from "../Components/DocsPageWrapper";
import "./Conclusion.css";

export default function Conclusion() {
  return (
    <DocsPageWrapper title="Conclusion & Call to Action" icon={Flag}>
      <section className="conclusion">
        <div className="conclusion-item">
          <Flag className="conclusion-icon" />
          <div>
            <p>
               NaiLAND turns skills and community contribution into real value through a phased, secure rollout—from walletless onboarding to DAO governance and a tokenized metaverse.
            </p>
          </div>
        </div>
      </section>
    </DocsPageWrapper>
  );
}
