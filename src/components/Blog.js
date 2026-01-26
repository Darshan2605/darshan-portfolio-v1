import Image from "next/image";

const blogs = [
  {
    title: "All AWS Blogs",
    category: "AWS",
    img: "https://wallpaperaccess.com/full/6522668.png",
    description: "Comprehensive blogs on AWS Services, best practices, and tutorials.",
    link: "/aws-blogs/AWS%20EC2/page/1",
  },
  {
    title: "All AWS Projects",
    category: "AWS",
    img: "/images/aws-projects.jpg",
    description: "Hands-on AWS projects with step-by-step implementation guides.",
    link: "/aws-projects/page/1",
  },
  {
    title: "DevOps Projects",
    category: "DevOps",
    img: "/images/devops.jpg",
    description: "DevOps projects featuring CI/CD, Docker, Kubernetes, and more.",
    link: "/devops-projects/page/1",
  },
  {
    title: "All System Design Blogs",
    category: "System Design",
    img: "/images/system-design.png",
    description: "In-depth system design concepts, patterns, and architectures.",
    link: "/system-design/page/1",
  },
];

export default function Blog() {
  return (
    <article className="blog active" data-page="blog">
      <header>
        <h2 className="h2 article-title">Blog</h2>
      </header>
      <span className="blogs">
        <a href="https://medium.com/@darshanlondhe9" className="blogs-btn" target="_blank" rel="noopener noreferrer">
          <button type="button" className="btn-blogs">My Medium Blogs</button>
        </a>
      </span>
      <section className="blog-grid">
        {blogs.map((blog, idx) => (
          <div className="blog-card" key={idx}>
            <div className="blog-card-img">
              <Image
                src={blog.img}
                alt={blog.title}
                width={400}
                height={200}
                style={{ objectFit: "cover", width: "100%", height: "180px" }}
              />
            </div>
            <div className="blog-card-content">
              <span className="blog-card-category">{blog.category}</span>
              <h3 className="blog-card-title">{blog.title}</h3>
              <p className="blog-card-description">{blog.description}</p>
              <a href={blog.link} className="blog-card-link">
                Read More
              </a>
            </div>
          </div>
        ))}
      </section>
    </article>
  );
} 