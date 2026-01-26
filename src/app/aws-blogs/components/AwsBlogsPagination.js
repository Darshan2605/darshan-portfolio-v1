import { BlogPagination } from '../../shared/components';

export default function AwsBlogsPagination({ service, currentPage, totalPages }) {
  const basePath = `/aws-blogs/${encodeURIComponent(service)}/page`;
  
  return (
    <BlogPagination 
      basePath={basePath}
      currentPage={currentPage}
      totalPages={totalPages}
    />
  );
}
