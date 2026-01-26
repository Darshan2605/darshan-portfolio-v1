import path from 'path';
import fs from 'fs';
import AwsBlogsFilter from '../../../components/AwsBlogsFilter';
import AwsBlogsGrid from '../../../components/AwsBlogsGrid';
import AwsBlogsPagination from '../../../components/AwsBlogsPagination';
import styles from '../../../../shared/BlogPage.module.css';

// Configuration
const BLOGS_PER_PAGE = 6;
const DATA_DIR = path.join(process.cwd(), 'src/app/aws-blogs/data');

/**
 * Converts service name to corresponding JSON filename
 * @param {string} service - Service name (e.g., "AWS EC2")
 * @returns {string} - JSON filename (e.g., "aws-blogs-ec2.json")
 */
function getServiceFile(service) {
  let key = service;
  if (key.startsWith('AWS ')) key = key.slice(4);
  key = key.toLowerCase().replace(/ /g, '-').replace(/\//g, '-');
  return `aws-blogs-${key}.json`;
}

/**
 * Reads JSON file safely with error handling
 * @param {string} filePath - Path to JSON file
 * @returns {object|null} - Parsed JSON or null
 */
function readJsonFile(filePath) {
  try {
    if (!fs.existsSync(filePath)) return null;
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (error) {
    console.error(`Error reading file: ${filePath}`, error);
    return null;
  }
}

/**
 * Generate static params for all service/page combinations
 */
export async function generateStaticParams() {
  const servicesData = readJsonFile(path.join(DATA_DIR, 'aws-blogs-services.json'));
  if (!servicesData?.services) return [];
  
  const params = [];
  
  for (const service of servicesData.services) {
    const filePath = path.join(DATA_DIR, getServiceFile(service));
    const data = readJsonFile(filePath);
    const blogs = data?.blogs || [];
    const totalPages = Math.max(1, Math.ceil(blogs.length / BLOGS_PER_PAGE));
    
    for (let page = 1; page <= totalPages; page++) {
      params.push({ service, page: page.toString() });
    }
  }
  
  return params;
}

/**
 * Generate metadata for SEO
 */
export async function generateMetadata({ params }) {
  const { service } = await params;
  const serviceName = decodeURIComponent(service);
  
  return {
    title: `${serviceName} Blogs | AWS Services`,
    description: `Explore comprehensive blogs and tutorials about ${serviceName}. Learn best practices, implementation guides, and expert tips.`,
  };
}

/**
 * AWS Blogs Page Component
 */
export default async function AwsBlogsPage({ params }) {
  const { service, page } = await params;
  const serviceName = decodeURIComponent(service);
  const pageNum = parseInt(page, 10) || 1;
  
  // Load services list for filter navigation
  const servicesData = readJsonFile(path.join(DATA_DIR, 'aws-blogs-services.json'));
  const services = servicesData?.services || [];
  
  // Load blogs for current service
  const blogsData = readJsonFile(path.join(DATA_DIR, getServiceFile(serviceName)));
  const blogs = blogsData?.blogs || [];
  
  // Calculate pagination
  const totalPages = Math.max(1, Math.ceil(blogs.length / BLOGS_PER_PAGE));
  const startIndex = (pageNum - 1) * BLOGS_PER_PAGE;
  const paginatedBlogs = blogs.slice(startIndex, startIndex + BLOGS_PER_PAGE);

  return (
    <main className={styles.pageMain}>
      <div className={styles.pageContent}>
        <header className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>AWS Services Blogs</h1>
          <p className={styles.pageSubtitle}>
            Comprehensive guides and tutorials for AWS cloud services
          </p>
        </header>
        
        <AwsBlogsFilter services={services} currentService={serviceName} />
        <AwsBlogsGrid blogs={paginatedBlogs} />
        <AwsBlogsPagination 
          service={serviceName} 
          currentPage={pageNum} 
          totalPages={totalPages} 
        />
      </div>
    </main>
  );
}
