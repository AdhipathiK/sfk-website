import styles from "./Resources.module.css";
import { resources } from "../data/resources";

function ResourceSection({ title, items }) {
  return (
    <section className={styles.cardSection}>
      <h3>{title}</h3>
      <ul className={styles.resourceList}>
        {items.map((item, idx) => (
          <li key={idx} className={styles.resourceItem}>
            <span className={styles.icon}>{item.icon}</span>
            <span className={styles.label}>{item.label}</span>
            <a
              href={item.url}
              target={item.url.startsWith("http") ? "_blank" : undefined}
              rel={item.url.startsWith("http") ? "noopener noreferrer" : undefined}
              className={styles.downloadBtn}
              download={item.url.endsWith(".pdf")}
            >
              {item.url.endsWith(".pdf") ? "Download" : "Open"}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function Resources() {
  return (
    <div className={styles.resourcesPage}>
      <h2 className={styles.heading}>Resources & Downloads</h2>
      <div className={styles.sectionsGrid}>
        <ResourceSection title="Free Downloads" items={resources.checklists} />
        <ResourceSection title="Guides & Articles" items={resources.guides} />
        <ResourceSection title="Tools & Apps" items={resources.tools} />
      </div>
    </div>
  );
}
