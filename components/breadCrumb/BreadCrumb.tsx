import React from 'react';

import { Pages } from '../../entities/pages.entity';

type Props = {
  onSelected: (Pages) => void;
  pages: Array<Pages>;
};

function BreadCrumb({ pages, onSelected }: Props) {
  const handleClick = (e, page) => {
    e.preventDefault();
    onSelected(page);
  };
  return (
    <section
      className='breadcrumb-section set-bg'
      style={{ backgroundImage: `url( ${'https://technext.github.io/ogani/img/breadcrumb.jpg'} )` }}
    >
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12 text-center'>
            <div className='breadcrumb__text'>
              <h2>{pages[pages.length - 1].name}</h2>
              <div className='breadcrumb__option'>
                {pages.map((page) => {
                  if (page.name !== pages[pages.length - 1].name) {
                    return (
                      <a key={page.id} href='#' onClick={(e) => handleClick(e, page)}>
                        {page.name}
                      </a>
                    );
                  }
                  return null;
                })}
                <span>{pages[pages.length - 1].name}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BreadCrumb;
