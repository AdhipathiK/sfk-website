export default function PodcastCard({ number, title, desc, image, url }) {
  return (
    <a href={url} style={{
      display: "flex",
      flexDirection: "column",
      background: "var(--white)",
      borderRadius: 10,
      padding: "1rem",
      textDecoration: "none",
      color: "inherit",
      minWidth: 220
    }}>
      <img src={image} alt={title} style={{borderRadius: 6, width: "100%", height: 90, objectFit: "cover"}} />
      <div style={{marginTop: 8}}>
        <span style={{fontWeight: 700, color: "var(--success-green)"}}>Episode {number}</span>
        <h4 style={{margin: "0.3rem 0"}}>{title}</h4>
        <p style={{fontSize: "0.98rem"}}>{desc}</p>
      </div>
    </a>
  );
}
