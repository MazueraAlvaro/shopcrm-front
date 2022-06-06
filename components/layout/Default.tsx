import React, { ReactNode } from 'react';

import Head from 'next/head';

import feature from '../../public/img/featured/feature-1.jpg';
import logo from '../../public/img/logo.png';

type Props = {
  children: ReactNode;
  title: string;
};

function Layout({ children, title = 'This is the default title' }: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='description' content='ShopCRM' />
        <meta name='keywords' content='ShopCRM, Shop, CRM' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta httpEquiv='X-UA-Compatible' content='ie=edge' />

        <link
          href='https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;600;900&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body>
        {/* <div id='preloder'>
          <div className='loader' />
        </div> */}
        {/* <!-- Humberger Begin - Mobile Menu  --> */}
        <div className='humberger__menu__overlay' />
        <div className='humberger__menu__wrapper'>
          <div className='humberger__menu__logo'>
            <a href='#'>
              <img src='img/logo.png' alt='' />
            </a>
          </div>
          <div className='humberger__menu__cart'>
            <ul>
              <li>
                <a href='#'>
                  <i className='fa fa-heart' /> <span>1</span>
                </a>
              </li>
              <li>
                <a href='#'>
                  <i className='fa fa-shopping-bag' /> <span>3</span>
                </a>
              </li>
            </ul>
            <div className='header__cart__price'>
              item: <span>$150.00</span>
            </div>
          </div>
          <div className='humberger__menu__widget'>
            <div className='header__top__right__language'>
              <img src='img/language.png' alt='' />
              <div>English</div>
              <span className='arrow_carrot-down' />
              <ul>
                <li>
                  <a href='#'>Spanis</a>
                </li>
                <li>
                  <a href='#'>English</a>
                </li>
              </ul>
            </div>
            <div className='header__top__right__auth'>
              <a href='#'>
                <i className='fa fa-user' /> Login
              </a>
            </div>
          </div>
          <nav className='humberger__menu__nav mobile-menu'>
            <ul>
              <li className='active'>
                <a href='./index.html'>Home</a>
              </li>
              <li>
                <a href='./shop-grid.html'>Shop</a>
              </li>
              <li>
                <a href='#'>Pages</a>
                <ul className='header__menu__dropdown'>
                  <li>
                    <a href='./shop-details.html'>Shop Details</a>
                  </li>
                  <li>
                    <a href='./shoping-cart.html'>Shoping Cart</a>
                  </li>
                  <li>
                    <a href='./checkout.html'>Check Out</a>
                  </li>
                  <li>
                    <a href='./blog-details.html'>Blog Details</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href='./blog.html'>Blog</a>
              </li>
              <li>
                <a href='./contact.html'>Contact</a>
              </li>
            </ul>
          </nav>
          <div id='mobile-menu-wrap' />
          <div className='header__top__right__social'>
            <a href='#'>
              <i className='fa fa-facebook' />
            </a>
            <a href='#'>
              <i className='fa fa-twitter' />
            </a>
            <a href='#'>
              <i className='fa fa-linkedin' />
            </a>
            <a href='#'>
              <i className='fa fa-pinterest-p' />
            </a>
          </div>
          <div className='humberger__menu__contact'>
            <ul>
              <li>
                <i className='fa fa-envelope' /> hello@colorlib.com
              </li>
              <li>Free Shipping for all Order of $99</li>
            </ul>
          </div>
        </div>
        {/* <!-- Humberger End --> */}

        {/* <!-- Header Section Begin --> */}
        <header className='header'>
          <div className='header__top'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-6'>
                  <div className='header__top__left'>
                    <ul>
                      <li>
                        <i className='fa fa-envelope' /> hello@colorlib.com
                      </li>
                      <li>Free Shipping for all Order of $99</li>
                    </ul>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='header__top__right'>
                    <div className='header__top__right__social'>
                      <a href='#'>
                        <i className='fa fa-facebook' />
                      </a>
                      <a href='#'>
                        <i className='fa fa-twitter' />
                      </a>
                      <a href='#'>
                        <i className='fa fa-linkedin' />
                      </a>
                      <a href='#'>
                        <i className='fa fa-pinterest-p' />
                      </a>
                    </div>
                    <div className='header__top__right__language'>
                      <img src='img/language.png' alt='' />
                      <div>English</div>
                      <span className='arrow_carrot-down' />
                      <ul>
                        <li>
                          <a href='#'>Spanis</a>
                        </li>
                        <li>
                          <a href='#'>English</a>
                        </li>
                      </ul>
                    </div>
                    <div className='header__top__right__auth'>
                      <a href='#'>
                        <i className='fa fa-user' /> Login
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-3'>
                <div className='header__logo'>
                  <a href='./index.html'>
                    <img src='img/logo.png' alt='' />
                  </a>
                </div>
              </div>
              <div className='col-lg-6'>
                <nav className='header__menu'>
                  <ul>
                    <li>
                      <a href='./index.html'>Home</a>
                    </li>
                    <li className='active'>
                      <a href='./shop-grid.html'>Shop</a>
                    </li>
                    <li>
                      <a href='#'>Pages</a>
                      <ul className='header__menu__dropdown'>
                        <li>
                          <a href='./shop-details.html'>Shop Details</a>
                        </li>
                        <li>
                          <a href='./shoping-cart.html'>Shoping Cart</a>
                        </li>
                        <li>
                          <a href='./checkout.html'>Check Out</a>
                        </li>
                        <li>
                          <a href='./blog-details.html'>Blog Details</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href='./blog.html'>Blog</a>
                    </li>
                    <li>
                      <a href='./contact.html'>Contact</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className='col-lg-3'>
                <div className='header__cart'>
                  <ul>
                    <li>
                      <a href='#'>
                        <i className='fa fa-heart' /> <span>1</span>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='fa fa-shopping-bag' /> <span>3</span>
                      </a>
                    </li>
                  </ul>
                  <div className='header__cart__price'>
                    item: <span>$150.00</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='humberger__open'>
              <i className='fa fa-bars' />
            </div>
          </div>
        </header>
        {/* <!-- Header Section End --> */}
        {children}
        {/* <!-- Footer Section Begin --> */}
        <footer className='footer spad'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-3 col-md-6 col-sm-6'>
                <div className='footer__about'>
                  <div className='footer__about__logo'>
                    <a href='./index.html'>
                      <img src='img/logo.png' alt='' />
                    </a>
                  </div>
                  <ul>
                    <li>Address: 60-49 Road 11378 New York</li>
                    <li>Phone: +65 11.188.888</li>
                    <li>Email: hello@colorlib.com</li>
                  </ul>
                </div>
              </div>
              <div className='col-lg-4 col-md-6 col-sm-6 offset-lg-1'>
                <div className='footer__widget'>
                  <h6>Useful Links</h6>
                  <ul>
                    <li>
                      <a href='#'>About Us</a>
                    </li>
                    <li>
                      <a href='#'>About Our Shop</a>
                    </li>
                    <li>
                      <a href='#'>Secure Shopping</a>
                    </li>
                    <li>
                      <a href='#'>Delivery infomation</a>
                    </li>
                    <li>
                      <a href='#'>Privacy Policy</a>
                    </li>
                    <li>
                      <a href='#'>Our Sitemap</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href='#'>Who We Are</a>
                    </li>
                    <li>
                      <a href='#'>Our Services</a>
                    </li>
                    <li>
                      <a href='#'>Projects</a>
                    </li>
                    <li>
                      <a href='#'>Contact</a>
                    </li>
                    <li>
                      <a href='#'>Innovation</a>
                    </li>
                    <li>
                      <a href='#'>Testimonials</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col-lg-4 col-md-12'>
                <div className='footer__widget'>
                  <h6>Join Our Newsletter Now</h6>
                  <p>Get E-mail updates about our latest shop and special offers.</p>
                  <form action='#'>
                    <input type='text' placeholder='Enter your mail' />
                    <button type='submit' className='site-btn'>
                      Subscribe
                    </button>
                  </form>
                  <div className='footer__widget__social'>
                    <a href='#'>
                      <i className='fa fa-facebook' />
                    </a>
                    <a href='#'>
                      <i className='fa fa-instagram' />
                    </a>
                    <a href='#'>
                      <i className='fa fa-twitter' />
                    </a>
                    <a href='#'>
                      <i className='fa fa-pinterest' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-12'>
                <div className='footer__copyright'>
                  <div className='footer__copyright__text'>
                    <p>
                      {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                      Copyright &copy;
                      <script>document.write(new Date().getFullYear());</script>
                      All rights reserved | This template is made with
                      <i className='fa fa-heart' aria-hidden='true' /> by
                      <a href='https://colorlib.com' target='_blank' rel='noreferrer'>
                        Colorlib
                      </a>
                      {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                    </p>
                  </div>
                  <div className='footer__copyright__payment'>
                    <img src='img/payment-item.png' alt='' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* <!-- Footer Section End --> */}
      </body>
    </>
  );
}

export default Layout;
