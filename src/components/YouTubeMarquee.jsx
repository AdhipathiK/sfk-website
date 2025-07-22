import { useEffect, useRef } from "react";
import YouTubeThumb from "../components/YouTubeThumb";
import "../components";

// Your playlist data
const playlists = [
  { link: "https://www.youtube.com/watch?v=BjT3kRgmxJo&list=PLjMbstVjLK61-KsFbHj1jnCBR0EtTZUsG", alt: "Careers Beyond Degree" },
  { link: "https://www.youtube.com/watch?v=BFmd5rVLJN4&list=PLjMbstVjLK61KuQXKGfGkUZ-szEahMJQH", alt: "Start a Business in the UK" },
  { link: "https://www.youtube.com/watch?v=BjT3kRgmxJo&list=PLjMbstVjLK63DiCC7c335wAl9ZWrNwxG1&pp=0gcJCV8EOCosWNin", alt: "Self-Help" },
  { link: "https://www.youtube.com/watch?v=CDhO32fiGWM&list=PLjMbstVjLK628unBew2fazABuPZoVOLNm", alt: "UK Visas" },
  { link: "https://www.youtube.com/watch?v=AZzAXX73uFQ&list=PLjMbstVjLK60nDqRFBt4OGJPuTPRbjwOr", alt: "UK Student Life" },
  { link: "https://www.youtube.com/watch?v=x-cEI6Rk--o&list=PLjMbstVjLK63qFVSJgrqE6lZlZ9Hag5q5", alt: "Life at University" },
];

export default function YouTubeMarquee() {
  const marqueeRef = useRef();

  // Duplicate for infinite scroll illusion
  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;
    // Clone all children for seamless looping
    marquee.innerHTML += marquee.innerHTML;
  }, []);

  return (
    <div className="marquee-container">
      <div className="marquee-track" ref={marqueeRef}>
        {playlists.map((pl, i) => (
          <YouTubeThumb key={i + pl.alt} link={pl.link} alt={pl.alt} />
        ))}
      </div>
    </div>
  );
}
