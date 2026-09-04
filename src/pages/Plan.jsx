export default function Plans() {
  const plans = [
    {
      name: "BASIC",
      price: "₹999",
      features: [
        "Full Gym Access",
        "Cardio Zone",
        "Locker Access",
      ],
    },
    {
      name: "PRO",
      price: "₹1,999",
      features: [
        "Everything in Basic",
        "Personal Training",
        "Workout Planning",
      ],
    },
    {
      name: "ELITE",
      price: "₹2,999",
      features: [
        "Everything in Pro",
        "Dedicated Trainer",
        "Customized Training",
      ],
    },
  ];

  return (
    <div className="plans-page">
      <div className="plans-header">
        <p>DEMO GYM MEMBERSHIP</p>
        <h1>CHOOSE YOUR PLAN.</h1>
        <span>Find the membership that fits your goals.</span>
      </div>

      <div className="plans-grid">
        {plans.map((plan) => (
          <div className="plan-card" key={plan.name}>
            <h2>{plan.name}</h2>

            <h3>{plan.price}</h3>

            <p>PER MONTH</p>

            <div className="plan-features">
              {plan.features.map((feature) => (
                <div key={feature}>✓ {feature}</div>
              ))}
            </div>

            <button>JOIN NOW</button>
          </div>
        ))}
      </div>
    </div>
  );
}