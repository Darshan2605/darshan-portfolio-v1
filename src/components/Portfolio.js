import { useState } from "react";
import Image from "next/image";

const projects = [
  {
    title: "AWS Services Blogs",
    category: ["devops"],
    img: "https://wallpaperaccess.com/full/6522668.png",
    description: "Comprehensive blogs on AWS Services, best practices, and tutorials.",
    live: "/aws-blogs/AWS%20EC2/page/1",
    github: null,
  },
  {
    title: "System Design Blogs",
    category: ["system design"],
    img: "/images/system-design.png",
    description: "In-depth system design concepts, patterns, and architectures.",
    live: "/system-design/page/1",
    github: null,
  },
  {
    title: "AWS Projects Blogs",
    category: ["devops"],
    img: "/images/aws-projects.jpg",
    description: "Hands-on AWS projects with step-by-step implementation guides.",
    live: "/aws-projects/page/1",
    github: null,
  },
  {
    title: "DevOps Projects Blogs",
    category: ["devops"],
    img: "/images/devops.jpg",
    description: "DevOps projects featuring CI/CD, Docker, Kubernetes, and more.",
    live: "/devops-projects/page/1",
    github: null,
  },
];

const filterOptions = [
  { label: "All", value: "all" },
  { label: "DevOps", value: "devops" },
  { label: "System Design", value: "system design" },
];

export default function Portfolio() {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [selectOpen, setSelectOpen] = useState(false);

  const filteredProjects =
    selectedFilter === "all"
      ? projects
      : projects.filter((p) => p.category.includes(selectedFilter));

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
        <ul className="project-grid">
          {filteredProjects.map((project, idx) => (
            <li
              className="project-card"
              data-filter-item
              data-category={project.category}
              key={project.title + idx}
            >
              <div className="project-card-img">
                <Image 
                  src={project.img} 
                  alt={project.title} 
                  width={300} 
                  height={180} 
                  style={{objectFit: 'cover', width: '100%', height: '180px'}} 
                />
              </div>
              <div className="project-card-content">
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-description">{project.description}</p>
                <div className="project-card-buttons">
                  {project.live && (
                    <a href={project.live} className="project-card-link">
                      View Project
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} className="project-card-link github" target="_blank" rel="noopener noreferrer">
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