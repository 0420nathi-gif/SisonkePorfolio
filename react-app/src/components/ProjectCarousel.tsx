import { useEffect, useState } from 'react';
import ArrowIcon from './ArrowIcon';
import ProjectImage from './ProjectImage';
import projects from './projects';

function ProjectCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projects[activeIndex];

  useEffect(() => {
    if (activeProject.video) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % projects.length);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [activeProject.video]);

  function showPrevious() {
    setActiveIndex((currentIndex) => (currentIndex - 1 + projects.length) % projects.length);
  }

  function showNext() {
    setActiveIndex((currentIndex) => (currentIndex + 1) % projects.length);
  }

  return (
    <div className="project-carousel" role="region" aria-roledescription="carousel" aria-label="Selected projects">
      <div className="project-carousel-viewport" aria-live="polite">
        <article
          className="project-card project-carousel-slide"
          role="group"
          aria-roledescription="slide"
          aria-label={`${activeIndex + 1} of ${projects.length}`}
          key={activeProject.number}
        >
          <div className={`project-art ${activeProject.image || activeProject.video ? 'project-art-image-slide' : activeProject.className}`}>
            {activeProject.video ? (
              <video
                className="project-art-video"
                src={activeProject.video}
                aria-label={`${activeProject.title} video`}
                controls
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
              />
            ) : activeProject.image ? (
              <ProjectImage
                src={activeProject.image}
                alt={activeProject.imageAlt ?? `${activeProject.title} project artwork`}
                contained={activeProject.containImage}
              />
            ) : (
              <>
                <span className="project-art-mark">
                  {activeProject.mark.split('\n').map((line) => <span key={line}>{line}</span>)}
                </span>
                <span className="project-art-description">{activeProject.description}</span>
                <span className="project-art-number">{activeProject.number}</span>
              </>
            )}
          </div>
          <div className="project-meta">
            <div>
              <h3>{activeProject.title}</h3>
              <p>{activeProject.category}</p>
            </div>
            <span className="project-arrow"><ArrowIcon diagonal /></span>
          </div>
        </article>
      </div>
      <div className="project-carousel-controls">
        <div className="project-carousel-dots" aria-label="Choose a project">
          {projects.map((project, index) => (
            <button
              aria-label={`Show project ${index + 1}: ${project.title}`}
              aria-current={activeIndex === index ? 'true' : undefined}
              className={activeIndex === index ? 'carousel-dot active' : 'carousel-dot'}
              key={project.number}
              onClick={() => setActiveIndex(index)}
              type="button"
            />
          ))}
        </div>
        <div className="project-carousel-buttons">
          <button className="carousel-arrow" type="button" onClick={showPrevious} aria-label="Previous project">
            <ArrowIcon diagonal />
          </button>
          <button className="carousel-arrow carousel-arrow-next" type="button" onClick={showNext} aria-label="Next project">
            <ArrowIcon diagonal />
          </button>
        </div>
        <span className="carousel-count">{String(activeIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}</span>
      </div>
    </div>
  );
}

export default ProjectCarousel;
