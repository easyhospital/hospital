import React, { PureComponent } from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import TopbarSidebarButton from "./TopbarSidebarButton";
import TopbarProfile from "./TopbarProfile";

class Topbar extends PureComponent {
	static propTypes = {
		changeMobileSidebarVisibility: PropTypes.func.isRequired,
		changeSidebarVisibility: PropTypes.func.isRequired,
	};

	render() {
		const {
			changeMobileSidebarVisibility,
			changeSidebarVisibility,
		} = this.props;

		return (
			<div className='topbar'>
				<div className='topbar__wrapper'>
					<div className='topbar__left'>
						<TopbarSidebarButton
							changeMobileSidebarVisibility={changeMobileSidebarVisibility}
							changeSidebarVisibility={changeSidebarVisibility}
						/>
						<Link href='/dashboard/patient-list' passHref>
							<p className='logo-text'>Hospital Divina Providencia</p>
						</Link>
					</div>
					<div className='topbar__right'>
						<TopbarProfile />
					</div>
				</div>
			</div>
		);
	}
}

export default Topbar;
