export default function Details() {
  const equipmentCategories = [
    {
      category: "CARDIO",
      description: "Build endurance and improve cardiovascular fitness.",
      equipment: [
        {
          name: "TREADMILL",
          details:
            "High-performance cardio machine for walking, jogging and running workouts.",
        },
        {
          name: "ELLIPTICAL",
          details:
            "Low-impact cardio equipment designed for smooth full-body movement.",
        },
        {
          name: "EXERCISE BIKE",
          details:
            "Adjustable resistance bike for effective indoor cycling sessions.",
        },
        {
          name: "STAIR CLIMBER",
          details:
            "Intense lower-body cardio equipment that simulates climbing stairs.",
        },
        {
          name: "ROWING MACHINE",
          details:
            "Full-body cardio machine combining strength and endurance training.",
        },
      ],
    },

    {
      category: "CHEST",
      description: "Develop strength and power across your upper body.",
      equipment: [
        {
          name: "CHEST PRESS",
          details:
            "Controlled pressing movement designed to target the chest, shoulders and triceps.",
        },
        {
          name: "INCLINE CHEST PRESS",
          details:
            "Inclined pressing movement that emphasizes the upper chest.",
        },
        {
          name: "PEC DECK",
          details:
            "Isolation machine designed to effectively train the chest muscles.",
        },
        {
          name: "BENCH PRESS",
          details:
            "Classic free-weight exercise for developing overall chest strength.",
        },
        {
          name: "CABLE CROSSOVER",
          details:
            "Versatile cable system for chest exercises and controlled resistance training.",
        },
      ],
    },

    {
      category: "SHOULDERS",
      description: "Build strong and stable shoulders.",
      equipment: [
        {
          name: "SHOULDER PRESS",
          details:
            "Dedicated pressing machine for developing shoulder strength.",
        },
        {
          name: "LATERAL RAISE",
          details:
            "Isolation equipment focused on the side shoulder muscles.",
        },
        {
          name: "REAR DELT MACHINE",
          details:
            "Designed to target the rear shoulder muscles with controlled resistance.",
        },
      ],
    },

    {
      category: "BACK",
      description: "Develop a stronger and more powerful back.",
      equipment: [
        {
          name: "LAT PULLDOWN",
          details:
            "Vertical pulling machine designed to train the upper back and lats.",
        },
        {
          name: "SEATED ROW",
          details:
            "Horizontal pulling movement for developing back strength and control.",
        },
        {
          name: "ASSISTED PULL-UP",
          details:
            "Adjustable assistance system for progressive pull-up training.",
        },
        {
          name: "BACK EXTENSION",
          details:
            "Equipment designed to strengthen the lower back and posterior chain.",
        },
      ],
    },

    {
      category: "LEGS",
      description: "Build lower-body strength and stability.",
      equipment: [
        {
          name: "LEG PRESS",
          details:
            "Heavy-duty machine designed for controlled lower-body strength training.",
        },
        {
          name: "LEG EXTENSION",
          details:
            "Isolation machine focused on strengthening the quadriceps.",
        },
        {
          name: "LEG CURL",
          details:
            "Machine designed to target and strengthen the hamstrings.",
        },
        {
          name: "HACK SQUAT",
          details:
            "Supported squat machine for powerful lower-body training.",
        },
        {
          name: "CALF RAISE",
          details:
            "Dedicated equipment for focused calf muscle training.",
        },
      ],
    },

    {
      category: "FREE WEIGHTS",
      description: "Train with traditional strength equipment.",
      equipment: [
        {
          name: "DUMBBELLS",
          details:
            "A wide range of free weights for versatile strength exercises.",
        },
        {
          name: "BARBELLS",
          details:
            "Professional barbells suitable for compound strength movements.",
        },
        {
          name: "SQUAT RACK",
          details:
            "Stable training station for squats and other barbell exercises.",
        },
        {
          name: "SMITH MACHINE",
          details:
            "Guided barbell system providing controlled resistance training.",
        },
        {
          name: "ADJUSTABLE BENCH",
          details:
            "Multi-position bench suitable for a wide variety of strength exercises.",
        },
      ],
    },
  ];

  return (
    <main className="details-page">

      {/* HEADER */}
      <section className="details-hero">
        <p className="details-label">DEMO GYM / EQUIPMENT</p>

        <h1>
          BUILT FOR
          <br />
          PERFORMANCE.
        </h1>

        <p className="details-intro">
          Premium training equipment designed to support
          every stage of your fitness journey.
        </p>
      </section>


      {/* EQUIPMENT */}
      <section className="equipment-section">

        {equipmentCategories.map((category) => (
          <div className="equipment-category" key={category.category}>

            <div className="category-header">
              <div>
                <p className="details-label">{category.category}</p>

                <h2>{category.category}</h2>
              </div>

              <p className="category-description">
                {category.description}
              </p>
            </div>


            <div className="equipment-list">

              {category.equipment.map((item, index) => (
                <div
                  className="equipment-item"
                  key={item.name}
                >

                  <span className="equipment-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h3>{item.name}</h3>

                    <p>{item.details}</p>
                  </div>

                </div>
              ))}

            </div>

          </div>
        ))}

      </section>


      {/* GYM INFORMATION */}
      <section className="gym-information">

        <div>
          <p className="details-label">GYM HOURS</p>
          <h3>05:00 AM — 11:00 PM</h3>
        </div>

        <div>
          <p className="details-label">OPEN</p>
          <h3>7 DAYS A WEEK</h3>
        </div>

        <div>
          <p className="details-label">LOCATION</p>
          <h3>DEMO GYM</h3>
        </div>

      </section>


      {/* BOTTOM */}
      <section className="details-bottom">

        <p className="details-label">
          DEMO GYM
        </p>

        <h2>
          TRAIN WITH
          <br />
          PURPOSE.
        </h2>

      </section>

    </main>
  );
}