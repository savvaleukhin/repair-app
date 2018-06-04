import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './components/Header';
import Categories from './components/Categories';
import Category from './components/Categories/Category';
import ServiceDetail from './components/ServiceDetail';
import Container from './components/UI/Container';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import Checkout from './components/Checkout';
import Order from './components/Order';

import { initRootData } from './store/actions';

import './App.less';

class App extends Component {
  componentDidMount() {
    this.props.initRootData();
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Container>
        <Navbar pathname={this.props.location.pathname} />
          <Switch>
            <Route
              path="/categories/:categoryId/services/:id"
              component={ServiceDetail}
            />
            <Route path="/categories/:id" component={Category} />
            <Route path="/cart" component={Cart} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/order" component={Order} />
            <Route exact path="/" component={Categories} />
          </Switch>
        </Container>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    initRootData: () => dispatch(initRootData()),
  };
};

export default withRouter(connect(null, mapDispatchToProps)(App));
