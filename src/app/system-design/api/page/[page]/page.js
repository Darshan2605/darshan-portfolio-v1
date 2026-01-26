import blogs from './blogs.json';
import Link from 'next/link';
import { BlogGrid, BlogPagination } from '../../../../shared/components';
import styles from '../../../../shared/BlogPage.module.css';

// Configuration
const BLOGS_PER_PAGE = 6;

/**
 * Generate static params for all pages
 */
export function generateStaticParams() {
  const totalPages = Math.ceil(blogs.length / BLOGS_PER_PAGE);
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
    title: `API Design - Page ${page} | System Design`,
    description: 'Explore API design patterns including REST, GraphQL, gRPC and best practices.',
  };
}

/**
 * System Design API Page Component
 */
export default async function SystemDesignApiPage({ params }) {
  const { page } = await params;
  const currentPage = parseInt(page, 10) || 1;
  const totalPages = Math.ceil(blogs.length / BLOGS_PER_PAGE);
  
  const startIdx = (currentPage - 1) * BLOGS_PER_PAGE;
  const currentBlogs = blogs.slice(startIdx, startIdx + BLOGS_PER_PAGE);

  return (
    <main className={styles.pageMain}>
      <div className={styles.pageContent}>
        {/* Breadcrumb Navigation */}
        <nav className={styles.breadcrumb}>
          <Link href="/system-design/page/1" className={styles.breadcrumbLink}>
            System Design
          </Link>
          <span className={styles.breadcrumbSeparator}>›</span>
          <span className={styles.breadcrumbCurrent}>API Design</span>
        </nav>

        <header className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>API Design</h1>
          <p className={styles.pageSubtitle}>
            REST, GraphQL, gRPC & API best practices
          </p>
        </header>

        <BlogGrid 
          items={currentBlogs}
          buttonText="Read Article"
          emptyIcon="📭"
          emptyTitle="No blogs found"
          emptyText="Check back later for new content."
        />

        <BlogPagination 
          basePath="/system-design/api/page"
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </div>
    </main>
  );
}
