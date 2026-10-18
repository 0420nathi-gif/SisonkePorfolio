import ArrowIcon from './ArrowIcon';
import projects from './projects';

type ProjectGridProps = {
  limit?: number;
};

function ProjectGrid({ limit }: ProjectGridProps) {
  const visibleProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <div className="project-grid">
      {visibleProjects.map((project) => (
        <article className="project-card" key={project.number}>
          <div className={`project-art ${project.className}`}>
            <span className="project-art-mark">
              {project.mark.split('\n').map((line) => <span key={line}>{line}</span>)}
            </span>
            <span className="project-art-description">{project.description}</span>
            <span className="project-art-number">{project.number}</span>
          </div>
          <div className="project-meta">
            <div>
              <h3>{project.title}</h3>
              <p>{project.category}</p>
            </div>
            <span className="project-arrow"><ArrowIcon diagonal /></span>
          </div>
        </article>
      ))}
    </div>
  );
}

export default ProjectGrid;
