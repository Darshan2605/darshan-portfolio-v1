import projectsData from './data/devops-projects.json';
import DevopsProjectsGrid from './components/DevopsProjectsGrid';
import styles from './components/DevopsProjects.module.css';

export default function DevopsProjectsPage() {
  const projects = projectsData.projects || [];
  
  return (
    <div className={styles.devopsMain}>
      <h1 className={styles.heading}>DevOps Projects</h1>
      <DevopsProjectsGrid projects={projects} />
    </div>
  );
} 