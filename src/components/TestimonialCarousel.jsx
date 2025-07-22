import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./TestimonialCarousel.module.css";
import TestimonialCard from "./TestimonialCard";

export default function TestimonialCarousel({ testimonials, interval = 4500 }) {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  // Auto-advance logic
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setIndex(i => (i + 1) % testimonials.length);
    }, interval);
    return () => clearTimeout(timeoutRef.current);
  }, [index, testimonials.length, interval]);

  // Touch/swipe for mobile
  let startX = 0;
  function handleTouchStart(e) {
    startX = e.touches[0].clientX;
  }
  function handleTouchEnd(e) {
    const diff = e.changedTouches[0].clientX - startX;
    if (diff > 50) setIndex(i => (i === 0 ? testimonials.length - 1 : i - 1));
    else if (diff < -50) setIndex(i => (i + 1) % testimonials.length);
  }

  return (
    <div className={styles.carousel}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -60 }}
          transition={{ duration: 0.6 }}
          className={styles.slide}
        >
          <TestimonialCard {...testimonials[index]} />
        </motion.div>
      </AnimatePresence>
      <div className={styles.dots}>
        {testimonials.map((_, i) => (
          <button
            key={i}
            className={i === index ? styles.activeDot : styles.dot}
            onClick={() => setIndex(i)}
            aria-label={`Show testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
