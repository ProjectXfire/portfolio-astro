import { useEffect } from 'react';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
// Styles
import styles from '@shared/styles/cards.module.css';
// Data
import certificates from '../data/DataCertificates.json';
// Components
import CardCertificate from '../components/CardCertificate';
import Pagination from '@shared/components/Pagination';

const TOTAL_PAGES = 6;
const ITEMS_PER_PAGE = 4;

function MyLearning() {
  const [pageInfo, setPageInfo] = useState({
    start: 0,
    end: 4,
    totalPages: TOTAL_PAGES,
    itemsPerPage: ITEMS_PER_PAGE
  });

  const isDesktop = useMediaQuery({ query: '(min-width: 1207px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 907px)' });
  const isMobile = useMediaQuery({ query: '(min-width: 607px)' });
  const isSmallsMobile = useMediaQuery({ query: '(min-width: 0px)' });

  const handlePage = (page) => {
    const newStart = (page - 1) * pageInfo.itemsPerPage;
    const newEnd = newStart + pageInfo.itemsPerPage;
    setPageInfo({ ...pageInfo, start: newStart, end: newEnd });
  };

  useEffect(() => {
    let ipp = 4;
    if (isSmallsMobile) ipp = 1;
    if (isMobile) ipp = 2;
    if (isTablet) ipp = 3;
    if (isDesktop) ipp = 4;
    setPageInfo({
      ...pageInfo,
      itemsPerPage: ipp,
      totalPages: Math.ceil(certificates.length / ipp),
      start: 0,
      end: ipp
    });
  }, [isDesktop, isTablet, isMobile, isSmallsMobile]);

  return (
    <section className={styles.container}>
      <h1>My Learning</h1>
      <div className={styles.projects}>
        {certificates.slice(pageInfo.start, pageInfo.end).map((c) => (
          <CardCertificate
            key={c.id}
            name={c.name}
            school={c.school}
            image={c.image}
            schoolImg={c.schoolImg}
            link={c.link}
          />
        ))}
      </div>
      <Pagination pages={pageInfo.totalPages} currentPage={handlePage} />
    </section>
  );
}
export default MyLearning;
