import projectsData from '../../data/devops-projects.json';
import DevopsProjectsGrid from '../../components/DevopsProjectsGrid';
import styles from '../../components/DevopsProjects.module.css';

const PROJECTS_PER_PAGE = 6;

export function generateStaticParams() {
  const totalPages = Math.ceil((projectsData.projects || []).length / PROJECTS_PER_PAGE);
  return Array.from({ length: totalPages }, (_, i) => ({
    page: (i + 1).toString(),
  }));
}

export default async function DevopsProjectsPage({ params }) {
  const page = parseInt((await params).page, 10) || 1;
  const allProjects = projectsData.projects || [];
  const totalPages = Math.ceil(allProjects.length / PROJECTS_PER_PAGE);
  const startIdx = (page - 1) * PROJECTS_PER_PAGE;
  const endIdx = startIdx + PROJECTS_PER_PAGE;
  const currentProjects = allProjects.slice(startIdx, endIdx);

  return (
    <div className={styles.devopsMain}>
      <h1 className={styles.heading}>DevOps Projects</h1>
      <DevopsProjectsGrid projects={currentProjects} />
      <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', margin: '32px 0' }}>
        <a
          href={page > 1 ? `/devops-projects/page/${page - 1}` : '#'}
          style={{
            pointerEvents: page === 1 ? 'none' : 'auto',
            opacity: page === 1 ? 0.5 : 1,
            padding: '8px 16px',
            borderRadius: '6px',
            border: 'none',
            background: '#222',
            color: '#fff',
            textDecoration: 'none',
          }}
        >
          Prev
        </a>
        <span style={{ color: '#fff', alignSelf: 'center' }}>
          Page {page} of {totalPages}
        </span>
        <a
          href={page < totalPages ? `/devops-projects/page/${page + 1}` : '#'}
          style={{
            pointerEvents: page === totalPages ? 'none' : 'auto',
            opacity: page === totalPages ? 0.5 : 1,
            padding: '8px 16px',
            borderRadius: '6px',
            border: 'none',
            background: '#222',
            color: '#fff',
            textDecoration: 'none',
          }}
        >
          Next
        </a>
      </div>
    </div>
  );
}
