import blogs from './aws-projects.json';
import Image from 'next/image';
import styles from './AwsProjects.module.css';

const BLOGS_PER_PAGE = 6;

export function generateStaticParams() {
  const totalPages = Math.ceil(blogs.length / BLOGS_PER_PAGE);
  return Array.from({ length: totalPages }, (_, i) => ({
    page: (i + 1).toString(),
  }));
}

export default async function AwsProjectsPage({ params }) {
  const page = parseInt((await params).page, 10) || 1;
  const totalPages = Math.ceil(blogs.length / BLOGS_PER_PAGE);
  const startIdx = (page - 1) * BLOGS_PER_PAGE;
  const endIdx = startIdx + BLOGS_PER_PAGE;
  const currentBlogs = blogs.slice(startIdx, endIdx);

  return (
    <div className={styles.awsProjectsBg}>
      <main className={styles.awsProjectsMain}>
        <h1 className={styles.awsProjectsTitle}>AWS Projects</h1>
        <section className={styles.blogPosts}>
          {currentBlogs.map((project, idx) => (
            <div className={styles.blogPostItem} key={startIdx + idx}>
              <a href={project.link} className={styles.blogPostLink}>
                <figure className={styles.blogBannerBox}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={200}
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                    unoptimized={false}
                  />
                </figure>
                <div className={styles.blogContent}>
                  <div className={styles.blogMeta}>
                    <p className={styles.blogCategory}>{project.category}</p>
                  </div>
                  <h3 className={styles.blogItemTitle}>{project.title}</h3>
                  <p className={styles.blogText}>{project.description}</p>
                </div>
              </a>
            </div>
          ))}
        </section>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', margin: '32px 0' }}>
          <a
            href={page > 1 ? `/aws-projects/page/${page - 1}` : '#'}
            style={{
              pointerEvents: page === 1 ? 'none' : 'auto',
              opacity: page === 1 ? 0.5 : 1,
              padding: '8px 16px',
              borderRadius: '6px',
              border: 'none',
              background: '#222',
              color: '#fff',
              textDecoration: 'none',
            }}
          >
            Prev
          </a>
          <span style={{ color: '#fff', alignSelf: 'center' }}>
            Page {page} of {totalPages}
          </span>
          <a
            href={page < totalPages ? `/aws-projects/page/${page + 1}` : '#'}
            style={{
              pointerEvents: page === totalPages ? 'none' : 'auto',
              opacity: page === totalPages ? 0.5 : 1,
              padding: '8px 16px',
              borderRadius: '6px',
              border: 'none',
              background: '#222',
              color: '#fff',
              textDecoration: 'none',
            }}
          >
            Next
          </a>
        </div>
      </main>
    </div>
  );
} 