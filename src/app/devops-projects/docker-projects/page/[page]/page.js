import projects from './docker-projects.json';
import Link from 'next/link';
import { BlogGrid, BlogPagination } from '../../../../shared/components';
import styles from '../../../../shared/BlogPage.module.css';

// Configuration
const PROJECTS_PER_PAGE = 6;

/**
 * Generate static params for all pages
 */
export function generateStaticParams() {
  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);
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
    title: `Docker Projects - Page ${page} | DevOps`,
    description: 'Explore Docker projects with containerization, Docker Compose, and container orchestration.',
  };
}

/**
 * Docker Projects Page Component
 */
export default async function DockerProjectsPage({ params }) {
  const { page } = await params;
  const currentPage = parseInt(page, 10) || 1;
  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);
  
  const startIdx = (currentPage - 1) * PROJECTS_PER_PAGE;
  const currentProjects = projects.slice(startIdx, startIdx + PROJECTS_PER_PAGE);

  return (
    <main className={styles.pageMain}>
      <div className={styles.pageContent}>
        {/* Breadcrumb Navigation */}
        <nav className={styles.breadcrumb}>
          <Link href="/devops-projects/page/1" className={styles.breadcrumbLink}>
            DevOps Projects
          </Link>
          <span className={styles.breadcrumbSeparator}>›</span>
          <span className={styles.breadcrumbCurrent}>Docker</span>
        </nav>

        <header className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>Docker Projects</h1>
          <p className={styles.pageSubtitle}>
            Containerization, Docker Compose & orchestration
          </p>
        </header>

        <BlogGrid 
          items={currentProjects}
          buttonText="View Project"
          emptyIcon="🐳"
          emptyTitle="No projects found"
          emptyText="Check back later for new Docker projects."
        />

        <BlogPagination 
          basePath="/devops-projects/docker-projects/page"
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </div>
    </main>
  );
}
