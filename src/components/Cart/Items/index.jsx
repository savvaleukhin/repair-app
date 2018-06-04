import React from 'react';
import Item from './Item';

const Items = ({ items, remove }) => (
  <section>
    {items.map(item => <Item key={item.id} item={item} remove={remove} />)}
  </section>
);

export default Items;
