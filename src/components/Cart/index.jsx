import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { removeFromCart } from '../../store/actions';
import Items from './Items';

import styles from './cart.module.less';

const Cart = props => {
  let title,
    totalPrice,
    services = null;
  let showLink = false;

  if (props.root) {
    title = props.root.title;
  }
  if (props.cart) {
    showLink = props.cart.services.length > 0;
    totalPrice = props.cart.totalPrice;
    services = <Items remove={props.remove} items={props.cart.services} />;
  }

  return (
    <section>
      <h1 className="title">{title}</h1>
      {services}
      <div className={styles.linkCase}>
        <Link to="/">+ Добавить еще одну услугу</Link>
      </div>
      <div className={styles.totalPrice}>{totalPrice} ₽</div>
      <div className={styles.buttonCase}>
        <Link disabled={!showLink} className="btn" to="/checkout">
          К выбору даты и времени
        </Link>
      </div>
    </section>
  );
};

const mapStateToProps = state => {
  return {
    root: state.appData.root,
    cart: state.cart,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    remove: id => dispatch(removeFromCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
