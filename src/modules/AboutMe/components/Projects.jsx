// Styles
import styles from '../styles/projects.module.css';
// Data
import projects from '../data/DataProjects.json';
// Components
import CardProject from '@shared/components/CardProject';

function Projects() {
  return (
    <section className={styles.container}>
      <h1>Projects</h1>
      <div className={styles.projects}>
        {projects.map((p) => (
          <CardProject
            key={p.id}
            imgPath={p.image}
            name={p.name}
            description={p.description}
            demo={p.demo}
            code={p.code}
            tags={p.tags}
          />
        ))}
      </div>
      <div>Pagination</div>
    </section>
  );
}
export default Projects;
