import { BlogGrid } from '../../shared/components';

export default function AwsBlogsGrid({ blogs }) {
  return (
    <BlogGrid 
      items={blogs}
      buttonText="Read Article"
      emptyIcon="📭"
      emptyTitle="No blogs found"
      emptyText="No blogs available for this service yet."
      defaultImage="https://wallpaperaccess.com/full/6522668.png"
    />
  );
}
