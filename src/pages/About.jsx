import { useScrollAnimation } from '../hooks/useScrollAnimation'
import PageHeader from '../components/PageHeader'
import skills from '../data/skills.json'
import experience from '../data/experience.json'

function About() {
  useScrollAnimation()

  return (
    <>
      <PageHeader title="About Me" />

      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Who I Am</h2>
              <p>
                I&apos;m a passionate web developer with over 5 years of experience creating beautiful,
                functional, and user-friendly websites. My journey in web development started with
                a curiosity about how websites work, and it has evolved into a full-fledged career.
              </p>
              <p>
                I specialize in responsive design, modern JavaScript frameworks, and creating
                optimal user experiences. I believe that great web design is not just about aesthetics
                but also about functionality and accessibility.
              </p>
            </div>
            <div className="about-image">
              <div className="placeholder-image" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}></div>
            </div>
          </div>
        </div>
      </section>

      <section className="skills">
        <div className="container">
          <h2>My Skills</h2>
          <div className="skills-grid">
            {skills.map((skillGroup) => (
              <div className="skill" key={skillGroup.category}>
                <h3>{skillGroup.category}</h3>
                <ul>
                  {skillGroup.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="experience">
        <div className="container">
          <h2>Experience</h2>
          <div className="timeline">
            {experience.map((item, index) => (
              <div className="timeline-item" key={index}>
                <h3>{item.title}</h3>
                <p className="date">{item.date}</p>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default About
