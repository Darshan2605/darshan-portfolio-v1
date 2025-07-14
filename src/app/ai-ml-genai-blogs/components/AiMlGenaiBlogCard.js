import styles from './AiMlGenaiBlogs.module.css';

export default function AiMlGenaiBlogCard({ project }) {
  return (
    <div className={styles.projectCard}>
      <a href={project.link} className={styles.cardLink}>
        <figure className={styles.bannerBox}>
          <img 
            src={project.image} 
            alt={project.title} 
            className={styles.cardImage}
            loading="lazy" 
          />
        </figure>
        <div className={styles.cardContent}>
          <div className={styles.cardMeta}>
            <p className={styles.cardCategory}>{project.category}</p>
          </div>
          <h3 className={styles.cardTitle}>{project.title}</h3>
          <p className={styles.cardText}>{project.description}</p>
        </div>
      </a>
    </div>
  );
} 