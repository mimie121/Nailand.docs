import { Flag } from "lucide-react";
import DocsPageWrapper from "../Components/DocsPageWrapper";
import "./Conclusion.css";

export default function Conclusion() {
  return (
    <DocsPageWrapper title="Conclusion" icon={Flag}>
      <section className="conclusion">
        <div className="conclusion-item">
          <Flag className="conclusion-icon" />
          <div>
            <p>
              NaiLAND is more than a platform: it’s a movement to restore value
              to creators and communities. By centering interests, barterable
              skills, and community ownership, NaiLAND reimagines the digital
              economy so that talent and time create wealth—together.
            </p>
          </div>
        </div>
      </section>
    </DocsPageWrapper>
  );
}
