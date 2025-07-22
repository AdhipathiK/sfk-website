import React, { useState } from "react";
import { mentors } from "../data/mentors";
import MentorCard from "../components/MentorCard";

// Get unique roles/categories (chips)
const allTags = Array.from(
  new Set(
    mentors
      .flatMap(m => (m.tags || [m.role]).map(tag => tag?.trim()))
      .filter(Boolean)
  )
);

export default function Mentors() {
  const [selectedTag, setSelectedTag] = useState(null);
  const [spotlight, setSpotlight] = useState(null);

  // Filtered mentors by tag/chip, or show all if no tag selected
  const filtered = selectedTag
    ? mentors.filter(m =>
        (m.tags || [m.role])
          .map(t => t?.trim())
          .includes(selectedTag)
      )
    : mentors;

  // On shuffle, randomize mentor list (keep spotlight if set)
  function shuffleMentors() {
    let arr = [...filtered];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    setSpotlight(arr[0]?.name || null);
  }

  return (
    <>
      <style>{`
  :root {
    --navy: #183a63;
    --navy-light: #235094;
    --gray-bg: #f7fafc;
    --chip-bg: #eaf2ff;
    --success-green: #1fd95e;
    --success-glow: #65f18955;
  }
  .mentors-page {
    max-width: 980px;
    margin: 2rem auto;
    padding: 1.5rem;
    font-family: 'Segoe UI', sans-serif;
    background: var(--gray-bg);
    border-radius: 14px;
    box-shadow: 0 4px 32px 0 #1e2c5d07;
  }
  .mentors-header {
    text-align: center;
    margin-bottom: 1.5rem;
  }
  .mentors-header h1 {
    color: var(--navy);
    font-weight: 800;
    letter-spacing: 1px;
  }
  .chips-row {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    margin-bottom: 1.5rem;
  }
  .chip {
    background: var(--chip-bg);
    color: var(--navy-light);
    border-radius: 16px;
    padding: 5px 15px;
    font-size: 1.03rem;
    border: 2px solid transparent;
    cursor: pointer;
    transition: background 0.17s, color 0.17s, border 0.18s;
  }
  .chip.selected {
    background: linear-gradient(90deg, var(--success-green) 60%, #c7f9d2 100%);
    color: var(--navy);
    font-weight: bold;
    border: 2px solid var(--success-green);
    box-shadow: 0 2px 10px var(--success-glow);
  }
  .shuffle-btn {
    display: block;
    margin: 0.8rem auto 2rem auto;
    padding: 0.62rem 2.1rem;
    background: linear-gradient(90deg, var(--navy), var(--success-green) 90%);
    color: #fff;
    border: none;
    border-radius: 9px;
    font-size: 1.13rem;
    font-weight: 700;
    cursor: pointer;
    box-shadow: 0 2px 10px var(--success-glow);
    transition: background 0.18s, box-shadow 0.17s;
  }
  .shuffle-btn:hover {
    background: linear-gradient(90deg, #1550af, #1fd95e 90%);
    box-shadow: 0 6px 24px var(--success-glow);
  }
  .mentors-list {
    display: flex;
    flex-wrap: wrap;
    gap: 28px;
    justify-content: center;
  }
  /* Spotlight mentor card highlight (example) */
  .mentor-card.spotlight {
    border: 2.5px solid var(--success-green);
    box-shadow: 0 2px 24px var(--success-glow);
    background: #f5fff9;
  }
  @media (max-width: 800px) {
    .mentors-page { padding: 0.7rem; }
    .mentors-list { gap: 18px; }
  }
  @media (max-width: 600px) {
    .mentors-header h1 {
      font-size: 1.35rem;
      margin-bottom: 0.5rem;
    }
    .mentors-page { 
      padding: 0.2rem;
      border-radius: 0;
      background: #fff;
    }
    .mentors-list {
      flex-direction: column;
      gap: 14px;
      align-items: stretch;
    }
  }
`}</style>

      <div className="mentors-page">
        <div className="mentors-header">
          <h1 style={{letterSpacing: 1, fontWeight: 700, marginBottom: 2}}>
            Meet Our Mentors
          </h1>
          <p style={{color: "#666", fontSize: "1.09rem"}}>
            Tap a tag to filter, or “Surprise Me” for a new spotlight!
          </p>
        </div>
        {/* Category Chips */}
        <div className="chips-row">
          <button
            className={`chip${!selectedTag ? " selected" : ""}`}
            onClick={() => {
              setSelectedTag(null);
              setSpotlight(null);
            }}
          >
            All
          </button>
          {allTags.map(tag => (
            <button
              className={`chip${selectedTag === tag ? " selected" : ""}`}
              onClick={() => {
                setSelectedTag(tag);
                setSpotlight(null);
              }}
              key={tag}
            >
              {tag}
            </button>
          ))}
        </div>
        {/* Shuffle Button */}
        <button className="shuffle-btn" onClick={shuffleMentors}>
          🎲 Surprise Me
        </button>
        <div className="mentors-list">
          {filtered.map((m, idx) => (
            <MentorCard
              key={m.name + idx}
              {...m}
              spotlight={spotlight === m.name}
              onSpotlight={() => setSpotlight(m.name)}
            />
          ))}
        </div>
      </div>
    </>
  );
}
