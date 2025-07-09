import { FaBook, FaBriefcase } from "react-icons/fa";

export default function Resume() {
  return (
    <article className="resume active" data-page="resume">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>
      <span className="download-cv">
        <a href="https://drive.google.com/uc?export=download&id=1PcjGqVQJV0E5tMc8aMO-N5INaXGRCbEU" className="download-btn" download>
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
            <h4 className="h4 timeline-item-title">RideMate (Uber Clone)</h4>
            <span><a href="https://drive.google.com/file/d/1Er_L3ShAr8mTd1MccA2z1aAgm5i61tNE/view?usp=sharing">Live Link</a></span>
            <p className="timeline-text">
              Developed an Uber clone app using the MERN stack to simulate ride-hailing functionalities.
              <br />Technologies: MongoDB, Express, React, Node.js, WebSocket, Google API
            </p>
          </li>
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">HireSphere</h4>
            <span><a href="https://hire-sphere-job-system-se48.vercel.app/">Live Link</a></span>
            <p className="timeline-text">
              Designed and developed a Job Application System using the MERN stack to connect candidates and recruiters.
              <br />Technologies: MongoDB, Express, React, Node.js
            </p>
          </li>
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Royal Pic - Stock Images Website</h4>
            <span><a href="https://darshan2605.github.io/Stock-Images-Website-2nd-version/">Live Link</a></span>
            <p className="timeline-text">
              Developed a stock images website with a user-friendly interface and high-resolution images.
              Enhanced user experience and accessibility through intuitive design.
              <br />Technologies: HTML, CSS, Bootstrap, JavaScript
            </p>
          </li>
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Artify - AI Image Generator</h4>
            <span><a href="https://65a5a34478ba5f3215cee0a4--boisterous-vacherin-d70534.netlify.app/">Live Link</a></span>
            <p className="timeline-text">
              Created an AI image generation platform allowing users to generate custom AI art. 
              Over 200 images generated through custom prompts.
              <br />Technologies: HTML, CSS, JavaScript, React, Hugging Face API.
            </p>
          </li>
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Budget Buddy - Expense Tracker</h4>
            <span><a href="https://expense-tracker-darshan.web.app/">Live Link</a></span>
            <p className="timeline-text">
              Developed an expense tracking application with real-time backend support.
              Implemented user authentication and secure data handling for enhanced security.
              <br />Technologies: HTML, CSS, JavaScript, React, Firebase
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