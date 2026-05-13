import projects from '../data/projects'
import ProjectCard from '../components/ProjectCard'

function ProjectListPage() {
  return (
    <main className="project-list-page">
      <section className="page-header">
        <p className="badge">Explore Projects</p>
        <h1>Browse side projects that need feedback.</h1>
        <p>
          Discover early-stage side projects, try their demos, and provide
          structured feedback to help creators improve their products.
        </p>
      </section>

      <section className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>
    </main>
  )
}

export default ProjectListPage