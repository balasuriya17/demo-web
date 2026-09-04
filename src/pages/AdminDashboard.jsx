export default function AdminDashboard() {
  const handleLogout = () => {
    localStorage.removeItem("adminLoggedIn");
    window.location.assign("/admin/login");
  };

  const stats = [
    {
      title: "WEBSITE VISITORS",
      number: "1,284",
      change: "+18%",
      description: "Visitors this month",
    },
    {
      title: "MEMBERSHIP INTEREST",
      number: "86",
      change: "+12%",
      description: "People interested in plans",
    },
    {
      title: "NEW MEMBERS",
      number: "24",
      change: "+8%",
      description: "New members this month",
    },
    {
      title: "CONTACT REQUESTS",
      number: "18",
      change: "+5%",
      description: "New enquiries",
    },
  ];

  const plans = [
    {
      name: "BASIC",
      interested: 32,
      percentage: 37,
    },
    {
      name: "PRO",
      interested: 41,
      percentage: 48,
    },
    {
      name: "ELITE",
      interested: 13,
      percentage: 15,
    },
  ];

  const recentActivity = [
    {
      name: "Website Visitor",
      action: "Interested in PRO plan",
      time: "10 minutes ago",
    },
    {
      name: "Website Visitor",
      action: "Viewed membership plans",
      time: "25 minutes ago",
    },
    {
      name: "New Enquiry",
      action: "Interested in BASIC plan",
      time: "1 hour ago",
    },
    {
      name: "Website Visitor",
      action: "Contact form submitted",
      time: "2 hours ago",
    },
    {
      name: "New Enquiry",
      action: "Interested in ELITE plan",
      time: "3 hours ago",
    },
  ];

  return (
    <main className="admin-dashboard">

      {/* HEADER */}
      <header className="admin-header">
        <div>
          <p className="admin-label">DEMO GYM / ADMIN</p>

          <h1>
            DASH
            <br />
            BOARD.
          </h1>
        </div>

        <button
          className="admin-logout"
          onClick={handleLogout}
        >
          LOGOUT
        </button>
      </header>


      {/* WELCOME */}
      <section className="admin-welcome">
        <p>WELCOME BACK, ADMIN.</p>

        <h2>
          YOUR GYM.
          <br />
          AT A GLANCE.
        </h2>
      </section>


      {/* MAIN STATS */}
      <section className="admin-stats">

        {stats.map((stat) => (
          <div className="admin-stat-card" key={stat.title}>

            <div className="admin-stat-top">
              <span>{stat.title}</span>
              <span className="stat-change">
                {stat.change}
              </span>
            </div>

            <h3>{stat.number}</h3>

            <p>{stat.description}</p>

          </div>
        ))}

      </section>


      {/* PLAN INTEREST */}
      <section className="plan-interest-section">

        <div className="section-heading">
          <p className="admin-label">
            MEMBERSHIP ANALYTICS
          </p>

          <h2>
            WHICH PLAN
            <br />
            DO THEY WANT?
          </h2>
        </div>


        <div className="plan-interest">

          {plans.map((plan) => (
            <div className="plan-row" key={plan.name}>

              <div className="plan-row-info">
                <span className="plan-name">
                  {plan.name}
                </span>

                <span className="plan-number">
                  {plan.interested} INTERESTED
                </span>
              </div>

              <div className="plan-bar">
                <div
                  className="plan-bar-fill"
                  style={{
                    width: `${plan.percentage}%`,
                  }}
                ></div>
              </div>

              <div className="plan-percentage">
                {plan.percentage}%
              </div>

            </div>
          ))}

        </div>

      </section>


      {/* ACTIVITY + QUICK ACTIONS */}
      <section className="admin-bottom-grid">

        {/* RECENT ACTIVITY */}
        <div className="recent-activity">

          <div className="section-title-row">
            <p className="admin-label">
              RECENT ACTIVITY
            </p>

            <span>LIVE</span>
          </div>

          <div className="activity-list">

            {recentActivity.map((activity, index) => (
              <div
                className="activity-item"
                key={index}
              >

                <div>
                  <h4>{activity.name}</h4>
                  <p>{activity.action}</p>
                </div>

                <span>{activity.time}</span>

              </div>
            ))}

          </div>

        </div>


        {/* QUICK ACTIONS */}
        <div className="admin-quick-actions">

          <p className="admin-label">
            QUICK ACTIONS
          </p>

          <h2>
            MANAGE
            <br />
            YOUR GYM.
          </h2>

          <button
            onClick={() => window.location.assign("/admin/members")}
          >
            MANAGE MEMBERS →
          </button>

          <button
            onClick={() => window.location.assign("/admin/plans")}
          >
            MANAGE PLANS →
          </button>

          <button
            onClick={() => window.location.assign("/admin/trainers")}
          >
            MANAGE TRAINERS →
          </button>

          <button
            onClick={() => window.location.assign("/admin/contacts")}
          >
            VIEW ENQUIRIES →
          </button>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="admin-footer">

        <span>DEMO GYM ADMIN PANEL</span>

        <span>© 2026 DEMO GYM</span>

      </footer>

    </main>
  );
}