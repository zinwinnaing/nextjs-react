import React from 'react';
import classNames from 'classnames';
import { isMobileOnly } from 'react-device-detect';
import Link from 'next/link';
import BurgerMenu from '../burgerMenu/BurgerMenu';

export default class Navbar extends React.Component {
  state = {
    isOpen: false,
    isItMobile: false,
    scrolling: false,
  };

  componentDidMount() {
    const isXR = screen.width === 414 && screen.height === 896;
    const is11 = screen.width === 828 && screen.height === 1792;
    const isIpad = screen.width === 768 && screen.height === 1024;
    window.addEventListener('scroll', this.onScroll);
    if (isMobileOnly || isXR || is11 || isIpad) {
      this.setState((prevState) => ({
        ...prevState,
        isItMobile: true,
      }));
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }
  onScroll = () => {
    const scrollHeight = Math.ceil(window.scrollY / 50) * 50;
    const shouldBeScrolling = scrollHeight > 0;
    const { scrolling } = this.state;
    if (shouldBeScrolling !== scrolling) {
      this.setState((prevState) => ({
        ...prevState,
        scrolling: shouldBeScrolling,
      }));
    }
  };

  render() {
    const { isItMobile, scrolling } = this.state;
    const { active } = this.props;

    return (
      <nav
        className={
          !isItMobile && scrolling
            ? classNames('navbar is-scrolling')
            : 'navbar not-scrolling'
        }
        // className={classNames(
        //   `${scrolling ? 'navbar is-scrolling' : 'navbar not-scrolling'}`
        // )}
      >
        <div className="px-3 d-flex justify-content-between align-items-center">
          {!isItMobile ? (
            <DeskTopMenu active={active} />
          ) : (
            <MobileMenu active={active} />
          )}
        </div>
      </nav>
    );
  }
}

class DeskTopMenu extends React.Component {
  state = {
    isOpenSubMenu: false,
    isOpenProductMenu: false,
  };

  toggleMenu = () => {
    this.setState((prevState) => ({
      ...prevState,
      isOpenSubMenu: !prevState.isOpenSubMenu,
      isOpenProductMenu: false,
    }));
  };

  toggleProductMenu = () => {
    this.setState((prevState) => ({
      ...prevState,
      isOpenProductMenu: !prevState.isOpenProductMenu,
      isOpenSubMenu: false,
    }));
  };
  render() {
    const { active } = this.props;
    return (
      <>
        <Link href="/">
          <img
            src="/image/logo.jpg"
            alt="not available"
            className="cursor-pointer nav-logo"
          />
        </Link>
        <div className="menu px-3">
          <div className="d-flex justify-content-end">
            <div className="nav-link">
              <Link href="/">
                <a
                  href="/"
                  className="nav-link-a"
                  style={{ color: active === 'home' && '#ff8a44' }}
                >
                  Home
                </a>
              </Link>
              <Link href="/aboutus">
                <a
                  href="/aboutus"
                  className="nav-link-a"
                  style={{ color: active === 'aboutus' && '#ff8a44' }}
                >
                  About Us
                </a>
              </Link>

              <Link href="/services">
                <a
                  href="/services"
                  className="nav-link-a"
                  style={{ color: active === 'services' && '#ff8a44' }}
                >
                  Services
                </a>
              </Link>

              <Link href="/products">
                <a
                  href="/products"
                  className="nav-link-a"
                  style={{ color: active === 'products' && '#ff8a44' }}
                >
                  Products
                </a>
              </Link>

              <Link href="/career">
                <a
                  href="/career"
                  className="nav-link-a"
                  style={{ color: active === 'career' && '#ff8a44' }}
                >
                  Career
                </a>
              </Link>
              <Link href="/blog">
                <a
                  href="/blog"
                  className="nav-link-a"
                  style={{ color: active === 'blog' && '#ff8a44' }}
                >
                  Blog
                </a>
              </Link>

              <Link href="/contact-us">
                <a
                  href="/contact-us"
                  style={{ color: active === 'contactus' && '#ff8a44' }}
                  className="nav-link-a"
                >
                  Contact Us
                </a>
              </Link>
              <Link href="/">
                <a
                  href="/"
                  style={{ color: active === 'contactus' && '#ff8a44' }}
                  className="nav-link-a get-quote"
                >
                  Get Quote
                </a>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}
class MobileMenu extends React.Component {
  state = {
    isOpen: false,
    blogOpen: false,
    productOpen: false,
  };

  toggleMenu = () => {
    this.setState((prevState) => ({
      ...prevState,
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    const { isOpen } = this.state;

    const { active } = this.props;

    return (
      <>
        <Link href="/">
          <img
            src="/image/logo.jpg"
            alt="not available"
            className="cursor-pointer"
            height="25"
          />
        </Link>
        <div>
          <BurgerMenu
            onClick={() => this.toggleMenu()}
            className={classNames(isOpen ? 'open' : undefined)}
          />

          <div
            className={classNames(
              'mobile-menu animated fadeIn',
              isOpen ? 'open' : 'not-open'
            )}
          >
            <div className="m-menu">
              <div>
                <div className="pt-4">
                  <Link href="/">
                    <img
                      src="/image/logo.jpg"
                      alt="not available"
                      className="cursor-pointer"
                    />
                  </Link>
                </div>
                <ul>
                  <li>
                    <Link href="/">
                      <a
                        href="/"
                        className={
                          active === 'home'
                            ? 'mobile-menu-link-active'
                            : 'mobile-menu-link'
                        }
                      >
                        Home
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/aboutus">
                      <a
                        href="/aboutus"
                        className={
                          active === 'aboutus'
                            ? 'mobile-menu-link-active'
                            : 'mobile-menu-link'
                        }
                      >
                        About Us
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services">
                      <a
                        href="/services"
                        className={
                          active === 'services'
                            ? 'mobile-menu-link-active'
                            : 'mobile-menu-link'
                        }
                      >
                        Services
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/products">
                      <a
                        href="/products"
                        className={
                          active === 'products'
                            ? 'mobile-menu-link-active'
                            : 'mobile-menu-link'
                        }
                      >
                        Products
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/career">
                      <a
                        href="/career"
                        className={
                          active === 'career'
                            ? 'mobile-menu-link-active'
                            : 'mobile-menu-link'
                        }
                      >
                        Career
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog">
                      <a
                        href="/blog"
                        className={
                          active === 'blog'
                            ? 'mobile-menu-link-active'
                            : 'mobile-menu-link'
                        }
                      >
                        Blog
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact-us">
                      <a
                        href="/contact-us"
                        className={
                          active === 'contact'
                            ? 'mobile-menu-link-active'
                            : 'mobile-menu-link'
                        }
                      >
                        Contact Us
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
