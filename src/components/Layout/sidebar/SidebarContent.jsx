import React, { useContext } from "react";
import SidebarLink from "./SidebarLink";
import SidebarCategory from "./SidebarCategory";
import Link from "next/link";
import { FirebaseContext } from "../../../../firebase";
import useProfile from "../../../../hooks/useProfile";

const SidebarContent = (props) => {
	const { usuario } = useContext(FirebaseContext);

	const perfilUsuario = useProfile(usuario);

	if (perfilUsuario != null) {
		console.log(perfilUsuario.tipoUsuario);
	}

	const hideSidebar = () => {
		const { onClick } = props;
		onClick();
	};

	try {
		if (usuario == null) {
			Router.push("/");
		}
	} catch (e) {}

	return (
		<div className='sidebar__content'>
			{usuario != null &&
			perfilUsuario != null &&
			perfilUsuario.userType == "admin" ? (
				<ul className='sidebar__block'>
					<SidebarCategory title='Personal' icon='users'>
						<Link href='#' passHref>
							<SidebarLink
								title='Directorio de personal'
								icon='license'
								onClick={hideSidebar}
							/>
						</Link>
					</SidebarCategory>
				</ul>
			) : (
				""
			)}

			{usuario != null &&
			perfilUsuario != null &&
			perfilUsuario.userType == "user" ? (
				<ul className='sidebar__block'>
					<SidebarCategory title='Pacientes' icon='heart-pulse'>
						<Link href='./patients-list' passHref>
							<SidebarLink
								title='Pacientes Asignados'
								icon='user'
								onClick={hideSidebar}
							/>
						</Link>
					</SidebarCategory>
				</ul>
			) : (
				""
			)}

			<ul className='sidebar__block'>
				<SidebarCategory title='Pacientes' icon='heart-pulse'>
					{usuario != null &&
					perfilUsuario != null &&
					perfilUsuario.userType == "admin" ? (
						<Link href='/dashboard/new-patient' passHref>
							<SidebarLink
								title='Registro de paciente nuevo'
								icon='pencil'
								onClick={hideSidebar}
							/>
						</Link>
					) : (
						""
					)}
					<Link href='/dashboard/patient-list' passHref>
						<SidebarLink
							title='Pacientes registrados'
							icon='database'
							onClick={hideSidebar}
						/>
					</Link>
				</SidebarCategory>
			</ul>

			<ul className='sidebar__block'>
				<SidebarCategory title='Configuraciones' icon='cog'>
					<Link href='/dashboard/profile' passHref>
						<SidebarLink title='Perfil' icon='user' onClick={hideSidebar} />
					</Link>
					<Link href='/' passHref>
						<SidebarLink title='Log Out' icon='exit' onClick={hideSidebar} />
					</Link>
				</SidebarCategory>
			</ul>
		</div>
	);
};

export default SidebarContent;
