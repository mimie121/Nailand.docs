import {
  LayoutDashboard,
  Server,
  Zap,
  Blocks,
  Brain,
  Cloud,
  Link2,
  FileText,
} from "lucide-react";
import DocsPageWrapper from "../Components/DocsPageWrapper";
import "./PlatformArchitecture.css";

export default function PlatformArchitecture() {
  return (
    <DocsPageWrapper title="Platform Architecture (High Level)" icon={FileText}>
      <section className="platform-architecture docs-page">
        <p className="intro">
          NaiLAND’s platform architecture is designed for scalability, modularity,
          and real-time interaction. It integrates Web3, AI/ML, and cloud-native
          systems to power the next generation of social collaboration and digital
          economies.
        </p>

        <div className="architecture-list">
          <div className="architecture-item">
            <LayoutDashboard className="architecture-icon" />
            <div>
              <h3>Frontend</h3>
              <p>
                Built with <strong>React.js</strong> for web and{" "}
                <strong>React Native</strong> for mobile. Components follow brand
                tokens — <span className="color-swatch">Deep Brown (#5D4037)</span>,
                <span className="color-swatch"> Vibrant Gold (#FFC107)</span>, and{" "}
                <span className="color-swatch">Off-White (#FAFAFA)</span>.
              </p>
            </div>
          </div>

          <div className="architecture-item">
            <Server className="architecture-icon" />
            <div>
              <h3>Backend</h3>
              <p>
                Modular <strong>Node.js microservices</strong> architecture powered by{" "}
                <strong>PostgreSQL</strong> (transactions) and{" "}
                <strong>MongoDB</strong> (profiles, content, analytics).
              </p>
            </div>
          </div>

          <div className="architecture-item">
            <Zap className="architecture-icon" />
            <div>
              <h3>Realtime Layer</h3>
              <p>
                <strong>WebSockets</strong> enable Scan Chat and streaming
                interactions; <strong>RabbitMQ</strong> orchestrates events and
                asynchronous communication between services.
              </p>
            </div>
          </div>

          <div className="architecture-item">
            <Blocks className="architecture-icon" />
            <div>
              <h3>Blockchain</h3>
              <p>
                Phase 1 launches <strong>$NAI</strong> as an{" "}
                <strong>ERC-20</strong> token on a Layer-2 (e.g. Polygon), transitioning
                to <strong>Naichain</strong> (sovereign chain). NFT assets use{" "}
                <strong>ERC-721/1155</strong> standards.
              </p>
            </div>
          </div>

          <div className="architecture-item">
            <Brain className="architecture-icon" />
            <div>
              <h3>AI / ML — NaiBot</h3>
              <p>
                Dedicated microservices for <strong>recommendations</strong>,{" "}
                <strong>anomaly detection</strong>, and{" "}
                <strong>summarization</strong> enhance safety and user experience.
              </p>
            </div>
          </div>

          <div className="architecture-item">
            <Cloud className="architecture-icon" />
            <div>
              <h3>Infrastructure</h3>
              <p>
                Deployed across <strong>GCP / AWS</strong> multi-region clusters with
                integrated CDN, secure key management, and full audit logging for
                compliance and reliability.
              </p>
            </div>
          </div>

          <div className="architecture-item">
            <Link2 className="architecture-icon" />
            <div>
              <h3>Integrations</h3>
              <p>
                Includes <strong>USDT payment rails</strong>,{" "}
                <strong>KYC providers</strong>, streaming CDNs, and{" "}
                <strong>off-chain custody services</strong> for real-world assets
                (RWA).
              </p>
            </div>
          </div>
        </div>
      </section>
    </DocsPageWrapper>
  );
}
