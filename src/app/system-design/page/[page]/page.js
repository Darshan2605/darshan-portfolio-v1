import blogs from './blogs.json';
import { BlogGrid, BlogPagination } from '../../../shared/components';
import styles from '../../../shared/BlogPage.module.css';

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
    title: `System Design - Page ${page} | Portfolio`,
    description: 'Explore system design concepts, patterns, architectures, and real-world case studies.',
  };
}

/**
 * System Design Page Component
 */
export default async function SystemDesignPage({ params }) {
  const { page } = await params;
  const currentPage = parseInt(page, 10) || 1;
  const totalPages = Math.ceil(blogs.length / BLOGS_PER_PAGE);
  
  const startIdx = (currentPage - 1) * BLOGS_PER_PAGE;
  const currentBlogs = blogs.slice(startIdx, startIdx + BLOGS_PER_PAGE);

  return (
    <main className={styles.pageMain}>
      <div className={styles.pageContent}>
        <header className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>System Design</h1>
          <p className={styles.pageSubtitle}>
            Concepts, patterns, and real-world architectures
          </p>
        </header>

        <BlogGrid 
          items={currentBlogs}
          buttonText="Explore"
          emptyIcon="📭"
          emptyTitle="No blogs found"
          emptyText="Check back later for new content."
        />

        <BlogPagination 
          basePath="/system-design/page"
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </div>
    </main>
  );
}
