function HomePage() {
  return (
    <main>
      <section className="hero frenchie-card">
        <h1>Futu-Frenchie Snack Shack</h1>

        <p>Fresh ingredients. Feed your fuel.</p>

        <img
          src="/images/img1.png"
          alt="Beautiful restaurant signature meal"
        />
      </section>

      <section className="frenchie-card">
        <h2>Welcome</h2>

        <p>
          Futu-Frenchie Snack Shack combines modern takeout with fresh local
          ingredients. Our mission is to provide an inclusive atmosphere,
          exceptional service, nutritious and flavorful dishes for every guest.
        </p>

        <div className="utensil-icons" aria-hidden="true">
          {Array.from({ length: 50 }).map((_, index) => (
            <span className="utensil-icon" key={index}>
              🍴
            </span>
          ))}
        </div>
      </section>

      <section className="frenchie-card">
        <h2>Our Dining Experience</h2>

        <img
          src="/images/img2.png"
          alt="Elegant restaurant dining room"
        />

        <p>
          Enjoy a comfortable nutritious takeout or dine-in experience perfect
          for anyone on-the-go, humans, bulldogs and cyborgs. All welcomed! :)
        </p>
      </section>
    </main>
  );
}

export default HomePage;