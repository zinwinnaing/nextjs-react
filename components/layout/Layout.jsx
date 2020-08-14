import React from 'react';
import NProgress from 'nprogress';
import Router from 'next/router';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import ScrollUp from '../scrollUp/ScrollUp';
import CopyRight from '../footer/CopyRight';

export default class Layout extends React.Component {
  componentDidMount() {
    Router.onRouteChangeStart = (url) => {
      NProgress.start();
    };

    Router.onRouteChangeComplete = () => {
      NProgress.done();
    };

    Router.onRouteChangeError = () => {
      NProgress.done();
    };
  }

  render() {
    const { children, active } = this.props;
    return (
      <div>
        <Navbar active={active} />
        {children}
        <Footer />
        <CopyRight />
        <ScrollUp />
      </div>
    );
  }
}
