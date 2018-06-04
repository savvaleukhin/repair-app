import React from 'react';
import styles from './service.module.less';

const Service = ({
  service,
  quantity,
  inCart,
  onAdd,
  onRemove,
  onAddToCart,
}) => {
  const price = service.data.tarif;
  return (
    <section>
      <h1 className="title">{service.name}</h1>
      <div className={styles.totalPrice}>
        <span>{price > 0 ? `${quantity * price} ₽` : 'Бесплатно'}</span>
      </div>
      <div className={styles.controlBar}>
        <div className={styles.btns}>
          <div onClick={onRemove} className={styles.btnMinus}>
            <div className={styles.btnContent}>
              <div />
            </div>
          </div>
          <div onClick={onAdd} className={styles.btnPlus}>
            <div className={styles.btnContent}>
              <div />
              <div />
            </div>
          </div>
        </div>
        <div className={styles.price}>
          {quantity} × {price} ₽
        </div>
      </div>
      <button onClick={onAddToCart} className="btn">
        {inCart ? 'Сохранить' : 'Добавить к заказу'}
      </button>
    </section>
  );
};

export default Service;
