import Image from "next/image";

export default function Blog() {
  return (
    <article className="blog active" data-page="blog">
      <header>
        <h2 className="h2 article-title">Blog</h2>
      </header>
      <span className="blogs">
        <a href="https://medium.com/@darshanlondhe9" className="blogs-btn" download>
          <button type="button" className="btn-blogs">My Blogs</button>
        </a>
      </span>
      <section className="blog-posts">
        <ul className="blog-posts-list">
          <li className="blog-post-item">
            <a href="/aws-blogs/AWS%20EC2/page/1">
              <figure className="blog-banner-box">
                <img src="https://wallpaperaccess.com/full/6522668.png" alt="AWS Blogs" loading="lazy" />
              </figure>
              <div className="blog-content">
                <div className="blog-meta">
                  <p className="blog-category">AWS</p>
                </div>
                <h3 className="h3 blog-item-title">All AWS Blogs</h3>
                <p className="blog-text">Blogs on AWS Services, How to use them, and much more.</p>
              </div>
            </a>
          </li>
          <li className="blog-post-item">
            <a href="/aws-projects/page/1">
              <figure className="blog-banner-box">
                <Image src="/images/aws-projects.jpg" alt="AWS Projects" width={400} height={225} style={{objectFit: 'cover', width: '100%', height: 'auto', borderRadius: '10px'}} />
              </figure>
              <div className="blog-content">
                <div className="blog-meta">
                  <p className="blog-category">AWS</p>
                </div>
                <h3 className="h3 blog-item-title">All AWS Projects</h3>
                <p className="blog-text">Blogs on AWS Projects, How to use them, and much more.</p>
              </div>
            </a>
          </li>
          <li className="blog-post-item">
            <a href="/devops-projects/page/1">
              <figure className="blog-banner-box">
                <img src="/images/devops.jpg" alt="DevOps Projects" loading="lazy" />
              </figure>
              <div className="blog-content">
                <div className="blog-meta">
                  <p className="blog-category">DevOps</p>
                </div>
                <h3 className="h3 blog-item-title">DevOps Projects</h3>
                <p className="blog-text">Blogs on DevOps Projects, How to use them, and much more.</p>
              </div>
            </a>
          </li>
          <li className="blog-post-item">
            <a href="/system-design/page/1">
              <figure className="blog-banner-box">
                <img src="https://th.bing.com/th/id/OIP.AZfbqUrDER-NUbIPhDbx3QHaDt?w=350&h=175&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="System Design Blogs" loading="lazy" />
              </figure>
              <div className="blog-content">
                <div className="blog-meta">
                  <p className="blog-category">System Design</p>
                </div>
                <h3 className="h3 blog-item-title">All System Design Blogs</h3>
                <p className="blog-text">Blogs on System Design concepts, patterns, and real-world architectures.</p>
              </div>
            </a>
          </li>
        </ul>
      </section>
    </article>
  );
} 