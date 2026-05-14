import { Link, useParams } from 'react-router-dom'
import projects from '../data/projects'

function ProjectDetailPage() {
  const { id } = useParams()
  const project = projects.find((item) => item.id === Number(id))

  if (!project) {
    return (
      <main className="project-detail-page">
        <Link className="back-link" to="/projects">
          ← Back to Projects
        </Link>

        <section className="detail-card">
          <h1>Project not found</h1>
          <p>The project you are looking for does not exist.</p>
        </section>
      </main>
    )
  }

  return (
    <main className="project-detail-page">
      <Link className="back-link" to="/projects">
        ← Back to Projects
      </Link>

      <section className="detail-card">
        <div className="detail-header">
          <div>
            <p className="badge">{project.developmentStage}</p>
            <h1>{project.title}</h1>
          </div>
        </div>

        <p className="detail-description">{project.fullDescription}</p>

        <div className="detail-section">
          <h2>Target Users</h2>
          <p>{project.targetUsers}</p>
        </div>

        <div className="detail-section">
          <h2>Tags</h2>
          <div className="tag-list">
            {project.tags.map((tag) => (
              <span className="tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="detail-section">
          <h2>Feedback Wanted</h2>
          <div className="tag-list">
            {project.feedbackTypes.map((type) => (
              <span className="tag" key={type}>
                {type}
              </span>
            ))}
          </div>
        </div>

        <div className="detail-actions">
          <a href={project.githubUrl} target="_blank" rel="noreferrer">
            View GitHub Repository
          </a>

          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noreferrer">
              Open Demo
            </a>
          )}
        </div>
      </section>
    </main>
  )
}

export default ProjectDetailPage