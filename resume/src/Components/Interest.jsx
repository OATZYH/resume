import { Description } from "./Description";

export const Interests = ({interests}) => {
  return (
    <section className="section" id="interest">
      <h2 className="section-title">Interest</h2>
      <div className="bd-grid">
        {interests.map((interest) => (
          <Interest key={interest.name} {...interest} />
        ))}
      </div>
    </section>
  );
};

const Interest = ({ name, description }) => {
  return (
    <div className="experience__content">
      <div className="experience__time">
        <span className="experience__rounder"></span>
        <span className="experience__line"></span>
      </div>
      <div className="experience__data bd-grid">
        {name} : {description}
      </div>
    </div>
  );
};




