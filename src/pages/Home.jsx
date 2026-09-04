import ScrollSequence from "../components/ScrollSequence";

export default function Home() {
  return (
    <main className="home-page">
      <ScrollSequence frameCount={240}>
        <div className="home-content">

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">WELCOME TO DEMO GYM</p>

          <h1>
            TRAIN HARD.
            <br />
            LIVE STRONG.
          </h1>

          <p className="hero-text">
            Premium equipment. Expert guidance.
            Everything you need to become stronger.
          </p>

          <button>EXPLORE GYM</button>
        </div>
      </section>


      {/* SCROLL ANIMATION */}
      <section className="machine-section">

        <div className="machine-text">
          <p className="eyebrow">ENGINEERED FOR PERFORMANCE</p>

          <h2>
            POWER.
            <br />
            PRECISION.
            <br />
            PROGRESS.
          </h2>

          <p>
            Experience premium gym equipment designed
            for powerful and effective training.
          </p>

          <span>SCROLL TO EXPLORE ↓</span>
        </div>

      </section>


      {/* WHY DEMO GYM */}
      <section className="why-section">

        <p className="eyebrow">WHY DEMO GYM</p>

        <h2>MORE THAN A GYM.</h2>

        <div className="feature-grid">

          <div className="feature">
            <span>01</span>
            <h3>PREMIUM EQUIPMENT</h3>
            <p>
              Train with modern equipment built for
              performance, comfort and durability.
            </p>
          </div>

          <div className="feature">
            <span>02</span>
            <h3>EXPERT TRAINERS</h3>
            <p>
              Get guidance from experienced trainers
              who understand your fitness journey.
            </p>
          </div>

          <div className="feature">
            <span>03</span>
            <h3>RESULTS DRIVEN</h3>
            <p>
              Focused training and a motivating
              environment designed to help you progress.
            </p>
          </div>

        </div>

      </section>


      {/* FACILITIES */}
      <section className="facilities-section">

        <p className="eyebrow">OUR FACILITIES</p>

        <h2>
          EVERYTHING YOU NEED
          <br />
          TO TRAIN BETTER.
        </h2>

        <div className="facility-grid">

          <div>STRENGTH TRAINING</div>
          <div>CARDIO ZONE</div>
          <div>FUNCTIONAL TRAINING</div>
          <div>PERSONAL TRAINING</div>

        </div>

      </section>


      {/* MEMBERSHIP */}
      <section className="plans-section">

        <p className="eyebrow">MEMBERSHIP</p>

        <h2>CHOOSE YOUR LEVEL.</h2>

        <div className="plans" id="plan-details">

          <div className="plan">
            <h3>BASIC</h3>
            <strong>₹999</strong>
            <p>per month</p>
            <button>GET STARTED</button>
          </div>

          <div className="plan featured">
            <h3>PRO</h3>
            <strong>₹1,999</strong>
            <p>per month</p>
            <button>GET STARTED</button>
          </div>

          <div className="plan">
            <h3>ELITE</h3>
            <strong>₹2,999</strong>
            <p>per month</p>
            <button>GET STARTED</button>
          </div>

        </div>

      </section>


      {/* FINAL CTA */}
      <section className="cta-section">

        <p className="eyebrow">START TODAY</p>

        <h2>
          YOUR STRONGEST
          <br />
          CHAPTER STARTS HERE.
        </h2>

        <p>
          Stop waiting. Start training.
        </p>

        <button>JOIN DEMO GYM</button>

      </section>

        </div>
      </ScrollSequence>
    </main>
  );
}
