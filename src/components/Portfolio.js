import { useState } from "react";
import Image from "next/image";

const projects = [
  {
    title: "Royalpic",
    category: "web development",
    img: "/images/stock images website.jpg",
    description: "Stock Images Website",
    live: "https://darshan2605.github.io/Stock-Images-Website-2nd-version/",
    github: "https://github.com/Darshan2605/Stock-Images-Website-2nd-version.git",
  },
  {
    title: "RideMate",
    category: "web development",
    img: "/images/RideMate.jpg",
    description: "Uber Clone",
    live: "https://drive.google.com/file/d/1Er_L3ShAr8mTd1MccA2z1aAgm5i61tNE/view?usp=sharing",
    github: "https://github.com/Darshan2605/RideMate.git",
  },
  {
    title: "Artify",
    category: "web development",
    img: "/images/Artify.jpg",
    description: "AI Image Generator",
    live: "https://65a5a34478ba5f3215cee0a4--boisterous-vacherin-d70534.netlify.app/",
    github: "https://github.com/Darshan2605/Artify-Ai-Image-Generator.git",
  },
  {
    title: "Memer",
    category: "web development",
    img: "/images/memer.jpg",
    description: "Meme Generator",
    live: "https://endearing-creponne-5f2f52.netlify.app/",
    github: "https://github.com/Darshan2605/Memer-Meme-Generator.git",
  },
  {
    title: "BudgetBuddy",
    category: "web development",
    img: "/images/auth-logo.jpg",
    description: "Expense-Tracker-React-Firebase-App",
    live: "https://expense-tracker-darshan.web.app/",
    github: "https://github.com/Darshan2605/BudgetBuddy.git",
  },
  {
    title: "JS Projects & Games",
    category: "web development",
    img: "/images/Projects.jpg",
    description: "JavaScript Projects",
    live: "https://darshan2605.github.io/JavaScript-Projects/",
    github: "https://github.com/Darshan2605/JavaScript-Projects.git",
  },
  {
    title: "HireSphere-Job Portal + AI Mock Interview",
    category: "web development",
    img: "/images/Ai-Mock.jpg",
    description: "Job Portal + AI Mock Interview",
    live: "https://hire-sphere-job-system-se48.vercel.app/",
    github: "https://github.com/Darshan2605/HireSphere-AI-Mock-Interview.git",
  },
  {
    title: "AWS Services Blogs",
    category: "devops",
    img: "https://wallpaperaccess.com/full/6522668.png",
    description: "AWS Services",
    live: "/aws-blogs/AWS%20EC2/page/1",
    github: null,
  },
  {
    title: "System Design Blogs",
    category: "system design",
    img: "https://th.bing.com/th/id/OIP.AZfbqUrDER-NUbIPhDbx3QHaDt?w=350&h=175&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    description: "System Design",
    live: "/system-design/page/1",
    github: null,
  },
  {
    title: "AWS Projects Blogs",
    category: "devops",
    img: "/images/aws-projects.jpg",
    description: "AWS Projects",
    live: "/aws-projects/page/1",
    github: null,
  },
  {
    title: "DevOps Projects Blogs",
    category: "devops",
    img: "/images/devops.jpg",
    description: "DevOps Projects",
    live: "/devops-projects/page/1",
    github: null,
  },
];

const filterOptions = [
  { label: "All", value: "all" },
  { label: "Web Development", value: "web development" },
  { label: "DevOps", value: "devops" },
  { label: "System Design", value: "system design" },
];

export default function Portfolio() {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [selectOpen, setSelectOpen] = useState(false);

  const filteredProjects =
    selectedFilter === "all"
      ? projects
      : projects.filter((p) => p.category === selectedFilter);

  const handleFilterClick = (value) => {
    setSelectedFilter(value);
  };

  const handleSelectClick = () => {
    setSelectOpen((open) => !open);
  };

  const handleSelectItemClick = (value) => {
    setSelectedFilter(value);
    setSelectOpen(false);
  };

  const selectedLabel =
    filterOptions.find((opt) => opt.value === selectedFilter)?.label || "Select category";

  return (
    <article className="portfolio active" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>
      <section className="projects">
        {/* Filter Buttons */}
        <ul className="filter-list">
          {filterOptions.map((opt) => (
            <li className="filter-item" key={opt.value}>
              <button
                className={selectedFilter === opt.value ? "active" : ""}
                data-filter-btn
                onClick={() => handleFilterClick(opt.value)}
              >
                {opt.label}
              </button>
            </li>
          ))}
        </ul>
        {/* Filter Select (for mobile) */}
        <div className="filter-select-box">
          <button
            className={"filter-select" + (selectOpen ? " active" : "")}
            data-select
            onClick={handleSelectClick}
            type="button"
          >
            <div className="select-value" data-selecct-value>
              {selectedLabel}
            </div>
            <div className="select-icon">
              <i className="fa-solid fa-chevron-down"></i>
            </div>
          </button>
          <ul className="select-list" style={{ display: selectOpen ? "block" : "none" }}>
            {filterOptions.map((opt) => (
              <li className="select-item" key={opt.value}>
                <button
                  data-select-item
                  onClick={() => handleSelectItemClick(opt.value)}
                  className={selectedFilter === opt.value ? "active" : ""}
                >
                  {opt.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
        {/* Project Cards */}
        <ul className="project-list">
          {filteredProjects.map((project, idx) => (
            <li
              className="project-item active"
              data-filter-item
              data-category={project.category}
              key={project.title + idx}
            >
              <div>
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <i className="fa-solid fa-eye"></i>
                  </div>
                  <Image src={project.img} alt={project.title} width={225} height={225} style={{objectFit: 'cover', width: '100%', height: '200px', borderRadius: '10px'}} />
                </figure>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-category">{project.description}</p>
                <div className="project-buttons">
                  {project.live && (
                    <a
                      href={project.live}
                      className="live-button"
                    >
                      Live
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      className="github-button"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
} 