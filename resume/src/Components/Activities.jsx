import { Description } from "./Description";

export const Activities = ({activities}) => {
  return (
    <section className="section" id="activities">
      <h2 className="section-title">Activities</h2>
      <div className="bd-grid">
        {activities.map((activity) => (
          <Activity key={activity.company} {...activity} />
        ))}
      </div>
    </section>
  )
}

const Activity = ({ name, company, period, description }) => {
  return (
    <div className="experience__content">
      <div className="experience__time">
        <span className="experience__rounder"></span>
        <span className="experience__line"></span>
      </div>
      <div className="experience__data bd-grid">
        <h3 className="experience__title">
          {name} 
        </h3>
        <span className="experience__proyect">{company}</span>
        {description.map((desc, i) => <Description key={i} desc={desc} />)}
      </div>
    </div>
  );
};
