export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        DEMO GYM
      </div>

      <div className="footer-links">
        <a href="/">Home</a>
        <a href="/plans">Plans</a>
        <a href="/details">Details</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>

      <div className="footer-bottom">
        <span>© 2026 DEMO GYM</span>

        <a href="/admin/login">
          Admin Login
        </a>
      </div>
    </footer>
  );
}