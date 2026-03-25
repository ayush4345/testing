import { useScrollAnimation } from '../hooks/useScrollAnimation'
import PageHeader from '../components/PageHeader'
import places from '../data/places.json'

function Places() {
  useScrollAnimation('.project-card')

  return (
    <>
      <PageHeader 
        title="Places I&apos;ve Visited"
        description="A journey through the different corners of the world I&apos;ve explored."
      />

      <section className="projects">
        <div className="container">
          <h2>My Travel Log</h2>
          <div className="projects-grid">
            {places.map((place) => (
              <div className="project-card" key={place.name}>
                <div className="project-image" style={{ background: place.gradient }}></div>
                <h3>{place.name}</h3>
                <p>{place.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Places
