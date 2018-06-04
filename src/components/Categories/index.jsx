import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import styles from './categories.module.less';

class Categories extends React.Component {
  render() {
    const { data } = this.props;
    let title, teaser, categoryList = null;

    if (data) {
      title = data.title;
      teaser = data.teaser_card;
      categoryList = data.children.map(category => {
        return (
          <div key={category.id} className={styles.category}>
            <Link to={`/categories/${category.id}`}>{category.name}</Link>
          </div>
        );
      });
    }

    return (
      <section>
        <h1 className="title">{title}</h1>
        <p>{teaser}</p>
        <div className={styles.categories}>{categoryList}</div>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.appData.root,
  };
};

export default connect(mapStateToProps)(Categories);
