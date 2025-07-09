import AwsBlogCard from './AwsBlogCard';
import styles from './AwsBlogs.module.css';

export default function AwsBlogsGrid({ blogs }) {
  if (!blogs || blogs.length === 0) {
    return <div className={styles.noBlogs}>No blogs found for this service.</div>;
  }
  return (
    <section className={styles.blogPosts}>
      {blogs.map((blog, idx) => (
        <AwsBlogCard key={blog.link + idx} blog={blog} />
      ))}
    </section>
  );
}
