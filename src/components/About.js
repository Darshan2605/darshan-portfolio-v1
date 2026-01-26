import Image from "next/image";
import { FaGithub, FaLinkedin, FaBook } from "react-icons/fa";

export default function About() {
  return (
    <article className="about active" data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>
      <section className="about-text">
        <p>
          DevOps Engineer with hands-on experience in cloud infrastructure, container orchestration, and automation. 
          Recently completed a 6-month internship at <strong>Emplay Inc</strong>, where I worked on their Agentic AI platform 
          <strong> Zingerx</strong> for <strong>Hewlett Packard Enterprise (HPE)</strong>.
        </p>
        <p style={{ marginTop: '12px' }}>
          I manage AKS clusters, write automation scripts, optimize Docker images, and build monitoring dashboards. 
          I focus on making deployments faster, infrastructure reliable, and costs lower.
        </p>
        <br />
        <p>Connect with me:</p>
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
              <a href="https://www.linkedin.com/in/darshan-l-035b5a354" className="social-link linkedin" target="_blank" rel="noopener noreferrer">
                <div className="social-icon-container">
                  <FaLinkedin className="social-icon-glow" />
                  <span className="social-label">LinkedIn</span>
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

      {/* Current Focus Section */}
      <section className="service">
        <h3 className="h3 service-title">What I Do</h3>
        <ul className="service-list">
          <li className="service-item">
            <div className="service-icon-box">
              <Image src="/images/agile.png" height={100} width={100} alt="DevOps icon" />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">DevOps & Cloud</h4>
              <p className="service-item-text">
                Deploy and manage applications on AWS & Azure. Handle Kubernetes clusters, automate workflows, and monitor infrastructure with Grafana.
              </p>
            </div>
          </li>
        </ul>
      </section>

      {/* Tech Stack */}
      <section className="clients">
        <h3 className="h3 clients-title">Tech Stack</h3>
        <ul className="clients-list has-scrollbar">
          <li className="clients-item">
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" height="30" alt="AWS" />
            <p>AWS</p>
          </li>
          <li className="clients-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" height="30" alt="Azure" />
            <p>Azure</p>
          </li>
          <li className="clients-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" height="30" alt="Docker" />
            <p>Docker</p>
          </li>
          <li className="clients-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" height="30" alt="Kubernetes" />
            <p>Kubernetes</p>
          </li>
          <li className="clients-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" height="30" alt="Terraform" />
            <p>Terraform</p>
          </li>
          <li className="clients-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" height="30" alt="Jenkins" />
            <p>Jenkins</p>
          </li>
          <li className="clients-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" height="30" alt="Bash" />
            <p>Bash</p>
          </li>
          <li className="clients-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg" height="30" alt="Grafana" />
            <p>Grafana</p>
          </li>
          <li className="clients-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" height="30" alt="Git" />
            <p>Git</p>
          </li>
        </ul>
      </section>
    </article>
  );
} 