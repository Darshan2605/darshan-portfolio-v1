import projects from './aws-projects.json';
import { BlogGrid, BlogPagination } from '../../../shared/components';
import styles from '../../../shared/BlogPage.module.css';

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
    title: `AWS Projects - Page ${page} | Portfolio`,
    description: 'Explore hands-on AWS projects with step-by-step implementation guides, CI/CD pipelines, Docker deployments, and more.',
  };
}

/**
 * AWS Projects Page Component
 */
export default async function AwsProjectsPage({ params }) {
  const { page } = await params;
  const currentPage = parseInt(page, 10) || 1;
  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);
  
  // Calculate pagination indices
  const startIdx = (currentPage - 1) * PROJECTS_PER_PAGE;
  const currentProjects = projects.slice(startIdx, startIdx + PROJECTS_PER_PAGE);

  return (
    <main className={styles.pageMain}>
      <div className={styles.pageContent}>
        <header className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>AWS Projects</h1>
          <p className={styles.pageSubtitle}>
            Hands-on AWS projects with detailed implementation guides
          </p>
        </header>

        <BlogGrid 
          items={currentProjects}
          buttonText="View Project"
          emptyIcon="📭"
          emptyTitle="No projects found"
          emptyText="Check back later for new projects."
          defaultImage="https://wallpaperaccess.com/full/6522668.png"
        />

        <BlogPagination 
          basePath="/aws-projects/page"
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </div>
    </main>
  );
}
