import { useState } from "react";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();

    if (email && password) {
      localStorage.setItem("adminLoggedIn", "true");
      window.location.assign("/admin/dashboard");
    }
  };

  return (
    <main className="admin-login">
      <div className="admin-login-container">
        <p className="admin-login-label">DEMO GYM / ADMIN</p>
        <h1>
          OWNER
          <br />
          LOGIN.
        </h1>
        <p className="admin-login-description">
          Manage memberships, trainers, and the daily operations of DEMO GYM.
        </p>

        <form onSubmit={handleLogin}>
          <div className="admin-login-field">
            <label htmlFor="admin-email">EMAIL</label>
            <input
              id="admin-email"
              type="email"
              placeholder="Enter admin email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>

          <div className="admin-login-field">
            <label htmlFor="admin-password">PASSWORD</label>
            <input
              id="admin-password"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>

          <button type="submit">LOGIN →</button>
        </form>

        <p className="admin-demo-note">Authorized personnel only.</p>
      </div>
    </main>
  );
}