import * as React from 'react';

import { User } from '../interfaces';
import ListItem from './ListItem';

type Props = {
  items: User[];
};

function List({ items }: Props) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <ListItem data={item} />
        </li>
      ))}
    </ul>
  );
}

export default List;
