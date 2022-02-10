/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { MdMenu } from 'react-icons/md';
import { Container } from './styles';

import Aside from './Aside';
import Content from './Content';
import MainHeader from './MainHeader';

const Layout = ({ children }) => {
  useEffect(() => {
    const menuIconEl = document.getElementById('menu-icon');
    const sidenavEl = document.getElementById('sideMenu');

    const sidenavCloseEl = document.getElementById('close-icon');

    function toggleClassName(el, className) {
      if (el.classList.contains(className)) {
        el.classList.remove(className);
      } else {
        el.classList.add(className);
      }
    }

    menuIconEl.addEventListener('click', () => {
      toggleClassName(sidenavEl, 'active');
    });

    sidenavCloseEl.addEventListener('click', () => {
      toggleClassName(sidenavEl, 'active');
    });
  }, []);

  return (
    <Container>
      <div id="menu-icon">
        <MdMenu size={22} />
      </div>
      <MainHeader />
      <Aside />
      <Content>{children}</Content>
    </Container>
  );
};

export default Layout;
