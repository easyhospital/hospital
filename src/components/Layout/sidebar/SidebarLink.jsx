import React, {forwardRef} from 'react';
import PropTypes from 'prop-types';
// import {FaChevronRight} from 'react-icons/fa';

const SidebarLink = forwardRef(({
  title,  icon, route, onClick,
}, ref) => (
  <a
    to={route}
    onClick={onClick}
    active='true' 
    className="sidebar__link-active"
    ref={ref}
  >
    <li className="sidebar__link">
      {icon ? <span className={`sidebar__link-icon lnr lnr-${icon}`}></span> : ''}
      <p className="sidebar__link-title-sub"> {title} </p> 
    </li>
  </a>
));

SidebarLink.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  route: PropTypes.string,
  onClick: PropTypes.func,
};

SidebarLink.defaultProps = {
  icon: '',
  route: '/',
  onClick: () => {},
};

export default SidebarLink;
