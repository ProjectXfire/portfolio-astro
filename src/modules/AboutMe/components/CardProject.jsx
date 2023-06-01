// Styles
import styles from '../styles/cardProject.module.css';
// Components
import Tag from '@shared/components/Tag';
import Card from '@shared/components/Card';

function CardProject({ name, description, imgPath, demo, code, tags }) {
  return (
    <Card>
      <div className={styles['card-project']}>
        <div className={styles['card__hover']}>
          <p>{name}</p>
          <a href={demo} target='_blank'>
            Demo
          </a>
          <a href={code} target='_blank'>
            Code
          </a>
        </div>
        <img src={imgPath} alt={name} />
        <div className={styles['card__content']}>
          <div className={styles['tags']}>
            {tags.map((t) => (
              <Tag key={t} name={t[0] + t.substring(1).toLowerCase()} />
            ))}
          </div>
          <p>{description.length > 150 ? `${description.substring(0, 140)} ...` : description}</p>
        </div>
      </div>
    </Card>
  );
}

export default CardProject;
