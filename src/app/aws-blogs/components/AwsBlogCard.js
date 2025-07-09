import styles from './AwsBlogs.module.css';

export default function AwsBlogCard({ blog }) {
  return (
    <div className={styles.blogPostItem}>
      <div className={styles.blogContent}>
        <div className={styles.blogMeta}>
          <p className={styles.blogCategory}>{blog.category}</p>
        </div>
        <h3 className={styles.blogItemTitle}>{blog.title}</h3>
        {blog.description && (
          <p className={styles.blogText}>{blog.description}</p>
        )}
        {blog.link && (
          <a
            href={blog.link}
            className={styles.blogLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read More
          </a>
        )}
      </div>
    </div>
  );
}
