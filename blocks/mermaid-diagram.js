import mermaid from "https://cdn.jsdelivr.net/npm/mermaid@12.3.0/dist/mermaid.esm.min.mjs";

const styles = getComputedStyle(document.documentElement);
const paper = styles.getPropertyValue("--color-paper-warm").trim();
const charcoal = styles.getPropertyValue("--color-charcoal-deep").trim();

mermaid.initialize({
  startOnLoad: false,
  securityLevel: "strict",
  htmlLabels: false,
  look: "classic",
  theme: "base",
  themeVariables: {
    fontFamily: styles.getPropertyValue("--font-body").trim(),
    fontSize: "20px",
    primaryColor: paper,
    primaryTextColor: charcoal,
    primaryBorderColor: charcoal,
    lineColor: charcoal,
    background: paper,
  },
  flowchart: {
    curve: "linear",
    wrappingWidth: 320,
  },
});

await document.fonts.ready;
await mermaid.run({ nodes: document.querySelectorAll(".mermaid-diagram__source") });
