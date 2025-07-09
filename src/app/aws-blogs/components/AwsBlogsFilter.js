"use client";
import Link from 'next/link';
import styles from './AwsBlogs.module.css';

export default function AwsBlogsFilter({ services, currentService }) {
  return (
    <div className={styles.filterContainer}>
      {services.map(service => (
        <Link
          key={service}
          href={`/aws-blogs/${encodeURIComponent(service)}/page/1`}
          className={`${styles.serviceFilter} ${service === currentService ? styles.active : ''}`}
          prefetch={false}
        >
          {service}
        </Link>
      ))}
    </div>
  );
}
