import Image from "next/image";
import { FaBriefcase } from "react-icons/fa";

export default function Resume() {
  return (
    <article className="resume active" data-page="resume">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      {/* Experience Timeline */}
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBriefcase />
          </div>
          <h3 className="h3">Experience</h3>
        </div>
        <ol className="timeline-list">
          <li className="timeline-item experience-item">
            <div className="experience-header">
              <div className="company-logo-wrapper">
                <Image
                  src="https://media.licdn.com/dms/image/v2/D560BAQFZf38aFfkISw/company-logo_200_200/company-logo_200_200/0/1667724589098/emplay_inc__logo?e=2147483647&v=beta&t=u70ODWLdNjWunki16BuUksxRCnQzEplABFNLEv_M2ww"
                  alt="Emplay Inc Logo"
                  width={60}
                  height={60}
                  className="company-logo"
                />
              </div>
              <div className="experience-title-info">
                <h4 className="h4 timeline-item-title">DevOps Intern</h4>
                <p className="company-name">Emplay Inc</p>
                <span className="experience-duration">July 2025 — January 2026</span>
              </div>
            </div>
            
            <div className="experience-details">
              <p className="company-description">
                <strong>Emplay Inc</strong> is an Agentic AI product company providing autonomous sales, support, and HR solutions 
                through its flagship "Agentic AI" platform, Zingerx.
              </p>
              
              <div className="project-highlight">
                <h5 className="project-title">Project: Zingerx Product</h5>
                <p className="client-info">
                  <strong>Client:</strong> Hewlett Packard Enterprise (HPE)
                </p>
                <p className="project-description">
                  Zingerx is a Low-Code/No-Code platform that lets enterprises hire, train, and manage AI agents conversationally. 
                  By using 'Meta-Agents', users can simply type natural language prompts to generate autonomous workflows for Sales, Support, and HR. 
                  The system utilizes Agentic RAG to handle complex tasks, such as detailed RFP analysis, without requiring technical expertise.
                </p>
              </div>

              <div className="responsibilities-section">
                <h5 className="responsibilities-title">What I Did:</h5>
                <ul className="responsibilities-list">
                  <li>Managed HPE's staging & production servers</li>
                  <li>Handled AKS clusters on Azure for deployments</li>
                  <li>Wrote Bash scripts to automate Zingerx deployment and DB backups on Azure</li>
                  <li>Built AWS Cost Reports for spending analysis of Emplay Inc. on AWS</li>
                  <li>Cut ZingerxDocker image size by 50% using Distroless images</li>
                  <li>Set up Grafana dashboards for monitoring HPE's Staging and Production AKS clusters on Azure</li>
                </ul>
              </div>

              <div className="tech-stack-section">
                <h5 className="tech-stack-title">Technologies Used:</h5>
                <div className="tech-tags">
                  <span className="tech-tag">AWS</span>
                  <span className="tech-tag">Azure</span>
                  <span className="tech-tag">Docker</span>
                  <span className="tech-tag">Kubernetes</span>
                  <span className="tech-tag">AKS</span>
                  <span className="tech-tag">Grafana</span>
                  <span className="tech-tag">Bash Scripting</span>
                  <span className="tech-tag">CI/CD</span>
                  <span className="tech-tag">Distroless Images</span>
                </div>
              </div>
            </div>
          </li>
        </ol>
      </section>
    </article>
  );
}
