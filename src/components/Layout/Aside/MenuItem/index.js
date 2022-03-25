/* eslint-disable react/prop-types */
import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';

import { MenuItemLink, Container, SubMenuItemLink } from './styles';

const MenuItem = ({ link, icon: Icon, title, subItens, grouppedItem, externalLink }) => {
  return (
    <Container>
      <MenuItemLink
        to={externalLink ? { pathname: link } : link || ''}
        className="item"
        target={externalLink ? '_blank' : ''}
      >
        <div>
          <Icon />
          {title}
        </div>
        {grouppedItem && <MdKeyboardArrowRight />}
      </MenuItemLink>
      <div className="itemContent">
        {subItens?.length !== 0 ? (
          subItens?.map(subItem => (
            <SubMenuItemLink
              className="subItem"
              key={subItem.title}
              to={subItem.externalLink ? { pathname: subItem.link } : subItem.link || ''}
              target={subItem.externalLink ? '_blank' : ''}
            >
              <subItem.icon />
              {subItem.title}
            </SubMenuItemLink>
          ))
        ) : (
          <></>
        )}
      </div>
    </Container>
  );
};

export default MenuItem;
