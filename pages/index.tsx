import React from 'react';

import Link from 'next/link';

import Layout from '../components/layout/Default';

function IndexPage() {
  return (
    <Layout title='Home | Next.js + TypeScript Example'>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-3'>
              <div className='hero__categories'>
                <div className='hero__categories__all'>
                  <i className='fa fa-bars' />
                  <span>All departments</span>
                </div>
                <ul>
                  <li>
                    <a href='#'>Fresh Meat</a>
                  </li>
                  <li>
                    <a href='#'>Vegetables</a>
                  </li>
                  <li>
                    <a href='#'>Fruit & Nut Gifts</a>
                  </li>
                  <li>
                    <a href='#'>Fresh Berries</a>
                  </li>
                  <li>
                    <a href='#'>Ocean Foods</a>
                  </li>
                  <li>
                    <a href='#'>Butter & Eggs</a>
                  </li>
                  <li>
                    <a href='#'>Fastfood</a>
                  </li>
                  <li>
                    <a href='#'>Fresh Onion</a>
                  </li>
                  <li>
                    <a href='#'>Papayaya & Crisps</a>
                  </li>
                  <li>
                    <a href='#'>Oatmeal</a>
                  </li>
                  <li>
                    <a href='#'>Fresh Bananas</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-lg-9'>
              <div className='hero__search'>
                <div className='hero__search__form'>
                  <form action='#'>
                    <div className='hero__search__categories'>
                      Todas las categorias
                      <span className='arrow_carrot-down' />
                    </div>
                    <input type='text' placeholder='Que estás necesitando?' />
                    <button type='submit' className='site-btn'>
                      BUSCAR
                    </button>
                  </form>
                </div>
                <div className='hero__search__phone'>
                  <div className='hero__search__phone__icon'>
                    <i className='fa fa-phone' />
                  </div>
                  <div className='hero__search__phone__text'>
                    <h5>+57 304 1004169</h5>
                    <span>Soporte 24/7 </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default IndexPage;
