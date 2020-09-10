import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
// import {FiLogOut} from 'react-icons/fi';

const TopbarMenuLinks = forwardRef(({ title, icon, path}, ref) => (
    
      <a className="topbar__link" href={path} ref={ref}>
        <span className={`topbar__link-icon lnr lnr-${icon}`}></span>
        <p className="topbar__link-title">{title}</p>
      </a>
    
  ));

TopbarMenuLinks.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
};

TopbarMenuLinks.defaultProps = {
  path: '/'
};
  
export default TopbarMenuLinks