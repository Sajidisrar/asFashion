import './About.css'

const About = () => {
  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1>About Us</h1>
          <p>Learn more about our story, mission, and the amazing team behind our success.</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="story">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>Our Story</h2>
              <p>
                Founded in 2019, we started as a small team of passionate developers with a vision 
                to create digital experiences that make a difference. What began as a simple idea 
                has grown into a full-service digital agency serving clients worldwide.
              </p>
              <p>
                We believe that great design and technology should work together seamlessly to 
                create solutions that not only look amazing but also drive real business results. 
                Our approach combines creativity with technical expertise to deliver projects that 
                exceed expectations.
              </p>
            </div>
            <div className="story-image">
              <div className="image-placeholder">
                <span>📸</span>
                <p>Our Team at Work</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission">
        <div className="container">
          <h2>Our Mission</h2>
          <div className="mission-grid">
            <div className="mission-card">
              <div className="mission-icon">🎯</div>
              <h3>Excellence</h3>
              <p>We strive for excellence in every project, ensuring the highest quality standards and attention to detail.</p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">🤝</div>
              <h3>Partnership</h3>
              <p>We work closely with our clients as partners, understanding their goals and challenges.</p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">🚀</div>
              <h3>Innovation</h3>
              <p>We embrace new technologies and innovative approaches to stay ahead of the curve.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team">
        <div className="container">
          <h2>Meet Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-avatar">👨‍💻</div>
              <h3>John Smith</h3>
              <p className="role">CEO & Founder</p>
              <p className="bio">Visionary leader with 10+ years in tech</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">👩‍🎨</div>
              <h3>Sarah Johnson</h3>
              <p className="role">Creative Director</p>
              <p className="bio">Award-winning designer and UX expert</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">👨‍🔧</div>
              <h3>Mike Chen</h3>
              <p className="role">Lead Developer</p>
              <p className="bio">Full-stack wizard and tech enthusiast</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">👩‍💼</div>
              <h3>Emily Davis</h3>
              <p className="role">Project Manager</p>
              <p className="bio">Organizational mastermind and client advocate</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
