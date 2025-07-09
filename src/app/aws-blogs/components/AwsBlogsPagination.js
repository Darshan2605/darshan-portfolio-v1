import Link from 'next/link';
import styles from './AwsBlogs.module.css';

export default function AwsBlogsPagination({ service, currentPage, totalPages }) {
  if (totalPages <= 1) return null;
  const pageLinks = [];
  for (let i = 1; i <= totalPages; i++) {
    pageLinks.push(
      <Link
        key={i}
        href={`/aws-blogs/${encodeURIComponent(service)}/page/${i}`}
        className={i === currentPage ? styles.activePage : styles.pageNavBtn}
        prefetch={false}
      >
        {i}
      </Link>
    );
  }
  return (
    <nav className={styles.pagination} aria-label="Pagination">
      <Link
        href={`/aws-blogs/${encodeURIComponent(service)}/page/${currentPage - 1}`}
        className={styles.pageNavBtn}
        aria-disabled={currentPage === 1}
        tabIndex={currentPage === 1 ? -1 : 0}
        prefetch={false}
        style={{ pointerEvents: currentPage === 1 ? 'none' : undefined, opacity: currentPage === 1 ? 0.5 : 1 }}
      >
        Previous
      </Link>
      {pageLinks}
      <Link
        href={`/aws-blogs/${encodeURIComponent(service)}/page/${currentPage + 1}`}
        className={styles.pageNavBtn}
        aria-disabled={currentPage === totalPages}
        tabIndex={currentPage === totalPages ? -1 : 0}
        prefetch={false}
        style={{ pointerEvents: currentPage === totalPages ? 'none' : undefined, opacity: currentPage === totalPages ? 0.5 : 1 }}
      >
        Next
      </Link>
    </nav>
  );
}
