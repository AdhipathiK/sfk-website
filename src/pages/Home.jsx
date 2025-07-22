import { motion } from "framer-motion";
import styles from "./Home.module.css";
import TrustIndicator from "../components/TrustIndicator";
import TestimonialCarousel from "../components/TestimonialCarousel";
import { testimonials } from "../data/testimonials";
import { trust } from "../data/trust";
import ukPhoto from "../assets/images/uk-hero.png";
import logoImg from "../assets/logo.jpg";
import ServiceIcon from "../components/ServiceIcon";
import YouTubeThumb from "../components/YouTubeThumb";
import "../components/YouTubeMarquee.css"; // for the marquee scroll CSS

import {
  FaUserTie,
  FaPassport,
  FaClipboardList,
  FaGlobeEurope,
  FaUserEdit,
  FaLightbulb,
  FaUsers,
} from "react-icons/fa";

const playlists = [
  { link: "https://www.youtube.com/watch?v=BjT3kRgmxJo&list=PLjMbstVjLK61-KsFbHj1jnCBR0EtTZUsG", alt: "Careers Beyond Degree" },
  { link: "https://www.youtube.com/watch?v=BFmd5rVLJN4&list=PLjMbstVjLK61KuQXKGfGkUZ-szEahMJQH", alt: "Start a Business" },
  { link: "https://www.youtube.com/watch?v=BjT3kRgmxJo&list=PLjMbstVjLK63DiCC7c335wAl9ZWrNwxG1&pp=0gcJCV8EOCosWNin", alt: "Self-Help" },
  { link: "https://www.youtube.com/watch?v=CDhO32fiGWM&list=PLjMbstVjLK628unBew2fazABuPZoVOLNm", alt: "UK Visas" },
  { link: "https://www.youtube.com/watch?v=AZzAXX73uFQ&list=PLjMbstVjLK60nDqRFBt4OGJPuTPRbjwOr", alt: "UK Student Life" },
  { link: "https://www.youtube.com/watch?v=x-cEI6Rk--o&list=PLjMbstVjLK63qFVSJgrqE6lZlZ9Hag5q5", alt: "Life at University" },
];

const services = [
  { icon: <FaUserTie />, label: "CV Review" },
  { icon: <FaPassport />, label: "Visa Guidance" },
  { icon: <FaClipboardList />, label: "Startup Checklists" },
  { icon: <FaGlobeEurope />, label: "Real UK Insights" },
  { icon: <FaUserEdit />, label: "Personal Branding" },
  { icon: <FaLightbulb />, label: "Career Advice" },
  { icon: <FaUsers />, label: "Networking" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};


export default function Home() {
  return (
    <main className={styles.main}>

      {/* 1. HERO SECTION */}
      <motion.section
        className={styles.hero}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img src={ukPhoto} alt="Shivika UK" className={styles.heroImg} />
        <div className={styles.heroText}>
          <h1>Heya, I’m Shivika 👋</h1>
          <h2>
            Your trusted guide for thriving in the UK:<br />
            Startup Success, Student Life & Career Breakthroughs
          </h2>
          <p>
            Founder, mentor, podcast host. Sharing the freshest hacks and official know-how for anyone coming to the UK.
          </p>
        </div>
      </motion.section>

      {/* 2. ABOUT SFK PREVIEW */}
      <motion.section
        className={styles.aboutSection}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, delay: 0.14 }}
      >
        <h2 className={styles.brandHeading}>
          Startup <span className={styles.brandAccent}>Freshie Kit</span>
        </h2>
        <div className={styles.about}>
          <img src={logoImg} className={styles.aboutImg} alt="Shivika Pratap - Startup Freshie Kit" />
          <div>
            <h3 className={styles.aboutSubheading}>Your UK Startup Survival Guide</h3>
            <p className={styles.aboutStory}>
              <strong>My story:</strong> When I landed in the UK, I knew nobody, had little guidance, and faced every challenge alone. I turned those struggles into lessons and built Startup Freshie Kit to give others what I wish I’d had.<br /><br />
              Today, I help new students, founders, and professionals not just survive, but <strong>thrive</strong> in the UK. This kit is everything I wish someone had handed me at the airport.
            </p>
            <div className={styles.serviceIcons}>
              {services.map((s, idx) => (
                <ServiceIcon key={s.label} {...s} delay={0.13 + idx * 0.07} />
              ))}
            </div>
            <div className={styles.ctaWrapper}>
              <a
                className={styles.ctaBtn}
                href="https://www.linkedin.com/company/startup-freshie-kit/posts/?feedView=all"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Download Your Startup Freshie Kit
              </a>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 3. TRUST INDICATORS */}
      <motion.section
        className={styles.trust}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2>My Social Reach & Partnerships</h2>
        <div className={styles.trustGrid}>
          {trust.map((item, i) => (
            <motion.div
              key={item.label}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 + i * 0.08 }}
            >
              <TrustIndicator {...item} />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 4. Playlist HIGHLIGHT */}
    <motion.section
      className="max-w-4xl mx-auto px-4 py-12"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.65, delay: 0.12 }}
    >
      <h2 className="text-2xl font-bold mb-4 text-center">My YouTube Playlists</h2>
      <div className="marquee-container">
        <motion.div
          className="marquee-track"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 18,
            ease: "linear"
          }}
        >
          {/* Duplicate for infinite effect */}
          {[...playlists, ...playlists].map((pl, i) => (
            <YouTubeThumb key={i + pl.alt} link={pl.link} alt={pl.alt} />
          ))}
        </motion.div>
      </div>
    </motion.section>


      {/* 5. TESTIMONIALS */}
      <motion.section
        className={styles.testimonials}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, delay: 0.16 }}
      >
        <h2>Testimonials </h2>
        <TestimonialCarousel testimonials={testimonials} interval={4200} />
      </motion.section>
    </main>
  );
}


