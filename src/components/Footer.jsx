import { FaInstagram, FaLinkedin, FaTiktok, FaEnvelope } from "react-icons/fa6";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <a href="https://instagram.com/shivikaapratap" target="_blank" rel="noopener noreferrer">
          <FaInstagram className={styles.icon} /> Instagram
        </a>
        <a href="https://www.linkedin.com/in/shivikapratap/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className={styles.icon} /> LinkedIn
        </a>
        <a href="https://tiktok.com/@shivikaapratap?_t=ZN-8y3sKxfOGHq&_r=1" target="_blank" rel="noopener noreferrer">
          <FaTiktok className={styles.icon} /> TikTok
        </a>
        <a href="mailto:shiv@avikalimited.co.uk">
          <FaEnvelope className={styles.icon} /> Email
        </a>
      </div>
      <div className={styles.copy}>© 2025 SFK | Designed and developed by a disciple of Shivika.</div>
    </footer>
  );
}
