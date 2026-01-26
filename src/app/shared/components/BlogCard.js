import Image from 'next/image';
import styles from '../BlogPage.module.css';

/**
 * Unified Blog/Project Card Component
 * Used across AWS Services, System Design, AWS Projects, DevOps Projects
 * 
 * @param {Object} props
 * @param {Object} props.item - Blog or project data
 * @param {string} props.item.title - Card title
 * @param {string} props.item.image - Card image URL
 * @param {string} props.item.category - Category label
 * @param {string} props.item.description - Card description
 * @param {string} props.item.link - External link URL
 * @param {string} props.buttonText - Button text (default: "Read Article")
 * @param {boolean} props.priority - Image loading priority
 * @param {string} props.defaultImage - Fallback image URL
 */
export default function BlogCard({ 
  item, 
  buttonText = "Read Article",
  priority = false,
  defaultImage = "https://wallpaperaccess.com/full/6522668.png"
}) {
  const imageUrl = item.image || defaultImage;
  const isExternal = item.link?.startsWith('http');
  
  return (
    <article className={styles.card}>
      <div className={styles.cardImageWrapper}>
        <Image
          src={imageUrl}
          alt={item.title}
          width={400}
          height={200}
          className={styles.cardImage}
          priority={priority}
        />
        <div className={styles.cardImageOverlay} />
      </div>
      <div className={styles.cardContent}>
        {item.category && (
          <span className={styles.cardCategory}>{item.category}</span>
        )}
        <h3 className={styles.cardTitle}>{item.title}</h3>
        {item.description && (
          <p className={styles.cardDescription}>{item.description}</p>
        )}
        {item.link && (
          <a
            href={item.link}
            className={styles.cardButton}
            target={isExternal ? "_blank" : "_self"}
            rel={isExternal ? "noopener noreferrer" : undefined}
          >
            {buttonText}
          </a>
        )}
      </div>
    </article>
  );
}

