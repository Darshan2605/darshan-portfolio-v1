import Link from 'next/link';
import styles from '../BlogPage.module.css';

/**
 * Unified Pagination Component
 * Smart pagination with ellipsis for large page counts
 * 
 * @param {Object} props
 * @param {string} props.basePath - Base URL path for pagination links
 * @param {number} props.currentPage - Current active page number
 * @param {number} props.totalPages - Total number of pages
 */
export default function BlogPagination({ basePath, currentPage, totalPages }) {
  if (totalPages <= 1) return null;

  /**
   * Generate page numbers with ellipsis for large page counts
   * Shows: 1 ... current-1 current current+1 ... totalPages
   */
  const getPageNumbers = () => {
    const pages = [];
    const showEllipsis = totalPages > 7;

    if (!showEllipsis) {
      // Show all pages if total is 7 or less
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Smart ellipsis logic
      if (currentPage <= 3) {
        // Near start: show 1,2,3,4 ... last
        for (let i = 1; i <= 4; i++) pages.push(i);
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        // Near end: show 1 ... last-3,last-2,last-1,last
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i);
      } else {
        // Middle: show 1 ... current-1,current,current+1 ... last
        pages.push(1);
        pages.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
        pages.push('...');
        pages.push(totalPages);
      }
    }
    return pages;
  };

  return (
    <nav className={styles.paginationNav} aria-label="Pagination">
      {/* Previous Button */}
      <Link
        href={`${basePath}/${currentPage - 1}`}
        className={`${styles.paginationBtn} ${currentPage === 1 ? styles.paginationBtnDisabled : ''}`}
        aria-disabled={currentPage === 1}
        tabIndex={currentPage === 1 ? -1 : 0}
        prefetch={false}
      >
        ← Previous
      </Link>

      {/* Page Numbers */}
      <div className={styles.paginationPages}>
        {getPageNumbers().map((page, idx) =>
          page === '...' ? (
            <span key={`ellipsis-${idx}`} className={styles.paginationEllipsis}>
              ...
            </span>
          ) : (
            <Link
              key={page}
              href={`${basePath}/${page}`}
              className={`${styles.paginationBtn} ${page === currentPage ? styles.paginationBtnActive : ''}`}
              prefetch={false}
              aria-current={page === currentPage ? 'page' : undefined}
            >
              {page}
            </Link>
          )
        )}
      </div>

      {/* Next Button */}
      <Link
        href={`${basePath}/${currentPage + 1}`}
        className={`${styles.paginationBtn} ${currentPage === totalPages ? styles.paginationBtnDisabled : ''}`}
        aria-disabled={currentPage === totalPages}
        tabIndex={currentPage === totalPages ? -1 : 0}
        prefetch={false}
      >
        Next →
      </Link>
    </nav>
  );
}

