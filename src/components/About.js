import Image from "next/image";
import { FaGithub, FaLinkedin, FaCode, FaBook } from "react-icons/fa";

export default function About() {
  return (
    <article className="about active" data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>
      <section className="about-text">
        <p>
        I&apos;m Darshan Dilip Londhe, a versatile MERN Developer and DevOps enthusiast passionate about creating innovative, scalable, and efficient solutions for the digital world.
        </p>
        <br />
        <br />
        <p>Social Media:</p>
        <div className="social-media">
          <ul className="social-list">
            <li className="social-item">
              <a href="https://github.com/darshan2605" className="social-link github" target="_blank" rel="noopener noreferrer">
                <div className="social-icon-container">
                  <FaGithub className="social-icon-glow" />
                  <span className="social-label">GitHub</span>
                </div>
              </a>
            </li>
            <li className="social-item">
              <a href="https://www.linkedin.com/in/darshan-londhe-812303251" className="social-link linkedin" target="_blank" rel="noopener noreferrer">
                <div className="social-icon-container">
                  <FaLinkedin className="social-icon-glow" />
                  <span className="social-label">LinkedIn</span>
                </div>
              </a>
            </li>
            <li className="social-item">
              <a href="https://leetcode.com/Darshan_Londhe" className="social-link leetcode" target="_blank" rel="noopener noreferrer">
                <div className="social-icon-container">
                  <FaCode className="social-icon-glow" />
                  <span className="social-label">LeetCode</span>
                </div>
              </a>
            </li>
            <li className="social-item">
              <a href="https://medium.com/@darshanlondhe9" className="social-link medium" target="_blank" rel="noopener noreferrer">
                <div className="social-icon-container">
                  <FaBook className="social-icon-glow" />
                  <span className="social-label">Medium</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* Services Section */}
      <section className="service">
        <h3 className="h3 service-title">What I'm Doing</h3>
        <ul className="service-list">
          <li className="service-item">
            <div className="service-icon-box">
              <Image src="/images/site.png" width={100} height={100} alt="MERN Development icon" />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">MERN Development</h4>
              <p className="service-item-text">
                Building dynamic, full-stack web applications using MongoDB, Express.js, React.js, and Node.js at a professional level.
              </p>
            </div>
          </li>
          <li className="service-item">
            <div className="service-icon-box">
              <Image src="/images/agile.png" height={100} width={100} alt="DevOps icon" />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">DevOps</h4>
              <p className="service-item-text">
                Streamlining workflows with CI/CD pipelines, Docker, Kubernetes, and AWS for efficient deployment and scalability.
              </p>
            </div>
          </li>
          <li className="service-item">
            <div className="service-icon-box">
              <Image src="/images/photoshop.png" height={100} width={100} alt="Photoshop icon" />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Photoshop</h4>
              <p className="service-item-text">
                Crafting stunning visuals and professional designs to enhance your digital presence and branding.
              </p>
            </div>
          </li>
        </ul>
      </section>

      {/* Clients Section: MERN Development */}
      <section className="clients">
        <h3 className="h3 clients-title">MERN Development</h3>
        <ul className="clients-list has-scrollbar">
          <li className="clients-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" height="30" alt="MongoDB" />
            <p>MongoDB</p>
          </li>
          <li className="clients-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" height="30" alt="Express.js" />
            <p>Express.js</p>
          </li>
          <li className="clients-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="30" alt="React.js" />
            <p>React.js</p>
          </li>
          <li className="clients-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="30" alt="Node.js" />
            <p>Node.js</p>
          </li>
          <li className="clients-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" height="30" alt="MySQL" />
            <p>MySQL</p>
          </li>
          <li className="clients-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" height="30" alt="PostgreSQL" />
            <p>PostgreSQL</p>
          </li>
          <li className="clients-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" height="30" alt="Firebase" />
            <p>Firebase</p>
          </li>
          <li className="clients-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" height="30" alt="GraphQL" />
            <p>GraphQL</p>
          </li>
        </ul>
      </section>

      {/* Clients Section: DevOps Practices */}
      <section className="clients">
        <h3 className="h3 clients-title">DevOps Practices</h3>
        <ul className="clients-list has-scrollbar">
          <li className="clients-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" height="30" alt="Docker" />
            <p>Docker</p>
          </li>
          <li className="clients-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" height="30" alt="Kubernetes" />
            <p>Kubernetes</p>
          </li>
          <li className="clients-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" height="30" alt="Git" />
            <p>Git</p>
          </li>
          <li className="clients-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" height="30" alt="AWS" />
            <p>AWS</p>
          </li>
          <li className="clients-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" height="30" alt="Azure" />
            <p>Azure</p>
          </li>
          <li className="clients-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" height="30" alt="Jenkins" />
            <p>Jenkins</p>
          </li>
          <li className="clients-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" height="30" alt="Terraform" />
            <p>Terraform</p>
          </li>
          <li className="clients-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg" height="30" alt="Ansible" />
            <p>Ansible</p>
          </li>
        </ul>
      </section>
    </article>
  );
} 