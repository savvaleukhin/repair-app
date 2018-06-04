import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import styles from './navbar.module.less';

const ROOT_PATH = '/';
const CART_PATH = '/cart';
const CHECKOUT_PATH = '/checkout';

const Navbar = ({ cartHasItems, pathname }) => {
  const isRootPath = pathname === ROOT_PATH;
  const isCartPath = pathname === CART_PATH;
  const isCheckoutPath = pathname === CHECKOUT_PATH;
  return (
    <nav>
      <ul className={styles.menu}>
        <li className={styles.menuItem}>
          <Link disabled={isRootPath} to={ROOT_PATH}>
            Услуги
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link disabled={!cartHasItems || isCartPath} to={CART_PATH}>
            Заказ
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link disabled={!cartHasItems || isCheckoutPath} to={CHECKOUT_PATH}>
            Дата и время
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const mapStateToProps = state => {
  return {
    cartHasItems: state.cart.services.length > 0,
  };
};

export default connect(mapStateToProps)(Navbar);
