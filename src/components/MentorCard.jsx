import React, { useState } from "react";

export default function MentorCard({ name, role, avatar, bio, contact, tags = [], spotlight, onSpotlight }) {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <>
      <style>{`
        .mentor-card {
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.07);
          padding: 1.1rem 1.3rem 1.2rem 1.3rem;
          width: 260px;
          max-width: 94vw;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: 
            transform 0.22s cubic-bezier(.42,1.7,.6,.92),
            box-shadow 0.2s,
            border 0.2s;
          cursor: pointer;
          position: relative;
          min-height: 210px;
          margin-bottom: 0.5rem;
          border: 2.5px solid transparent;
        }
        .mentor-card:hover, .mentor-card:focus-within, .mentor-card.active {
          transform: scale(1.08) rotate(-1.2deg);
          box-shadow: 0 8px 34px 0 #7ad0ff30, 0 2px 16px #95f9ff22;
          border: 2.5px solid #6ce6ff;
          z-index: 2;
        }
        .mentor-card.spotlight {
          transform: scale(1.16) rotate(0.5deg);
          border: 2.5px solid #1e90ff;
          background: linear-gradient(104deg,#ecf6ff 80%,#e3faff 110%);
          box-shadow: 0 8px 38px 0 #5eefff40, 0 2px 16px #41bfff22;
        }
        .mentor-avatar {
          width: 74px;
          height: 74px;
          border-radius: 50%;
          object-fit: cover;
          margin-bottom: 1rem;
          border: 3px solid #e1e5ee;
        }
        .mentor-name {
          font-size: 1.14rem;
          font-weight: 700;
          margin-bottom: 0.18rem;
          letter-spacing: 0.03em;
        }
        .mentor-role {
          font-size: 0.99rem;
          color: #777;
          margin-bottom: 0.65rem;
          text-align: center;
        }
        .mentor-tags {
          margin-bottom: 0.3rem;
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .mentor-tag {
          background: #eaf6ff;
          color: #1976d2;
          font-size: 0.82rem;
          border-radius: 9px;
          padding: 2px 10px;
        }
        .mentor-extra {
          opacity: 0;
          max-height: 0;
          transition: max-height 0.18s, opacity 0.17s;
          overflow: hidden;
        }
        .mentor-card:hover .mentor-extra,
        .mentor-card.active .mentor-extra,
        .mentor-card.spotlight .mentor-extra {
          opacity: 1;
          max-height: 400px;
          margin-top: 0.5rem;
        }
        @media (max-width: 600px) {
          .mentor-card { width: 98vw; min-height: 170px; padding: 1rem 0.7rem; }
        }
      `}</style>
      <div
        className={`mentor-card${spotlight ? " spotlight" : ""}${showInfo ? " active" : ""}`}
        tabIndex={0}
        onMouseEnter={() => setShowInfo(true)}
        onMouseLeave={() => setShowInfo(false)}
        onTouchStart={() => setShowInfo(v => !v)}
        onClick={onSpotlight}
      >
        <img className="mentor-avatar" src={avatar} alt={name} />
        <div className="mentor-name">{name}</div>
        <div className="mentor-role">{role}</div>
        <div className="mentor-tags">
          {(tags || []).map(t => (
            <span className="mentor-tag" key={t}>{t}</span>
          ))}
        </div>
        <div className="mentor-extra">
          <div style={{ fontSize: "0.98rem", color: "#444", marginBottom: "0.5rem", marginTop: "0.2rem", textAlign: "center" }}>
            {bio}
          </div>
          {contact && (
            <a
              href={contact}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                background: "#0056e7",
                color: "#fff",
                fontWeight: 500,
                borderRadius: "7px",
                padding: "6px 18px",
                textDecoration: "none",
                fontSize: "0.97rem",
                marginTop: "0.3rem"
              }}
            >
              Connect
            </a>
          )}
        </div>
      </div>
    </>
  );
}
