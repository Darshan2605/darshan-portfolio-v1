import BlogCard from './BlogCard';
import styles from '../BlogPage.module.css';

/**
 * Unified Blog/Project Grid Component
 * Displays a grid of cards with empty state handling
 * 
 * @param {Object} props
 * @param {Array} props.items - Array of blog/project items
 * @param {string} props.buttonText - Button text for cards
 * @param {string} props.emptyIcon - Icon for empty state (emoji)
 * @param {string} props.emptyTitle - Title for empty state
 * @param {string} props.emptyText - Description for empty state
 * @param {string} props.defaultImage - Default image for cards
 */
export default function BlogGrid({ 
  items = [],
  buttonText = "Read Article",
  emptyIcon = "📭",
  emptyTitle = "No content found",
  emptyText = "Check back later for new content.",
  defaultImage
}) {
  if (!items || items.length === 0) {
    return (
      <div className={styles.emptyState}>
        <div className={styles.emptyStateIcon}>{emptyIcon}</div>
        <h3 className={styles.emptyStateTitle}>{emptyTitle}</h3>
        <p className={styles.emptyStateText}>{emptyText}</p>
      </div>
    );
  }
  
  return (
    <section className={styles.cardsGrid}>
      {items.map((item, idx) => (
        <BlogCard 
          key={item.link ? `${item.link}-${idx}` : idx} 
          item={item} 
          buttonText={buttonText}
          priority={idx < 3}
          defaultImage={defaultImage}
        />
      ))}
    </section>
  );
}

