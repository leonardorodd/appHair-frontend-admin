import React, { useEffect } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';

import { MdExitToApp, MdStore, MdPerson, MdClear } from 'react-icons/md';
import MenuItemLink from './MenuItem';

import { Container, Header, MenuContainer, LogImg, Footer } from './styles';
import Logo from '../../../assets/img/logo.png';
import { useDispatch } from 'react-redux';
import { signOut } from '../../../store/modules/auth/actions';

const Aside = () => {
  const dispatch = useDispatch();

  const MenuItens = [
    { title: 'Artistas', icon: MdPerson, link: '/artists', subItens: [] },
    {
      title: 'Estabelecimento',
      icon: MdStore,
      link: '/establishment',
      subItens: [],
    },
  ];

  useEffect(() => {
    const menuItemList = Array.from(document.getElementsByClassName('item'));

    const subMenuItemList = Array.from(document.getElementsByClassName('subItem'));

    const sidenavEl = document.getElementById('sideMenu');

    subMenuItemList.forEach(item => {
      item.addEventListener('click', () => {
        function toggleClassName(el, className) {
          if (el.classList.contains(className)) {
            el.classList.remove(className);
          } else {
            el.classList.add(className);
          }
        }

        if (item.getAttribute('href') !== '/off') {
          toggleClassName(sidenavEl, 'active');
        }
      });
    });

    menuItemList.forEach(item => {
      item.addEventListener('click', () => {
        menuItemList.forEach(ele => {
          const panel = ele.nextElementSibling;

          if (ele !== item && ele.classList.contains('active')) {
            panel.removeAttribute('style');
            ele.classList.remove('active');
            ele.classList.remove('openAnimation');
            ele.classList.add('closeAnimation');
          }
        });

        const panel = item.nextElementSibling;

        if (item.classList.contains('active')) {
          panel.removeAttribute('style');
          item.classList.remove('active');
          item.classList.remove('openAnimation');
          item.classList.add('closeAnimation');
        } else {
          panel.setAttribute('style', 'max-height:500px');
          item.classList.add('active');
          item.classList.remove('closeAnimation');
          item.classList.add('openAnimation');
        }

        // Close sidemenu on click
        function toggleClassName(el, className) {
          if (el.classList.contains(className)) {
            el.classList.remove(className);
          } else {
            el.classList.add(className);
          }
        }

        if (item.getAttribute('href') !== '/off') {
          toggleClassName(sidenavEl, 'active');
        }
      });
    });
  }, []);

  return (
    <Container id="sideMenu">
      <div id="close-icon">
        <MdClear size={22} />
      </div>
      <div>
        <Header>
          <LogImg src={Logo} alt="Logo" />
          {/*                     <input onChange={searchItem} />
           */}
        </Header>
        <PerfectScrollbar>
          {/*  <MenuContainer>
                        {MenuItens.map(item => (
                            <MenuItemLink
                                key={item.title}
                                title={item.title}
                                icon={item.icon}
                                link={item.link}
                                grouppedItem
                                subItens={item.subItens}
                            />
                    ))}
                    </MenuContainer> */}
          <MenuContainer id="menuContainer">
            {MenuItens.map(item => (
              /*  item.title
                                .toLocaleUpperCase()
                                .startsWith(searchTerm) ||
                            (item.subItens &&
                                item.subItens.some(subItem =>
                                    subItem.title
                                        .toLocaleUpperCase()
                                        .startsWith(searchTerm),
                                )) ? ( */
              <MenuItemLink
                key={item.title}
                title={item.title}
                icon={item.icon}
                link={item.link}
                grouppedItem
                subItens={item.subItens}
              />
              /* ) : (
                                []
                            ), */
            ))}
          </MenuContainer>
        </PerfectScrollbar>
      </div>
      <Footer onClick={() => dispatch(signOut())}>
        <MdExitToApp />
        <span>Sair</span>
      </Footer>
    </Container>
  );
};

export default Aside;
