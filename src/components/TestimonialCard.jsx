export default function TestimonialCard({ name, text, avatar }) {
  return (
    <div style={{
      background: "var(--white)",
      borderRadius: 12,
      boxShadow: "0 2px 8px rgba(44,99,80,0.08)",
      padding: "1.2rem",
      maxWidth: 320
    }}>
      <div style={{display: "flex", alignItems: "center", gap: 10, marginBottom: 8}}>
        <img src={avatar} alt={name} style={{width: 40, borderRadius: "50%"}} />
        <strong>{name}</strong>
      </div>
      <p style={{fontSize: "1rem", color: "var(--text-dark)"}}>{text}</p>
    </div>
  );
}
