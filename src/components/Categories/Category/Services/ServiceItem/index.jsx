import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import styles from './serviceItem.module.less';

const ServiceItem = props => {
  const { id, parent_id, name, teaser_card, data } = props.service;
  return (
    <div className={styles.serviceItem}>
      <div className={styles.desc}>
        <Link to={`/categories/${parent_id}/services/${id}`}>{name}</Link>
        <p className={styles.teaser}>{teaser_card}</p>
      </div>
      <div>
        {data.tarif === 0 ? 'Бесплатно' : `${data.tarif} ₽`}
      </div>
    </div>
  );
};

export default withRouter(ServiceItem);
