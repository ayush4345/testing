import { useEffect } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import PageHeader from '../components/PageHeader'

function Home() {
  useScrollAnimation()

  const scrollToProjects = () => {
    const section = document.getElementById('projects')
    if (section) {
      section.scrollIntoView()
    }
  }

  return (
    <>
      <PageHeader 
        title="Welcome to My Portfolio"
        description="Crafting beautiful and responsive web experiences"
        buttonText="View My Work"
        onButtonClick={scrollToProjects}
      />

      <section id="projects" className="projects">
        <div className="container">
          <h2>Featured Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}></div>
              <h3>Project One</h3>
              <p>A modern web application built with responsive design principles.</p>
            </div>
            <div className="project-card">
              <div className="project-image" style={{ background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' }}></div>
              <h3>Project Two</h3>
              <p>Interactive dashboard with real-time data visualization.</p>
            </div>
            <div className="project-card">
              <div className="project-image" style={{ background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' }}></div>
              <h3>Project Three</h3>
              <p>E-commerce platform with seamless user experience.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>Why Choose Me?</h2>
          <div className="features-grid">
            <div className="feature">
              <h3>Responsive Design</h3>
              <p>Mobile-first approach ensuring great experience on all devices.</p>
            </div>
            <div className="feature">
              <h3>Modern Technologies</h3>
              <p>Built with the latest web standards and best practices.</p>
            </div>
            <div className="feature">
              <h3>Performance Focused</h3>
              <p>Optimized for speed and user engagement.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
