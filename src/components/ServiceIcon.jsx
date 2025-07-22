import { motion } from "framer-motion";
import styles from "./ServiceIcon.module.css";


export default function ServiceIcon({ icon, label, delay = 0 }) {
  return (
    <motion.div
      className={styles.serviceIconBox}
      initial={{ opacity: 0, scale: 0.8, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.42, delay }}
      whileHover={{
        scale: 1.17,
        backgroundColor: "#e2f8ee",
        boxShadow: "0 6px 22px rgba(46,196,146,0.14)"
      }}
    >
      <span className={styles.icon}>{icon}</span>
      <span className={styles.label}>{label}</span>
    </motion.div>
  );
}
