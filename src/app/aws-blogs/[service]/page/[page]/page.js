import path from 'path';
import fs from 'fs';
import AwsBlogsFilter from '../../../components/AwsBlogsFilter';
import AwsBlogsGrid from '../../../components/AwsBlogsGrid';
import AwsBlogsPagination from '../../../components/AwsBlogsPagination';
import styles from '../../../components/AwsBlogs.module.css';

const BLOGS_PER_PAGE = 6;
const DATA_DIR = path.join(process.cwd(), 'src/app/aws-blogs/data');

function getServiceFile(service) {
  let key = service;
  if (key.startsWith('AWS ')) key = key.slice(4);
  key = key.toLowerCase().replace(/ /g, '-').replace(/\//g, '-');
  return `aws-blogs-${key}.json`;
}

export async function generateStaticParams() {
  const servicesPath = path.join(DATA_DIR, 'aws-blogs-services.json');
  const servicesData = JSON.parse(fs.readFileSync(servicesPath, 'utf8'));
  const services = servicesData.services;
  let params = [];
  for (const service of services) {
    const file = getServiceFile(service);
    const filePath = path.join(DATA_DIR, file);
    if (!fs.existsSync(filePath)) continue;
    const blogs = JSON.parse(fs.readFileSync(filePath, 'utf8')).blogs || [];
    const totalPages = Math.max(1, Math.ceil(blogs.length / BLOGS_PER_PAGE));
    for (let page = 1; page <= totalPages; page++) {
      params.push({ service, page: page.toString() });
    }
  }
  return params;
}

export default async function AwsBlogsPage({ params }) {
  const { service, page } = await params;
  const serviceName = decodeURIComponent(service);
  const pageNum = parseInt(page, 10) || 1;
  // Read services for filter
  const servicesPath = path.join(DATA_DIR, 'aws-blogs-services.json');
  const servicesData = JSON.parse(fs.readFileSync(servicesPath, 'utf8'));
  const services = servicesData.services;
  // Read blogs for current service
  const file = getServiceFile(serviceName);
  const filePath = path.join(DATA_DIR, file);
  let blogs = [];
  if (fs.existsSync(filePath)) {
    blogs = JSON.parse(fs.readFileSync(filePath, 'utf8')).blogs || [];
  }
  const totalPages = Math.max(1, Math.ceil(blogs.length / BLOGS_PER_PAGE));
  const paginatedBlogs = blogs.slice((pageNum - 1) * BLOGS_PER_PAGE, pageNum * BLOGS_PER_PAGE);

  return (
    <main className={styles.awsBlogsMain}>
      <div className={styles.awsBlogsHeader}>
        <h1 className={styles.heading}>AWS Services Blogs</h1>
        <AwsBlogsFilter services={services} currentService={serviceName} />
      </div>
      <AwsBlogsGrid blogs={paginatedBlogs} />
      <AwsBlogsPagination service={serviceName} currentPage={pageNum} totalPages={totalPages} />
    </main>
  );
}
