import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import moment from 'moment';
import { DatePicker, TimePicker } from 'antd';

import datePickerLocale from 'antd/lib/date-picker/locale/ru_RU';
import 'moment/locale/ru';

import { placeOrder, clearCart } from '../../store/actions';

import styles from './checkout.module.less';

moment.locale('ru-ru');

const disabledDate = current => {
  const past = moment()
    .clone()
    .endOf('day');
  const future = moment()
    .clone()
    .add(30, 'days');

  return current && (current < past || current > future);
};

const getNextDay = () => {
  return moment()
    .clone()
    .add(1, 'day');
};

const range = (start, end) => {
  const range = [];
  for (let i = start; i < end; i++) {
    range.push(i);
  }
  return range;
};

const disabledHours = () => {
  return range(19, 25).concat(range(0, 9));
};

const disabledMinutes = () => {
  return range(0, 60);
};

class Checkout extends React.Component {
  state = {
    date: null,
    time: null,
  };

  componentDidMount() {
    this.initDateTime();
  }

  initDateTime() {
    this.setState({
      date: getNextDay(),
      time: moment('09:00', 'HH:mm'),
    });
  }

  dateChangeHanlder = date => {
    if (date) {
      this.setState({ date: date });
    }
  };

  timeChangeHanlder = (time) => {
    if (time) {
      this.setState({ time: time });
    }
  };

  placeOrder = () => {
    const { date, time } = this.state;
    const { services } = this.props;
    this.props.placeOrder(services, { date, time });
    this.props.clearCart();
    this.props.history.replace('/order');
  };

  render() {
    const { services, totalPrice } = this.props;
    const length = services.length;
    let title,
      redirect = null;

    length === 0
      ? (redirect = <Redirect to="/" />)
      : length > 1
        ? (title = `Ремонт, ${length} услуги`)
        : (title = services[0].name);

    return (
      <div>
        {redirect}

        <h1 className="title">{title}</h1>

        <div className={styles.totalPrice}>
          <span>{totalPrice > 0 ? `${totalPrice} ₽` : 'Бесплатно'}</span>
        </div>

        <p className={styles.message}>Выберите удобный день и время</p>

        <div className={styles.datePicker}>
          <DatePicker
            onChange={this.dateChangeHanlder}
            locale={datePickerLocale}
            format="DD MMMM, dd"
            disabledDate={disabledDate}
            value={this.state.date}
            allowClear={false}
          />
        </div>

        <div className={styles.timePicker}>
          <TimePicker
            onChange={this.timeChangeHanlder}
            placeholder="Время"
            format="HH:mm"
            disabledHours={disabledHours}
            disabledMinutes={disabledMinutes}
            hideDisabledOptions
            value={this.state.time}
          />
        </div>

        <div className={styles.buttonCase}>
          <button onClick={this.placeOrder} className="btn">
            Заказать
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    services: state.cart.services,
    totalPrice: state.cart.totalPrice,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    placeOrder: (services, dateTime) =>
      dispatch(placeOrder(services, dateTime)),
    clearCart: () => dispatch(clearCart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
