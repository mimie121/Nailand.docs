import { Copy } from "lucide-react";
import { useState } from "react";
import "./DocsPageWrapper.css";

export default function DocsPageWrapper({ title, icon: Icon, children, className }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const textToCopy = document.querySelector(".docs-page")?.innerText || "";
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
   
    <section className={`docs-page ${className || ""}`}>
      <div className="docs-header">
        <h1>
          {Icon && (
            <Icon size={30} style={{ marginRight: "8px", verticalAlign: "middle" }} />
          )}
          {title}
        </h1>
        <button className="copy-btn" onClick={handleCopy} title="Copy full page">
          <Copy size={20} />
          <span className="tooltip">{copied ? "Copied!" : "Copy page"}</span>
        </button>
      </div>
      <div className="docs-content">{children}</div>
    </section>
  );
}
