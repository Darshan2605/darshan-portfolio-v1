import projectsData from './data/devops-projects.json';
import DevopsProjectsGrid from './components/DevopsProjectsGrid';
import styles from '../shared/BlogPage.module.css';

export default function DevopsProjectsPage() {
  const projects = projectsData.projects || [];
  
  return (
    <main className={styles.pageMain}>
      <div className={styles.pageContent}>
        <header className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>DevOps Projects</h1>
          <p className={styles.pageSubtitle}>
            CI/CD, Docker, Kubernetes, Jenkins & more
          </p>
        </header>
        <DevopsProjectsGrid projects={projects} />
      </div>
    </main>
  );
}
