function Navbar() {
  const goToPlans = (e) => {
    e.preventDefault();

    const plans = document.getElementById("plan-details");

    if (plans) {
      plans.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">DEMO GYM</div>

      <div className="nav-links">
        <a href="/demo-web/#/">HOME</a>

        <a href="#plan-details" onClick={goToPlans}>
          PLANS
        </a>

        <a href="/demo-web/#/details">DETAILS</a>

        <a href="/demo-web/#/about">ABOUT</a>

        <a href="/demo-web/#/contact">CONTACT</a>
      </div>
    </nav>
  );
}

export default Navbar;
