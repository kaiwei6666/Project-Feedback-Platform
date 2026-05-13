function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card-header">
        <h2>{project.title}</h2>
        <span className="stage-badge">{project.developmentStage}</span>
      </div>

      <p className="project-description">{project.shortDescription}</p>

      <div className="tag-list">
        {project.tags.map((tag) => (
          <span className="tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>

      <div className="feedback-types">
        <strong>Feedback wanted:</strong>
        <span>{project.feedbackTypes.join(', ')}</span>
      </div>

      <div className="project-links">
        <a href={project.githubUrl} target="_blank" rel="noreferrer">
          GitHub
        </a>

        {project.demoUrl && (
          <a href={project.demoUrl} target="_blank" rel="noreferrer">
            Demo
          </a>
        )}
      </div>
    </article>
  )
}

export default ProjectCard