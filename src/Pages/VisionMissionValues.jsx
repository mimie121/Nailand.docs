
import DocsPageWrapper from "../Components/DocsPageWrapper";
import { Eye, Target, Quote, Tag, HeartHandshake, FileText } from "lucide-react";
import "./VisionMissionValues.css";

export default function VisionMissionValues() {
  return (
    <DocsPageWrapper title="Vision, Mission & Values" icon={FileText}>
    <section className="vision-mission-values">
     

      <p className="intro">
        NaiLAND’s philosophy is rooted in purpose, innovation, and inclusivity.
        Our vision, mission, and values guide how we empower communities to
        create sustainable impact in the decentralized digital world.
      </p>

      <div className="vmv-list">
        <div className="vmv-item">
          <Eye className="vmv-icon" size={24} />
          <div>
            <h3>Vision</h3>
            <p>
              To lead the Metaverse era as the foremost platform for digital
              wealth and cultural innovation—empowering individuals to unlock
              their potential, achieve financial independence, and contribute to
              a purpose-driven, decentralized future where creativity,
              authenticity, and collaboration fuel global prosperity.
            </p>
          </div>
        </div>

        <div className="vmv-item">
          <Target className="vmv-icon" size={24} />
          <div>
            <h3>Mission</h3>
            <p>
              To build a globally recognized SocialFi–DeFi metaverse ecosystem
              that integrates e-commerce and AI-powered tools, empowering
              authentic personalities, accelerating creator-led innovation, and
              enabling inclusive wealth creation. We foster an environment where
              uniqueness is celebrated, communities harness collective value,
              and people everywhere collaborate to shape a better, more
              equitable world.
            </p>
          </div>
        </div>

        <div className="vmv-item">
          <Quote className="vmv-icon" size={24} />
          <div>
            <h3>Motto</h3>
            <p>
              <strong>“Unique Expressions, United Wealth.”</strong>
            </p>
          </div>
        </div>

        <div className="vmv-item">
          <Tag className="vmv-icon" size={24} />
          <div>
            <h3>Tagline</h3>
            <p>
              <strong>“Built for Your Now and the Future.”</strong>
            </p>
          </div>
        </div>

        <div className="vmv-item">
          <HeartHandshake className="vmv-icon" size={24} />
          <div>
            <h3>Core Values</h3>
            <ul>
              <li>Purposeful Creativity</li>
              <li>Community Ownership</li>
              <li>Accessibility</li>
              <li>Trust</li>
              <li>Progressive Decentralization</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    </DocsPageWrapper>
  );
}
