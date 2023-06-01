// Styles
import styles from '../styles/cardCertificate.module.css';
// Components
import Card from '@shared/components/Card';

function CardCertificate({ name, image, school, schoolImg, link }) {
  return (
    <Card>
      <div className={styles['card-certificate']}>
        <div className={styles['card-certificate__img']}>
          <img src={image} alt={name} />
        </div>
        <div className={styles['card-certificate__content']}>
          <h3>{name}</h3>
          <a href={link} target='_blank'>
            Certificated
          </a>
        </div>
        <span>
          <img src={schoolImg} alt={school} />
        </span>
      </div>
    </Card>
  );
}
export default CardCertificate;
