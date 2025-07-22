import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <NavLink to="/" className={styles.logoText}>
        Startup <span className={styles.brandAccent}>Freshie Kit</span>
      </NavLink>
      <div className={styles.links}>
        <NavLink to="/resources">Resources</NavLink>
        <NavLink to="/podcast">Podcast</NavLink>
        <NavLink to="/mentors">Meet Our Mentors</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </nav>
  );
}
