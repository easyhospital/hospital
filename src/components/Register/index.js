import React, { useContext, useState } from "react";
import { FirebaseContext } from "../../../firebase";
import TopbarSidebarButton from "../Layout/topbar/TopbarSidebarButton";
import TopbarProfile from "../Layout/topbar/TopbarProfile";
import Router from "next/router";
import GeneralInfo from "./GeneralInfo";
import WorkExp from "./WorkExp";
import Education from "./Education";
import Courses from "./Courses";
import Certifications from "./Certifications";
import SkillsIdioms from "./SkillsIdioms";
import PersonalRef from "./PersonalRef";
import LaborRef from "./LaborRef";
import Submit from "./Submit";
import Link from "next/link";

const UserProfile = (props) => {
	const { usuario, firebase } = useContext(FirebaseContext);

	const { changeMobileSidebarVisibility, changeSidebarVisibility } = props;

	const [userProfile, setUserProfile] = useState({
		idEmployee: usuario.uid,
		name: usuario.displayName,
		email: usuario.email,
		userType: "user",
		employeeType: "",
		street: "",
		suburb: "",
		postalCode: "",
		state: "",
		country: "",
		birthDate: "",
		telephone: "",
		cellphone: "",
		marriedStatus: "",
		workExperiences: [],
		studies: [],
		courses: [],
		certifications: [],
		skills: [],
		languages: [],
		personalReferences: [],
		workReferences: [],
	});

	const {
		employeeType,
		street,
		suburb,
		postalCode,
		state,
		country,
		birthDate,
		telephone,
		cellphone,
		marriedStatus,
		workExperiences,
		studies,
		courses,
		certifications,
		skills,
		languages,
		personalReferences,
		workReferences,
	} = userProfile;

	// Función que se ejecuta cuando el usuario hace submit
	const handleSubmit = (e) => {
		e.preventDefault();

		setNewEmployee();
	};

	async function setNewEmployee() {
		const profile = {
			idEmployee: usuario.uid,
			name: usuario.displayName,
			email: usuario.email,
			userType: "user",
			employeeType: employeeType,
			street: street,
			suburb: suburb,
			postalCode: postalCode,
			state: state,
			country: country,
			birthDate: birthDate,
			telephone: telephone,
			cellphone: cellphone,
			marriedStatus: marriedStatus,
			workExperiences: workExperiences,
			studies: studies,
			courses: courses,
			certifications: certifications,
			skills: skills,
			languages: languages,
			personalReferences: personalReferences,
			workReferences: workReferences,
		};

		firebase.db.collection("employees").add(profile);

		Router.push("/dashboard/patient-list");
	}

	const formComponents = (c) => {
		switch (c) {
			case 0:
				return (
					<GeneralInfo
						userProfile={userProfile}
						setUserProfile={setUserProfile}
						handleClickNext={handleClickNext}
					/>
				);
			case 1:
				return (
					<WorkExp
						userProfile={userProfile}
						setUserProfile={setUserProfile}
						handleClickNext={handleClickNext}
						handleClickBack={handleClickBack}
					/>
				);
			case 2:
				return (
					<Education
						userProfile={userProfile}
						setUserProfile={setUserProfile}
						handleClickNext={handleClickNext}
						handleClickBack={handleClickBack}
					/>
				);
			case 3:
				return (
					<Courses
						userProfile={userProfile}
						setUserProfile={setUserProfile}
						handleClickNext={handleClickNext}
						handleClickBack={handleClickBack}
					/>
				);
			case 4:
				return (
					<Certifications
						userProfile={userProfile}
						setUserProfile={setUserProfile}
						handleClickNext={handleClickNext}
						handleClickBack={handleClickBack}
					/>
				);
			case 5:
				return (
					<SkillsIdioms
						userProfile={userProfile}
						setUserProfile={setUserProfile}
						handleClickNext={handleClickNext}
						handleClickBack={handleClickBack}
					/>
				);
			case 6:
				return (
					<PersonalRef
						userProfile={userProfile}
						setUserProfile={setUserProfile}
						handleClickNext={handleClickNext}
						handleClickBack={handleClickBack}
					/>
				);
			case 7:
				return (
					<LaborRef
						userProfile={userProfile}
						setUserProfile={setUserProfile}
						handleClickNext={handleClickNext}
						handleClickBack={handleClickBack}
					/>
				);
			case 8:
				return <Submit userProfile={userProfile} />;
			default:
				return (
					<GeneralInfo
						userProfile={userProfile}
						setUserProfile={setUserProfile}
						handleClickNext={handleClickNext}
					/>
				);
		}
	};

	const [counter, setCounter] = useState(0);

	const handleClickNext = () => {
		setCounter(counter + 1);
	};

	const handleClickBack = () => {
		setCounter(counter - 1);
	};

	return (
		<div>
			<div className='topbar'>
				<div className='topbar__wrapper'>
					<div className='topbar__left'>
						<TopbarSidebarButton
							changeMobileSidebarVisibility={changeMobileSidebarVisibility}
							changeSidebarVisibility={changeSidebarVisibility}
						/>
						<Link href='/dashboard/patient-list' passHref>
							<h2 className='logo-text'>HOSPITAL DIVINA PROVIDENCIA</h2>
						</Link>
					</div>
					<div className='topbar__right'>
						<TopbarProfile />
					</div>
				</div>
			</div>
			<div className='register'>
				{counter == "0" && (
					<div className='register-title'>
						{usuario != null && (
							<h1>
								Bienvenid@ <span>{usuario.displayName}</span>{" "}
							</h1>
						)}
						<h4 className='register-subtitle'>
							Por favor completa la siguiente información para poder acceder a
							la app de Hospital Divina Providencia
						</h4>
					</div>
				)}

				<form
					onSubmit={handleSubmit}
					className={counter == 8 ? "" : "register-form"}
				>
					{formComponents(counter)}

					<div className='register-container-btn'>
						{counter == "8" &&
						street === "" &&
						suburb === "" &&
						postalCode === "" &&
						state === "" &&
						birthDate === "" &&
						telephone.trim() === "" &&
						cellphone.trim() === "" &&
						marriedStatus === "" &&
						workExperiences.length === 0 &&
						studies.length === 0 &&
						courses.length === 0 &&
						certifications.length === 0 &&
						skills.length === 0 &&
						languages.length === 0 &&
						personalReferences.length === 0 &&
						workReferences.length === 0 ? (
							<button
								type='button'
								className='btn-back'
								onClick={handleClickBack}
							>
								Anterior
							</button>
						) : (
							counter == "8" && (
								<div className='btns-form-container'>
									<button
										type='button'
										className='btn-back'
										onClick={handleClickBack}
									>
										Anterior
									</button>
									<button type='submit' className='register-btn-save'>
										Guardar
									</button>
								</div>
							)
						)}
					</div>
				</form>
			</div>
		</div>
	);
};

export default UserProfile;
