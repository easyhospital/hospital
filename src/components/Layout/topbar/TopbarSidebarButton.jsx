import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {GiHamburgerMenu} from 'react-icons/gi';


class TopbarSidebarButton extends PureComponent {
  static propTypes = {
    changeMobileSidebarVisibility: PropTypes.func.isRequired,
    changeSidebarVisibility: PropTypes.func.isRequired,
  };

  render() {
    const { changeMobileSidebarVisibility, changeSidebarVisibility } = this.props;

    return (
      <div>
        <button type="button" className="topbar__button topbar__button--desktop" onClick={changeSidebarVisibility}>
          <GiHamburgerMenu className="topbar__button-icon" />
        </button>
        <button type="button" className="topbar__button topbar__button--mobile" onClick={changeMobileSidebarVisibility}>
          <GiHamburgerMenu className="topbar__button-icon" />
        </button>
      </div>
    );
  }
}

export default TopbarSidebarButton;
