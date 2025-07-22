import React, { useState, useEffect } from "react";
import shiv1 from '../assets/images/shiv1.jpg';
import shiv2 from '../assets/images/shiv2.jpg';
import shiv3 from '../assets/images/shiv3.jpg';
import shiv4 from '../assets/images/shiv4.jpg';

const images = [shiv1, shiv2, shiv3, shiv4];

export default function About() {
  // Simple looping image carousel (optional)
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((c) => (c + 1) % images.length);
    }, 2300);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="about-section">
      <div className="about-flex-row">
        {/* LEFT: CONTENT */}
        <div className="about-content">
          <h1 className="about-title">Hi, I’m Shivika!</h1>
          <h2 className="about-subtitle">Founder, Community Builder, Podcast Host, and your go-to friend for navigating the UK</h2>
          <p className="about-story">
            If you’re reading this, chances are you’re curious about what it’s really like to move to a whole new country, start again, and (somehow) not lose yourself in the process. That’s been my life for the past 9 years—packed with everything from new visas to all-nighters at uni, finding real community, and building things that make a difference.
          </p>
          <p className="about-story">
            I moved from New Delhi to the UK to chase my dreams (and, let’s be honest, a little bit of adventure). At first, it felt like being dropped in the deep end—figuring out everything from student life at Warwick to how to adult in a totally new place. Those struggles inspired me to start <b>Startup Freshie Kit</b>—a platform for sharing real talk, resources, and hacks for students, grads, and anyone who’s a “freshie” here.
          </p>
          <p className="about-story">
            Along the way, I founded <b>AVIKA Limited</b> to help international students and newcomers make the most of their UK experience. Our little community grew—and now, over 17,000 people have joined in! I’ve had some wild jobs (from credit analyst to podcast host), started and closed startups, learned a ton, and even launched a podcast, <i>Careers Beyond Degree</i>, where I chat with amazing people who’ve built lives beyond their home countries. It’s honest, hopeful, and sometimes hilarious.
          </p>
          <p className="about-story">
            What gets me out of bed? Helping others turn their challenges into opportunities, and making sure no one feels alone as they figure out visas, jobs, business, or simply where to get good chai. I love building communities, mentoring, and cheering for the next big leap in your journey.
          </p>
          <div className="about-facts">
            <div><b>Quick facts:</b></div>
            <ul>
              <li>MA in International Relations, University of Warwick (go Warwick!)</li>
              <li>Founder of 2 startups, host of a YouTube podcast, and a big believer in making things simple for others</li>
              <li>Have lived in 4 cities, survived on instant noodles (don’t recommend), and learned to call the UK my second home</li>
              <li>Love: career chats, new ideas, community projects, dog memes, and all things startup</li>
            </ul>
          </div>
          <div className="about-cta">
            <p>Curious about starting up in the UK, want advice, or just need a friend to cheer you on?</p>
            <a href="mailto:hello@startupfreshiekit.com" className="about-cta-btn">
              Let’s Connect!
            </a>
          </div>
        </div>
        {/* RIGHT: CAROUSEL IMAGE */}
        <div className="about-carousel-image-col">
          <div className="about-carousel-image-box">
            <img
              src={images[current]}
              alt={`Shivika ${current + 1}`}
              className="about-carousel-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
