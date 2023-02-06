import collage from "./collage.png"

export const Main = () => {
  return (
    <main>
      <section className="first-section">
        <img className="first-section-image" src={collage} alt="collage-photo" />
      </section>
      <section className="second-section">
        <h1 className="second-section-header">Online Experiences</h1>
        <p className="second-section-paragraph">Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
      </section>
    </main>
  );
};
