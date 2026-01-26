import Link from 'next/link';
import styles from '../BlogPage.module.css';

/**
 * Unified Filter Navigation Component
 * Used for category/service filtering (like AWS Services)
 * 
 * @param {Object} props
 * @param {Array} props.filters - Array of filter options (strings)
 * @param {string} props.currentFilter - Currently selected filter
 * @param {Function} props.getFilterPath - Function to generate filter URL path
 */
export default function BlogFilter({ filters = [], currentFilter, getFilterPath }) {
  if (!filters || filters.length === 0) return null;

  return (
    <nav className={styles.filterNav}>
      <div className={styles.filterWrapper}>
        {filters.map((filter) => (
          <Link
            key={filter}
            href={getFilterPath(filter)}
            className={`${styles.filterChip} ${
              filter === currentFilter ? styles.filterChipActive : ''
            }`}
            prefetch={false}
          >
            {filter}
          </Link>
        ))}
      </div>
    </nav>
  );
}

