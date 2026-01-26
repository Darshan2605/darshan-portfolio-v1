import projects from './kubernetes-projects.json';
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
    title: `Kubernetes Projects - Page ${page} | DevOps`,
    description: 'Explore Kubernetes projects with container orchestration, deployments, and cloud-native apps.',
  };
}

/**
 * Kubernetes Projects Page Component
 */
export default async function KubernetesProjectsPage({ params }) {
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
          <span className={styles.breadcrumbCurrent}>Kubernetes</span>
        </nav>

        <header className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>Kubernetes Projects</h1>
          <p className={styles.pageSubtitle}>
            Container orchestration, deployments & cloud-native apps
          </p>
        </header>

        <BlogGrid 
          items={currentProjects}
          buttonText="View Project"
          emptyIcon="☸️"
          emptyTitle="No projects found"
          emptyText="Check back later for new Kubernetes projects."
        />

        <BlogPagination 
          basePath="/devops-projects/kubernetes-projects/page"
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </div>
    </main>
  );
}
