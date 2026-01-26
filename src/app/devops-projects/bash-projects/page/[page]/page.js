import projects from './bash-projects.json';
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
    title: `Bash Projects - Page ${page} | DevOps`,
    description: 'Explore Bash scripting projects with automation, shell scripts, and Linux administration.',
  };
}

/**
 * Bash Projects Page Component
 */
export default async function BashProjectsPage({ params }) {
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
          <span className={styles.breadcrumbCurrent}>Bash</span>
        </nav>

        <header className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>Bash Projects</h1>
          <p className={styles.pageSubtitle}>
            Shell scripting, automation & Linux administration
          </p>
        </header>

        <BlogGrid 
          items={currentProjects}
          buttonText="View Project"
          emptyIcon="💻"
          emptyTitle="No projects found"
          emptyText="Check back later for new Bash projects."
        />

        <BlogPagination 
          basePath="/devops-projects/bash-projects/page"
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </div>
    </main>
  );
}
