import React from 'react';

import { Category } from '../../entities/category.entity';

type Props = {
  onSelected: (Category) => void;
  categories: Array<Category>;
};

function SectionMenu({ categories, onSelected }: Props) {
  const handleClick = (e, category) => {
    e.preventDefault();
    onSelected(category);
  };
  return (
    <div className='hero__categories'>
      <div className='hero__categories__all'>
        <i className='fa fa-bars' />
        <span>All departments</span>
      </div>
      <ul>
        {categories.map((category) => {
          return (
            <li>
              <a href='#' onClick={(e) => handleClick(e, category)}>
                {category.name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SectionMenu;
