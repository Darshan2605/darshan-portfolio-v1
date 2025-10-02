import { FaBook, FaBriefcase } from "react-icons/fa";

export default function Resume() {
  return (
    <article className="resume active" data-page="resume">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>
      <span className="download-cv">
        <a href="https://drive.google.com/file/d/1uGT_gRYStNvcrc8XqxEKXqJ1bO6xhcVj/view?usp=sharing" className="download-btn" download>
          <button type="button" className="btn-download">Download CV</button>
        </a>
      </span>
      {/* Education Timeline */}
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBook />
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Savitribai Phule Pune University</h4>
            <span>November 2021 — May 2025</span>
            <p className="timeline-text">
              BE in Computer Science Engineering
              <br />GPA: 8.3/10
              <br />Coursework: Data Structures and Algorithms, Object Oriented Programming, Database Management System, Computer Networks, Operating System.
            </p>
          </li>
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Shri Shiv Chhatrapati College Junnar</h4>
            <span>May 2021</span>
            <p className="timeline-text">Class XII - Percentage: 99%</p>
          </li>
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">SBPV Junnar</h4>
            <span>May 2019</span>
            <p className="timeline-text">Class X - Percentage: 98.2%</p>
          </li>
        </ol>
      </section>
      {/* Projects Timeline */}
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBriefcase />
          </div>
          <h3 className="h3">Projects</h3>
        </div>
        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">AWS Blogs</h4>
            <span><a className="project-link" href="https://darshanlondheportfolio-darshans-projects-18f1c87b.vercel.app/aws-blogs.html">Project Link</a></span>
            <p className="timeline-text">
              • Authored and published AWS tutorials on Medium, providing step-by-step guidance on AWS services.
            </p>
          </li>
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">CI/CD for Static Website Hosting on EC2</h4>
            <span><a className="project-link" href="https://medium.com/@darshanlondhe9/how-to-host-static-website-from-github-repo-on-ec2-using-code-pipeline-service-ci-cd-automation-8bc51f6ff707">Project Link</a></span>
            <p className="timeline-text">
              • Engineered an automated CI/CD pipeline integrating GitHub with AWS CodePipeline, CodeDeploy, and CodeBuild to deploy a static website to EC2.
              <br />• Technologies: AWS CodePipeline, CodeDeploy, CodeBuild, EC2, GitHub, GitHub Actions, GitHub Secrets, AWS IAM.
            </p>
          </li>
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Node.js Deployment on AWS ECS Fargate</h4>
            <span><a className="project-link" href="https://medium.com/@darshanlondhe9/automating-node-js-bfe1f15f113d">Project Link</a></span>
            <p className="timeline-text">
              • Automated the deployment of a containerized Node.js app using Docker, pushed to ECR, and deployed to ECS Fargate with Application Load Balancer configuration.
              <br />• Technologies: Node.js, Docker, AWS ECS Fargate, ECR, ALB.
            </p>
          </li>
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Jenkins CI/CD for Docker with Slack Notifications</h4>
            <span><a className="project-link" href="https://medium.com/@darshanlondhe9/automating-docker-image-build-and-push-on-docker-hub-with-jenkins-slack-notifications-555aaf526e14">Project Link</a></span>
            <p className="timeline-text">
              • Engineered a Jenkins pipeline to automate Docker image builds and push to Docker Hub with Slack integration for real-time build alerts.
              <br />• Technologies: Jenkins, Docker, GitHub, Docker Hub, Slack.
            </p>
          </li>
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">NAT Gateway Setup for Private EC2 Access</h4>
            <span><a className="project-link" href="https://medium.com/@darshanlondhe9/step-by-step-guide-to-setting-up-a-nat-gateway-and-connecting-private-ec2-to-the-internet-562cba5822ad">Project Link</a></span>
            <p className="timeline-text">
              • Published a comprehensive tutorial on configuring a NAT Gateway, subnets, and routing to enable internet access for private EC2 instances.
              <br />• Technologies: AWS VPC, NAT Gateway, EC2, Subnets, Route Tables.
            </p>
          </li>
        </ol>
      </section>
      {/* Skills */}
      <section className="skill">
        <h3 className="h3 skills-title">My skills</h3>
        <ul className="skills-list content-card">
          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">MERN Stack</h5>
              <data value="95">95%</data>
            </div>
            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: '95%' }}></div>
            </div>
          </li>
          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">DevOps</h5>
              <data value="90">90%</data>
            </div>
            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: '90%' }}></div>
            </div>
          </li>
          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Photoshop</h5>
              <data value="90">90%</data>
            </div>
            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: '90%' }}></div>
            </div>
          </li>
        </ul>
      </section>
    </article>
  );
} 