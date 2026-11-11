
import './App.css'

import profileImg from './assets/Rashmi.png'
import resume from './assets/Rashmi_Resume.pdf'
import foodDeliveryImage from './assets/food-delivery.png'
import ecommerceImage from './assets/ecommerce.png'

function App() {
  return (
      <>
        {/* Navigation */}
        <nav className="navbar">
          <div className="logo">
            Rashmi<span>.</span>
          </div>

          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          <a href="#contact" className="nav-button">
            Let's Connect
          </a>
        </nav>

        {/* Hero Section */}
        <section className="hero-section" id="home">
          <div className="hero-content">
            <p className="welcome">WELCOME TO MY PORTFOLIO</p>

            <h1>
              Hi, I'm <span>Rashmi Kasar</span>
            </h1>

            <h2>Java Backend Developer</h2>

            <p className="hero-description">
              I build backend applications using Java, Spring Boot,
              REST APIs and Microservices. I enjoy solving problems
              and developing reliable backend solutions.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-button">
                Explore My Projects
              </a>

              <a href="#contact" className="secondary-button">
                Contact Me
              </a>

              <a
                  href={resume}
                  download="Rashmi_Kasar_Resume.pdf"
                  className="secondary-button"
              >
                Download Resume ↓
              </a>
            </div>

            <div className="social-links">
              <a
                  href="https://github.com/rashmikasar-59"
                  target="_blank"
                  rel="noreferrer"
              >
                GitHub ↗
              </a>

              <a
                  href="https://linkedin.com/in/rashmi-kasar-845b67444"
                  target="_blank"
                  rel="noreferrer"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          <div className="hero-card">
            <img
                src={profileImg}
                alt="Rashmi Kasar"
                className="profile-photo"
            />

            <h3>Java Backend Developer</h3>
            <p>Building • Learning • Growing</p>
          </div>
        </section>

        {/* About Section */}
        <section className="section" id="about">
          <p className="section-label">GET TO KNOW ME</p>
          <h2>About Me</h2>

          <p>
            I am a Computer Engineering graduate with hands-on
            experience developing backend projects using Java
            and Spring Boot. My learning journey includes REST API
            development, database integration, JWT authentication,
            Kafka messaging and microservices architecture.
          </p>

          <p>
            I previously worked in technical support, where I
            developed troubleshooting, problem-solving and
            system maintenance skills. I am now looking for an
            opportunity to begin my career as a Java Backend
            Developer and contribute to real-world software projects.
          </p>
        </section>

        {/* Skills Section */}
        <section className="section skills-section" id="skills">
          <p className="section-label">MY TECHNICAL EXPERTISE</p>
          <h2>Technical Skills</h2>

          <div className="skills-grid">
            <div className="skill-card">
              <h3>Programming</h3>
              <p>Java 17, OOP, Collections, Exception Handling</p>
            </div>

            <div className="skill-card">
              <h3>Backend Development</h3>
              <p>Spring Boot, Spring MVC, Spring Security, REST APIs</p>
            </div>

            <div className="skill-card">
              <h3>Databases</h3>
              <p>MySQL, MongoDB, Hibernate, Spring Data JPA</p>
            </div>

            <div className="skill-card">
              <h3>Microservices</h3>
              <p>Kafka, Eureka, API Gateway, Service Discovery</p>
            </div>

            <div className="skill-card">
              <h3>Security</h3>
              <p>JWT, Authentication, Authorization, Role-Based Access</p>
            </div>

            <div className="skill-card">
              <h3>Tools</h3>
              <p>Git, GitHub, Maven, Postman, IntelliJ IDEA</p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="section" id="projects">
          <p className="section-label">WHAT I HAVE BUILT</p>
          <h2>My Projects</h2>

          <div className="projects-grid">

            {/* Food Delivery Project */}
            <div className="project-card">
              <div className="project-image-container">
                <img
                    src={foodDeliveryImage}
                    alt="Food Delivery Microservices Project"
                    className="project-image"
                />
              </div>

              <div className="project-content">
                <span className="project-label">MICROSERVICES</span>

                <h3>Food Delivery Microservices</h3>

                <p>
                  A food delivery backend application designed using
                  Spring Boot microservices architecture. It includes
                  authentication, user, restaurant, order, payment
                  and delivery service modules.
                </p>

                <p className="tech-stack">
                  Java • Spring Boot • Kafka • MongoDB • JWT • Eureka
                </p>

                <a
                    href="https://github.com/rashmikasar-59/food-delivery-microservices-app"
                    target="_blank"
                    rel="noreferrer"
                >
                  View GitHub Profile →
                </a>
              </div>
            </div>

            {/* E-Commerce Project */}
            <div className="project-card">
              <div className="project-image-container">
                <img
                    src={ecommerceImage}
                    alt="E-Commerce Backend Project"
                    className="project-image"
                />
              </div>

              <div className="project-content">
                <span className="project-label">BACKEND DEVELOPMENT</span>

                <h3>E-Commerce Backend</h3>

                <p>
                  An e-commerce backend application with user,
                  product, category and shopping cart management,
                  secured using Spring Security and JWT.
                </p>

                <p className="tech-stack">
                  Java • Spring Boot • MySQL • Hibernate • JWT
                </p>

                <a
                    href="https://github.com/rashmikasar-59/EShop"
                    target="_blank"
                    rel="noreferrer"
                >
                  View Project on GitHub →
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* Experience and Education */}
        <section className="section" id="experience">
          <p className="section-label">MY JOURNEY</p>
          <h2>Experience & Education</h2>

          <div className="journey-card">
            <h3>Technical Support Engineer</h3>
            <p>2021 – 2024</p>
            <p>
              Maintained computer lab hardware and software,
              diagnosed technical issues, performed system
              configuration and provided technical support.
            </p>
          </div>

          <div className="journey-card">
            <h3>B.E. Computer Engineering</h3>
            <p>2020 | CGPA: 7.3</p>
            <p>
              S.S.V.P.S. B.S.D. College of Engineering
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section contact-section" id="contact">
          <p className="section-label">LET'S TALK</p>
          <h2>Have an Opportunity?</h2>

          <p>
            I am open to junior Java Backend Developer opportunities.
            Feel free to connect with me.
          </p>

          <a
              href="mailto:rashmikasar59@gmail.com"
              className="primary-button"
          >
            Email Me
          </a>

          <p className="contact-email">
            rashmikasar59@gmail.com
          </p>
        </section>

        {/* Footer */}
        <footer>
          <p>© 2026 Rashmi Kasar. Built with React & Vite.</p>
        </footer>
      </>
  )
}

export default App
