function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">DEMO GYM</div>

      <div className="nav-links">
        <a href="/">HOME</a>
        <a href="/#plan-details">PLANS</a>
        <a href="/details">DETAILS</a>
        <a href="/about">ABOUT</a>
        <a href="/contact">CONTACT</a>
      </div>
    </nav>
  );
}

export default Navbar;