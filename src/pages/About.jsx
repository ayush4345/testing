import { useScrollAnimation } from '../hooks/useScrollAnimation'

function About() {
  useScrollAnimation()

  return (
    <>
      <div className="page-header">
        <h1>About Me</h1>
      </div>

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
            <div className="skill">
              <h3>Frontend</h3>
              <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>React</li>
              </ul>
            </div>
            <div className="skill">
              <h3>Backend</h3>
              <ul>
                <li>Node.js</li>
                <li>Python</li>
                <li>MongoDB</li>
                <li>PostgreSQL</li>
              </ul>
            </div>
            <div className="skill">
              <h3>Tools &amp; Technologies</h3>
              <ul>
                <li>Git</li>
                <li>Docker</li>
                <li>Webpack</li>
                <li>REST APIs</li>
              </ul>
            </div>
            <div className="skill">
              <h3>Design</h3>
              <ul>
                <li>UI/UX Design</li>
                <li>Figma</li>
                <li>Responsive Design</li>
                <li>Accessibility</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="experience">
        <div className="container">
          <h2>Experience</h2>
          <div className="timeline">
            <div className="timeline-item">
              <h3>Senior Web Developer</h3>
              <p className="date">2023 - Present</p>
              <p>Leading frontend development and mentoring junior developers on best practices.</p>
            </div>
            <div className="timeline-item">
              <h3>Full Stack Developer</h3>
              <p className="date">2021 - 2023</p>
              <p>Developing and maintaining multiple web applications with focus on user experience.</p>
            </div>
            <div className="timeline-item">
              <h3>Junior Web Developer</h3>
              <p className="date">2019 - 2021</p>
              <p>Started career building responsive websites and learning modern web technologies.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
