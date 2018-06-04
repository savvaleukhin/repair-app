import React from 'react';
import { connect } from 'react-redux';
import Services from './Services';

const prepareData = (data, id) => {
  return data.children.find(item => item.id === id);
};

const Category = props => {
  let title,
    services = null;

  if (props.data) {
    const data = prepareData(props.data, Number(props.match.params.id));
    title = data.title;
    services = <Services services={data.children} />;
  }

  return (
    <React.Fragment>
      <h1 className="title">{title}</h1>
      {services}
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    data: state.appData.root,
  };
};

export default connect(mapStateToProps)(Category);
