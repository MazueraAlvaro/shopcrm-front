import React, { useState } from 'react';

type Props = {
  onSelected: (Category) => void;
  categories: Array<Category>;
};

interface Category {
  id: number;
  name: string;
} // Se debe crear para definir el tipo de datos de un objeto que se desee almacenar en un array.

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
