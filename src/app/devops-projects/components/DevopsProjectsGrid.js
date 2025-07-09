import DevopsProjectCard from './DevopsProjectCard';
import styles from './DevopsProjects.module.css';

export default function DevopsProjectsGrid({ projects }) {
  if (!projects || projects.length === 0) {
    return (
      <div className={styles.noProjects}>
        No projects found.
      </div>
    );
  }
  
  return (
    <section className={styles.projectsGrid}>
      {projects.map((project, idx) => (
        <DevopsProjectCard key={project.title + idx} project={project} />
      ))}
    </section>
  );
}
