/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowDown } from 'react-icons/md';

import { Container } from './styles';

const Dropdown = ({ options, title }) => {
  return (
    <Container>
      <div className="dropdown">
        <button className="dropbtn" type="button">
          {title}
          <MdKeyboardArrowDown size={16} />
        </button>
        <div className="dropdown-content">
          {options.map(option =>
            option.externalLink ? (
              <a key={option.title} href={option.link}>
                {option.title}
              </a>
            ) : (
              <Link key={option.title} to={option.link} onClick={option.clickEvent}>
                {option.title}
              </Link>
            ),
          )}
        </div>
      </div>
    </Container>
  );
};

export default Dropdown;

/*
Dropdown.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired,
            externalLink: PropTypes.bool.isRequired,
            clickEvent: PropTypes.func,
        }),
    ).isRequired,
    title: PropTypes.string.isRequired,
}; */