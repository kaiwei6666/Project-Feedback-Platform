import './App.css'

function App() {
  return (
    <div className="app">
      <header className="hero">
        <p className="badge">Side Project Feedback Platform</p>

        <h1>Collect meaningful feedback for your side projects.</h1>

        <p className="hero-description">
          A platform where developers can publish their side projects,
          specify the feedback they need, and receive structured responses
          from real users.
        </p>

        <div className="hero-actions">
          <button className="primary-button">Explore Projects</button>
          <button className="secondary-button">Submit Your Project</button>
        </div>
      </header>

      <section className="features">
        <div className="feature-card">
          <h2>For Creators</h2>
          <p>
            Publish your side project, explain your goal, and collect feedback
            about usability, usefulness, clarity, and product direction.
          </p>
        </div>

        <div className="feature-card">
          <h2>For Users</h2>
          <p>
            Browse interesting side projects, try demos, and provide structured
            feedback that helps creators improve their products.
          </p>
        </div>

        <div className="feature-card">
          <h2>For Growth</h2>
          <p>
            Turn scattered comments into useful insights and help early-stage
            projects move from idea validation to long-term development.
          </p>
        </div>
      </section>
    </div>
  )
}

export default App