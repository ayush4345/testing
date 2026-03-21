import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [formMessage, setFormMessage] = useState({ text: '', type: '' })

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, email, subject, message } = formData

    if (!name || !email || !subject || !message) {
      setFormMessage({ text: 'Please fill in all fields.', type: 'error' })
      return
    }

    if (!validateEmail(email)) {
      setFormMessage({ text: 'Please enter a valid email address.', type: 'error' })
      return
    }

    setFormMessage({ text: 'Sending...', type: 'info' })

    setTimeout(() => {
      setFormMessage({ text: 'Message sent successfully! I will get back to you soon.', type: 'success' })
      setFormData({ name: '', email: '', subject: '', message: '' })

      setTimeout(() => {
        setFormMessage({ text: '', type: '' })
      }, 5000)
    }, 1500)
  }

  return (
    <>
      <div className="page-header">
        <h1>Get In Touch</h1>
        <p>I&apos;d love to hear from you. Feel free to reach out with any inquiries.</p>
      </div>

      <section className="contact-section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <h2>Contact Information</h2>
              <div className="info-item">
                <h3>Email</h3>
                <p><a href="mailto:hello@myportfolio.com">hello@myportfolio.com</a></p>
              </div>
              <div className="info-item">
                <h3>Phone</h3>
                <p><a href="tel:+1234567890">+1 (234) 567-890</a></p>
              </div>
              <div className="info-item">
                <h3>Location</h3>
                <p>New York, NY, United States</p>
              </div>
              <div className="info-item">
                <h3>Social Media</h3>
                <div className="social-links">
                  <a href="#" target="_blank" rel="noreferrer">Twitter</a>
                  <a href="#" target="_blank" rel="noreferrer">LinkedIn</a>
                  <a href="#" target="_blank" rel="noreferrer">GitHub</a>
                </div>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <h2>Send Me a Message</h2>

              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">Send Message</button>
              {formMessage.text && (
                <p className={`form-message ${formMessage.type}`}>{formMessage.text}</p>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
