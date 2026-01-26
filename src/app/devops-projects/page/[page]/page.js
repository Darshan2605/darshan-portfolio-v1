import projectsData from '../../data/devops-projects.json';
import { BlogGrid, BlogPagination } from '../../../shared/components';
import styles from '../../../shared/BlogPage.module.css';

// Configuration
const PROJECTS_PER_PAGE = 6;

/**
 * Generate static params for all pages
 */
export function generateStaticParams() {
  const totalPages = Math.ceil((projectsData.projects || []).length / PROJECTS_PER_PAGE);
  return Array.from({ length: totalPages }, (_, i) => ({
    page: (i + 1).toString(),
  }));
}

/**
 * Generate metadata for SEO
 */
export async function generateMetadata({ params }) {
  const { page } = await params;
  return {
    title: `DevOps Projects - Page ${page} | Portfolio`,
    description: 'Explore DevOps projects featuring CI/CD pipelines, Docker, Kubernetes, Jenkins, and more.',
  };
}

/**
 * DevOps Projects Page Component
 */
export default async function DevopsProjectsPage({ params }) {
  const { page } = await params;
  const currentPage = parseInt(page, 10) || 1;
  const allProjects = projectsData.projects || [];
  const totalPages = Math.ceil(allProjects.length / PROJECTS_PER_PAGE);
  
  const startIdx = (currentPage - 1) * PROJECTS_PER_PAGE;
  const currentProjects = allProjects.slice(startIdx, startIdx + PROJECTS_PER_PAGE);

  return (
    <main className={styles.pageMain}>
      <div className={styles.pageContent}>
        <header className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>DevOps Projects</h1>
          <p className={styles.pageSubtitle}>
            CI/CD, Docker, Kubernetes, Jenkins & more
          </p>
        </header>
        
        <BlogGrid 
          items={currentProjects}
          buttonText="View Project"
          emptyIcon="🚀"
          emptyTitle="No projects found"
          emptyText="Check back later for new DevOps projects."
        />
        
        <BlogPagination 
          basePath="/devops-projects/page"
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </div>
    </main>
  );
}
