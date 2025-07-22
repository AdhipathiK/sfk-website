export default function ServiceCard({ icon, title, desc }) {
  return (
    <div style={{
      background: "var(--white)",
      borderRadius: 12,
      padding: "1rem",
      margin: "0.5rem",
      minWidth: 120,
      boxShadow: "0 2px 8px rgba(44,99,80,0.07)",
      textAlign: "center"
    }}>
      <span style={{fontSize: "2rem"}}>{icon}</span>
      <h4>{title}</h4>
      <p>{desc}</p>
    </div>
  );
}
