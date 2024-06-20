import { Description } from "./Description";

export const Projects = ({ projects }) => {
  return (
    <section className="section" id="proyects">
      <h2 className="section-title">Projects</h2>
      <div className="bd-grid">
        {projects.map((project) => (
          <Project key={project.company} {...project} />
        ))}
      </div>
    </section>
  );
};

const Project = ({ name, company, period, description, stack }) => {
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
        <span className="experience__proyect">{stack}</span>
        {description.map((desc, i) => <Description key={i} desc={desc} />)}
      </div>
    </div>
  );
};
