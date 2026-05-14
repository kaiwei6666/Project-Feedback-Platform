function HeroSection() {
  return (
    <header className="hero">
      <p className="badge">Side Project Feedback Platform</p>

      <h1>Collect meaningful feedback for your side projects.</h1>

      <p className="hero-description">
        A platform where developers can publish their side projects,
        specify the feedback they need, and receive structured responses
        from real users.
      </p>

      <div className="hero-actions">
        <a className="primary-button" href="/projects">
          Explore Projects
        </a>
        <a className="secondary-button" href="#">
          Submit Your Project
        </a>
      </div>
    </header>
  )
}

export default HeroSection