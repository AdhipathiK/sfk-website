import "../components/YouTubeThumb.css";

export default function YouTubeThumb({ link, alt }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="ytIconBox">
      <span className="ytIconFlex">
        {/* Play Triangle SVG */}
        <svg
          className="ytPlayIcon"
          viewBox="0 0 32 32"
          fill="#fff"
        >
          <circle cx="16" cy="16" r="16" fill="#ea4335" />
          <polygon points="13,10 24,16 13,22" fill="#fff" />
        </svg>
        <span className="ytAltText">{alt}</span>
      </span>
    </a>
  );
}
