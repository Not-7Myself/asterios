import { useScrollReveal } from "./useScrollReveal";

import logo from "./logo.png";
import StarryBackground from "./starry";

import astro from "./Astro.png";

function Home() {
  useScrollReveal(".text1", 400);
  useScrollReveal(".text2", 200);

  useScrollReveal(".about-text", 200);
  useScrollReveal(".about-logo", 400);

  useScrollReveal(".card", 200);

  return (
    <>
      <StarryBackground />

      <div className="hero">
        <div className="hero-image">
          <img src={astro} alt="Hero" />
        </div>

        <div className="hero-text">
          <h1 className="text1">ASTRAOIS</h1>
          <h2 className="text2">Resourcing Wisely, Preserving Worlds</h2>
          <h4 className="text2">A new era of Resource Extraction</h4>
        </div>
      </div>
      <div className="about-us">
        <div className="about-text ">
          <h2>About Us</h2>
          <p>
            Our Company is a multi-stellar company spread over the whole
            milkyway, with only one goal, to help make new planets independant
            using the means of Asteroid Mining. We provide new planets with raw
            materials to build up their economy and help people live a better
            life.
          </p>
        </div>
        <div className="about-logo ">
          <img src={logo} alt="Company Logo" />
        </div>
      </div>

      <section class="our-plan" id="2">
        <div class="card-container">
          <div class="card">
            <h3>Probe Landing</h3>
            <p>
              On landing the probe first stabalizes the asteroid by stopping its
              rotation, then Astraios initiates its first step, by forming a
              dome-like structure around the concentrated mine.
            </p>
          </div>
          <div class="card">
            <h3>Ionization of minerals into gases</h3>
            <p>
              To compensate for the lack of gravity, and hence having to drop
              the conventional idea of drilling machines, solar-powered lasers
              concentrate light and heat energy from Kepler-186 to create holes,
              and ionize the substances on the asteroids to gas, and compressing
              them to make sure they’re fit for extraction.
            </p>
          </div>
          <div class="card">
            <h3>Extraction of minerals</h3>
            <p>
              Dense and light materials are centrifuged, and hence the
              extraction of our valuable elements takes place. Our robots store
              these elements in dedicated compartments, which are later
              collected by us in specified time intervals.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
