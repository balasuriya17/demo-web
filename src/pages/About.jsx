export default function About() {
  return (
    <main className="about-page">

      {/* HERO */}
      <section className="about-hero">
        <p className="about-label">ABOUT DEMO GYM</p>

        <h1>
          MORE THAN
          <br />
          A GYM.
        </h1>

        <p className="about-intro">
          DEMO GYM is built for people who want to train
          with purpose, consistency and determination.
        </p>
      </section>


      {/* OUR STORY */}
      <section className="about-story">

        <div className="about-section-number">
          01
        </div>

        <div>
          <p className="about-label">OUR STORY</p>

          <h2>
            BUILT AROUND
            <br />
            YOUR GOALS.
          </h2>

          <p className="about-text">
            DEMO GYM was created with one simple idea:
            create a training environment where everyone
            can focus on becoming stronger and healthier.
          </p>

          <p className="about-text">
            From premium equipment to dedicated training
            spaces, every part of the gym is designed to
            make your training experience better.
          </p>
        </div>

      </section>


      {/* MISSION */}
      <section className="about-mission">

        <p className="about-label">OUR MISSION</p>

        <h2>
          TRAIN WITH
          <br />
          PURPOSE.
        </h2>

        <p>
          We believe progress comes from consistency,
          discipline and the right environment.
        </p>

      </section>


      {/* VALUES */}
      <section className="about-values">

        <div className="values-heading">
          <p className="about-label">WHAT WE STAND FOR</p>

          <h2>
            OUR
            <br />
            VALUES.
          </h2>
        </div>

        <div className="values-list">

          <div className="value">
            <span>01</span>

            <div>
              <h3>DISCIPLINE</h3>

              <p>
                Build consistency and make training
                part of your lifestyle.
              </p>
            </div>
          </div>


          <div className="value">
            <span>02</span>

            <div>
              <h3>PROGRESS</h3>

              <p>
                Focus on steady improvement and
                meaningful results.
              </p>
            </div>
          </div>


          <div className="value">
            <span>03</span>

            <div>
              <h3>COMMUNITY</h3>

              <p>
                Train in an environment where
                everyone is encouraged to improve.
              </p>
            </div>
          </div>


          <div className="value">
            <span>04</span>

            <div>
              <h3>QUALITY</h3>

              <p>
                From equipment to facilities,
                quality matters.
              </p>
            </div>
          </div>

        </div>

      </section>


      {/* FINAL STATEMENT */}
      <section className="about-final">

        <p className="about-label">
          DEMO GYM
        </p>

        <h2>
          YOUR TRAINING.
          <br />
          YOUR JOURNEY.
          <br />
          YOUR PROGRESS.
        </h2>

      </section>

    </main>
  );
}