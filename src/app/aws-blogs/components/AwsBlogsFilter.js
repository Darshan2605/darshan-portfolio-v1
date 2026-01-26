import { BlogFilter } from '../../shared/components';

export default function AwsBlogsFilter({ services, currentService }) {
  const getFilterPath = (service) => `/aws-blogs/${encodeURIComponent(service)}/page/1`;
  
  return (
    <BlogFilter 
      filters={services}
      currentFilter={currentService}
      getFilterPath={getFilterPath}
    />
  );
}
