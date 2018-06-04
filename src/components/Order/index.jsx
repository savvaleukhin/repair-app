import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import icon from './icon.svg';
import styles from './order.module.less';

const Order = props => {
  const { services } = props;
  const length = services.length;
  let title,
    redirect,
    date,
    time = null;

  length === 0
    ? (redirect = <Redirect to="/" />)
    : length > 1
      ? (title = `Ремонт, ${length} услуги`)
      : (title = services[0].name);

  if (props.date) date = props.date.format('DD MMMM');
  if (props.time) time = props.time.format('HH:mm');

  return (
    <section className={styles.order}>
      {redirect}

      <img src={icon} className={styles.icon} alt="success" />
      <h1 className="title">
        {title}
        <br />
        {date} в {time}
      </h1>
      <p className={styles.message}>
        Заказ оформлен. При необходимости, диспетчер свяжется с вами для
        уточнения
      </p>
      <div>
        <Link to="/">Мои заказы</Link>
      </div>
    </section>
  );
};

const mapStateToProps = state => {
  return {
    date: state.order.date,
    time: state.order.time,
    services: state.order.services,
  };
};

export default connect(mapStateToProps)(Order);
