export default function Navbar({ activeSection, setActiveSection }) {
  const navItems = [
    { label: "About", key: "about" },
    { label: "Resume", key: "resume" },
    { label: "Portfolio", key: "portfolio" },
    { label: "Certifications", key: "certifications" },
    { label: "Blog", key: "blog" },
    
  ];
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {navItems.map((item) => (
          <li className="navbar-item" key={item.key}>
            <button
              className={`navbar-link${activeSection === item.key ? " active" : ""}`}
              data-nav-link
              onClick={() => setActiveSection(item.key)}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
} 