import React, { useState } from "react";

const podcastVideos = [
  { id: "BjT3kRgmxJo", title: "Episode 1: Boardrooms at 20: Rishi Lad’s Unconventional Rise" },
  { id: "xdsKpAAj1As", title: "Episode 2: In Conversation with INNOVATOR INTERNATIONAL" },
  { id: "_3b-nRW8Lec", title: "Episode 3: How Banky Alao Built Peppa with the UK Innovator Visa" },
  { id: "PpMpvOFmKFo", title: "Episode 4: He’s Helping Thousands Say YES to Jobs" },
  { id: "YQj9lt34UFY", title: "Episode 5: In Conversation with Immigration Solicitor on ILR, Innovator Founder, Skilled Worker & Global Talent" },
  { id: "PSKV2IKOIXo", title: "Episode 6: Bachelors, Masters & Barclays" },
  { id: "F0v7KK5EcaA", title: "Episode 7: How to Become a Successful Marketer in the UK" },
  { id: "LoCi58U209Y", title: "Episode 8: From Dubai to UK: Sneha Bhatt’s Bold Career Pivot & Uni Journey" },
  { id: "6eABl-hxLrM", title: "Episode 9: Jobs & Interviews" },
  { id: "qnjaL1A2fm4", title: "Episode 10: Marketing Hacks Every Grad Needs to Know" },
  { id: "J33SKIdip1Y", title: "Episode 11: From Oxford Brookes to COACH: My Sister’s UK Journey" },
  { id: "O2hDlc9jVIU", title: "Episode 12: Amazon London Insider Reveals His Career Secrets" },
  { id: "zjOrFZliqbE", title: "Episode 13: Thriving in the UK: Interview Tips & Landing University Roles Fast" },
];

const getThumbnail = id => `https://img.youtube.com/vi/${id}/hqdefault.jpg`;

export default function PodcastPage() {
  const [playing, setPlaying] = useState(null);
  const [hovered, setHovered] = useState(null);

  return (
    <>
      <style>{`
        .podcast-container {
          padding: 2rem;
          max-width: 800px;
          margin: 0 auto;
          font-family: sans-serif;
          background: #f6f8fa;
          border-radius: 12px;
        }
        .podcast-list {
          padding: 0;
          list-style: none;
        }
        .podcast-card {
          margin-bottom: 2rem;
          padding: 1.5rem;
          background: #fff;
          box-shadow: 0 2px 8px rgba(0,0,0,0.07);
          border-radius: 10px;
          border: 1px solid #eee;
          display: flex;
          gap: 1.5rem;
          align-items: center;
          transition: background 0.3s, border 0.3s;
        }
        .podcast-card.active {
          background: #fffbe7;
          border: 2px solid #ffd54f;
        }
        .thumb-wrap {
          position: relative;
          width: 110px;
          height: 70px;
          flex-shrink: 0;
        }
        .thumb {
          transition: transform 0.22s cubic-bezier(.4,2,.2,1), box-shadow 0.16s;
          cursor: pointer;
          width: 110px;
          height: 70px;
          object-fit: cover;
          border-radius: 7px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.09);
          border: none;
          position: absolute;
          top: 0;
          left: 0;
          background: #eee;
        }
        .thumb.zoom {
          transform: scale(2) translateY(-10%);
          z-index: 10;
          box-shadow: 0 6px 24px 0 rgba(0,0,0,0.22);
        }
        .podcast-content {
          flex: 1;
        }
        .now-playing {
          margin-top: 8px;
          color: #fbc02d;
          font-weight: bold;
          font-size: 1rem;
        }
        .podcast-title {
          margin: 0 0 0.25rem;
          color: #333;
          font-size: 1.1rem;
        }
        .podcast-desc {
          margin: 0 0 0.5rem;
          font-size: 1rem;
          color: #666;
        }
        @media (max-width: 600px) {
          .podcast-container {
            padding: 0.5rem;
            border-radius: 0;
            max-width: 100vw;
          }
          .podcast-card {
            flex-direction: column;
            align-items: stretch;
            gap: 0.7rem;
            padding: 1rem;
          }
          .thumb-wrap {
            width: 90vw;
            max-width: 95vw;
            height: 34vw;
            min-height: 60px;
            margin: 0 auto 0.5rem auto;
          }
          .thumb, .thumb.zoom {
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            transform: none;
            box-shadow: 0 4px 12px rgba(0,0,0,0.09);
          }
          .thumb.zoom {
            transform: scale(1.12);
            z-index: 10;
          }
          .podcast-title {
            font-size: 1.05rem;
            text-align: left;
          }
        }
      `}</style>
      <div className="podcast-container">
        <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
          Careers Beyond Degree
        </h1>
        <ol className="podcast-list">
          {podcastVideos.map((pod, idx) => (
            <li
              key={pod.id}
              className={`podcast-card${playing === idx ? " active" : ""}`}
            >
              {/* Thumbnail */}
              <div
                className="thumb-wrap"
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
                onTouchStart={() => setHovered(idx)}
                onTouchEnd={() => setHovered(null)}
              >
                <img
                  src={getThumbnail(pod.id)}
                  alt={pod.title}
                  className={`thumb${hovered === idx ? " zoom" : ""}`}
                />
              </div>
              {/* Content */}
              <div className="podcast-content">
                <h3 className="podcast-title">{pod.title}</h3>
                <iframe
                  title={pod.title}
                  width="100%"
                  height="90"
                  src={`https://www.youtube.com/embed/${pod.id}?autoplay=0&controls=1&modestbranding=1&rel=0`}
                  style={{
                    border: "none",
                    borderRadius: "8px",
                    background: "#000",
                    width: "100%",
                  }}
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  onPlay={() => setPlaying(idx)}
                  onFocus={() => setPlaying(idx)}
                  onBlur={() => setPlaying(null)}
                ></iframe>
                {playing === idx && (
                  <div className="now-playing">▶️ Now Playing</div>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
