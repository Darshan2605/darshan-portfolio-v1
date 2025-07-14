import AiMlGenaiBlogCard from './AiMlGenaiBlogCard';
import styles from './AiMlGenaiBlogs.module.css';

export default function AiMlGenaiBlogsGrid({ projects }) {
  if (!projects || projects.length === 0) {
    return (
      <div className={styles.noProjects}>
        No blogs found.
      </div>
    );
  }
  return (
    <section className={styles.projectsGrid}>
      {projects.map((project, idx) => (
        <AiMlGenaiBlogCard key={project.title + idx} project={project} />
      ))}
    </section>
  );
} 