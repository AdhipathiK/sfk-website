import styles from "./TrustIndicator.module.css";

export default function TrustIndicator({ icon, label, value }) {
  return (
    <div className={styles.trustItem}>
      <div className={styles.icon}>{icon}</div>
      <div>
        <span className={styles.label}>{label}</span>
        <br />
        <span className={styles.value}>{value}</span>
      </div>
    </div>
  );
}
