import React from 'react';

import { Link } from 'react-router-dom';
import styles from './item.module.less';

const Item = props => {
  const { id, parent_id, name, data, quantity } = props.item;
  const { remove } = props;
  const itemPrice = data.tarif * quantity;

  return (
    <div className={styles.item}>
      <div className={styles.title}>
        <Link to={`/categories/${parent_id}/services/${id}`}>{name}</Link>
      </div>
      <div className={styles.data}>
        <div className={styles.price}>
          {itemPrice === 0 ? 'Бесплатно' : `${itemPrice} ₽`}
        </div>
        <div className={styles.action}>
          <i onClick={() => remove(id)} className="icon-trash" />
        </div>
      </div>
    </div>
  );
};

export default Item;
