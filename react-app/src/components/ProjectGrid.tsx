import ArrowIcon from './ArrowIcon';
import ProjectImage from './ProjectImage';
import projects, { getProjectHref } from './projects';

type ProjectGridProps = {
  limit?: number;
};

function ProjectGrid({ limit }: ProjectGridProps) {
  const visibleProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <div className="project-grid">
      {visibleProjects.map((project) => (
        <article className="project-card" key={project.number}>
          <div className={`project-art ${project.image || project.video ? 'project-art-image-slide' : project.className}`}>
            {project.video ? (
              <video
                className="project-art-video"
                src={project.video}
                aria-label={`${project.title} video`}
                autoPlay
                controls
                loop
                muted
                playsInline
                preload="auto"
              />
            ) : project.image ? (
              <ProjectImage
                src={project.image}
                alt={project.imageAlt ?? `${project.title} project artwork`}
                contained={project.containImage}
              />
            ) : (
              <>
                <span className="project-art-mark">
                  {project.mark.split('\n').map((line) => <span key={line}>{line}</span>)}
                </span>
                <span className="project-art-description">{project.description}</span>
                <span className="project-art-number">{project.number}</span>
              </>
            )}
          </div>
          <div className="project-meta">
            <div>
              <h3><a href={getProjectHref(project)}>{project.title}</a></h3>
              <p>{project.category}</p>
            </div>
            <a
              className="project-arrow"
              href={getProjectHref(project)}
              aria-label={`Read the ${project.title} case study`}
            >
              <ArrowIcon diagonal />
            </a>
          </div>
          <p className="project-summary">{project.summary}</p>
        </article>
      ))}
    </div>
  );
}

export default ProjectGrid;
