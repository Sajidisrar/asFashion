import './Services.css'

const Services = () => {
  return (
    <div className="services">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <h1>Our Services</h1>
          <p>Comprehensive digital solutions tailored to your business needs</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-grid-section">
        <div className="container">
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🌐</div>
              <h3>Web Development</h3>
              <p>Custom websites and web applications built with modern technologies and best practices.</p>
              <ul>
                <li>React & Next.js Development</li>
                <li>Node.js Backend Services</li>
                <li>Database Design & Integration</li>
                <li>API Development</li>
              </ul>
              <div className="service-price">Starting at $2,500</div>
            </div>

            <div className="service-card featured">
              <div className="service-badge">Most Popular</div>
              <div className="service-icon">📱</div>
              <h3>Mobile App Development</h3>
              <p>Native and cross-platform mobile applications for iOS and Android.</p>
              <ul>
                <li>React Native Development</li>
                <li>iOS & Android Native</li>
                <li>App Store Optimization</li>
                <li>Push Notifications</li>
              </ul>
              <div className="service-price">Starting at $5,000</div>
            </div>

            <div className="service-card">
              <div className="service-icon">🎨</div>
              <h3>UI/UX Design</h3>
              <p>Beautiful, user-centered designs that engage your audience and drive conversions.</p>
              <ul>
                <li>User Research & Analysis</li>
                <li>Wireframing & Prototyping</li>
                <li>Visual Design & Branding</li>
                <li>Usability Testing</li>
              </ul>
              <div className="service-price">Starting at $1,500</div>
            </div>

            <div className="service-card">
              <div className="service-icon">🔧</div>
              <h3>Maintenance & Support</h3>
              <p>Ongoing support and maintenance to keep your digital products running smoothly.</p>
              <ul>
                <li>24/7 Technical Support</li>
                <li>Regular Updates & Patches</li>
                <li>Performance Monitoring</li>
                <li>Security Audits</li>
              </ul>
              <div className="service-price">Starting at $500/month</div>
            </div>

            <div className="service-card">
              <div className="service-icon">📈</div>
              <h3>Digital Marketing</h3>
              <p>Strategic marketing solutions to increase your online presence and reach.</p>
              <ul>
                <li>SEO Optimization</li>
                <li>Social Media Management</li>
                <li>Content Marketing</li>
                <li>Analytics & Reporting</li>
              </ul>
              <div className="service-price">Starting at $1,000/month</div>
            </div>

            <div className="service-card">
              <div className="service-icon">☁️</div>
              <h3>Cloud Solutions</h3>
              <p>Scalable cloud infrastructure and deployment solutions for your applications.</p>
              <ul>
                <li>AWS & Azure Setup</li>
                <li>DevOps & CI/CD</li>
                <li>Database Migration</li>
                <li>Monitoring & Scaling</li>
              </ul>
              <div className="service-price">Starting at $2,000</div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process">
        <div className="container">
          <h2>Our Process</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Discovery</h3>
              <p>We start by understanding your business goals, target audience, and project requirements.</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Planning</h3>
              <p>We create a detailed project plan with timelines, milestones, and deliverables.</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Design</h3>
              <p>Our team designs wireframes, prototypes, and visual designs for your approval.</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Development</h3>
              <p>We build your solution using the latest technologies and best practices.</p>
            </div>
            <div className="process-step">
              <div className="step-number">5</div>
              <h3>Launch</h3>
              <p>We deploy your solution and provide training and ongoing support.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
