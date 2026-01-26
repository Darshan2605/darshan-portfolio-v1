import { BlogGrid } from '../../shared/components';

export default function DevopsProjectsGrid({ projects }) {
  return (
    <BlogGrid 
      items={projects}
      buttonText="View Project"
      emptyIcon="🚀"
      emptyTitle="No projects found"
      emptyText="Check back later for new DevOps projects."
    />
  );
}
