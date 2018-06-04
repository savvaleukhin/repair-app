import React from 'react';
import { connect } from 'react-redux';

import { addToCart } from '../../store/actions';
import Service from './Service';

class ServiceDetail extends React.Component {
  state = {
    inCart: false,
    quantity: 1,
  };

  static prepareData(data, { id, categoryId }) {
    let result = null;
    const category = data.children.find(i => i.id === Number(categoryId));
    if (category) result = category.children.find(i => i.id === Number(id));
    return result;
  }

  componentDidMount() {
    const id = Number(this.props.match.params.id);
    this.getService(id);
  }

  getService(id) {
    const serviceInCart = this.props.cartServices.find(item => item.id === id);
    if (serviceInCart) {
      this.setState({ quantity: serviceInCart.quantity, inCart: true });
    }
  }

  onAddHandler = () => {
    this.setState(prevState => ({ quantity: prevState.quantity + 1 }));
  };

  onRemoveHandler = () => {
    this.setState(prevState => {
      return prevState.quantity > 0
        ? { quantity: prevState.quantity - 1 }
        : { quantity: prevState.quantity };
    });
  };

  onAddToCart = () => {
    this.props.addToCart(this.props.service, this.state.quantity);
    this.props.history.push('/cart');
  };

  render() {
    const { inCart, quantity } = this.state;
    const service = this.props.service;
    let serviceDetail = null;

    if (service) {
      serviceDetail = (
        <Service
          inCart={inCart}
          service={service}
          quantity={quantity}
          onRemove={this.onRemoveHandler}
          onAdd={this.onAddHandler}
          onAddToCart={this.onAddToCart}
        />
      );
    }

    return <section>{serviceDetail}</section>;
  }
}

const mapStateToProps = (state, props) => {
  const rowData = state.appData.root;
  let data = null;
  if (rowData) {
    data = ServiceDetail.prepareData(rowData, props.match.params);
  }
  return {
    service: data,
    cartServices: state.cart.services,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: (service, quantity) => dispatch(addToCart(service, quantity)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ServiceDetail);
