export default function Contact() {
  return (
    <div style={{maxWidth: 900, margin: "2rem auto", padding: 16}}>
      <h1>Contact & Connections</h1>
      <section>
        <h2>Mentor Connections</h2>
        <p>Email mentors directly from the <a href="/mentors">Mentors</a> page for expert advice.</p>
      </section>
      <section>
        <h2>Partnership Opportunities</h2>
        <p>
          Want to sponsor a podcast, run a workshop, or collaborate on content? <br />
          <a href="mailto:hello@sfk.com" style={{color: "var(--success-green)"}}>hello@sfk.com</a>
        </p>
      </section>
      <section>
        <h2>General Inquiries</h2>
        <p>For all other questions, use the email above or DM on <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a>!</p>
      </section>
      <section>
        <h2>Social Media</h2>
        <ul>
          <li><a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          <li><a href="https://youtube.com/" target="_blank" rel="noopener noreferrer">YouTube</a></li>
          <li><a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        </ul>
      </section>
    </div>
  );
}
