import googleAdkProjects from './google-adk-blogs.json';
import Image from 'next/image';
import styles from './GoogleAdkBlogs.module.css';

const PROJECTS_PER_PAGE = 6;

export function generateStaticParams() {
  const totalPages = Math.ceil(googleAdkProjects.length / PROJECTS_PER_PAGE);
  return Array.from({ length: totalPages }, (_, i) => ({
    page: (i + 1).toString(),
  }));
}

export default async function GoogleAdkBlogsPage({ params }) {
  const page = parseInt((await params).page, 10) || 1;
  const totalPages = Math.ceil(googleAdkProjects.length / PROJECTS_PER_PAGE);
  const startIdx = (page - 1) * PROJECTS_PER_PAGE;
  const endIdx = startIdx + PROJECTS_PER_PAGE;
  const currentProjects = googleAdkProjects.slice(startIdx, endIdx);

  return (
    <div className={styles.googleAdkBlogsBg}>
      <main className={styles.googleAdkBlogsMain}>
        <h1 className={styles.googleAdkBlogsTitle}>Google ADK Projects</h1>
        <section className={styles.projectsGrid}>
          {currentProjects.map((project, idx) => (
            <div className={styles.projectCard} key={startIdx + idx}>
              <a href={project.link} className={styles.cardLink} target="_blank" rel="noopener noreferrer">
                <figure className={styles.bannerBox}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={200}
                    className={styles.cardImage}
                    unoptimized={false}
                  />
                </figure>
                <div className={styles.cardContent}>
                  <div className={styles.cardMeta}>
                    <p className={styles.cardCategory}>{project.category}</p>
                  </div>
                  <h3 className={styles.cardTitle}>{project.title}</h3>
                  <p className={styles.cardText}>{project.description}</p>
                </div>
              </a>
            </div>
          ))}
        </section>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', margin: '32px 0', marginTop: 'auto', paddingTop: '20px' }}>
          <a
            href={page > 1 ? `/ai-ml-genai-blogs/google-adk-blogs/page/${page - 1}` : '#'}
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
            href={page < totalPages ? `/ai-ml-genai-blogs/google-adk-blogs/page/${page + 1}` : '#'}
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