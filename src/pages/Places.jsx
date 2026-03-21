import { useEffect } from 'react'

const places = [
  {
    name: 'Tokyo, Japan',
    description: 'An amazing blend of ultramodern technology and rich tradition. From neon-lit streets to serene temples.',
    gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
  },
  {
    name: 'Paris, France',
    description: 'The city of light. Wandering through historic streets, enjoying world-class art, and amazing cuisine.',
    gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 99%, #fecfef 100%)',
  },
  {
    name: 'Rome, Italy',
    description: 'Walking through living history, incredible ancient architecture, and fantastic food at every corner.',
    gradient: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
  },
  {
    name: 'New York City, USA',
    description: 'The city that never sleeps. A vibrant melting pot of cultures, iconic skyscrapers, and endless energy.',
    gradient: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
  },
  {
    name: 'Sydney, Australia',
    description: 'Beautiful beaches, the stunning Opera House, and an incredible harbor setting with great weather.',
    gradient: 'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)',
  },
  {
    name: 'Cape Town, South Africa',
    description: 'Breathtaking landscapes with Table Mountain, amazing coastal drives, and rich diverse culture.',
    gradient: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
  },
]

function Places() {
  useEffect(() => {
    observeElements()
  }, [])

  return (
    <>
      <header className="hero" style={{ minHeight: '40vh' }}>
        <div className="hero-content">
          <h1>Places I&apos;ve Visited</h1>
          <p>A journey through the different corners of the world I&apos;ve explored.</p>
        </div>
      </header>

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

function observeElements() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1'
        entry.target.style.transform = 'translateY(0)'
      }
    })
  }, { threshold: 0.1 })

  const cards = document.querySelectorAll('.project-card')
  cards.forEach(card => {
    card.style.opacity = '0'
    card.style.transform = 'translateY(20px)'
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
    observer.observe(card)
  })
}

export default Places
