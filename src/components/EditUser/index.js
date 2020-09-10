import React, { useContext, useState, useEffect } from "react";
import { FirebaseContext } from "../../../firebase";
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

const UserProfileEdit = () => {
	const { usuario, firebase } = useContext(FirebaseContext);

	const [userProfile, setUserProfile] = useState({});

	useEffect(() => {
		const userDB = () =>
			firebase.db
				.collection("employees")
				.where(
					"email",
					"==",
					usuario != null && usuario.email != null ? usuario.email : ""
				)
				.get()
				.then((response) => {
					response.forEach((doc) => {
						setUserProfile(doc.data());
					});
				});

		userDB();
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();

		updateEmployeeProfile();
	};

	async function updateEmployeeProfile() {
		const employeeObj = {
			id: usuario.uid,
			name: usuario.displayName,
			email: usuario.email,
			userType: userProfile.userType,
			employeeType: userProfile.employeeType,
			street: userProfile.street,
			suburb: userProfile.suburb,
			postalCode: userProfile.postalCode,
			country: userProfile.country,
			state: userProfile.state,
			birthDate: userProfile.birthDate,
			telephone: userProfile.telephone,
			cellphone: userProfile.cellphone,
			marriedStatus: userProfile.marriedStatus,
			workExperiences: userProfile.workExperiences,
			studies: userProfile.studies,
			courses: userProfile.courses,
			certifications: userProfile.certifications,
			skills: userProfile.skills,
			languages: userProfile.languages,
			personalReferences: userProfile.personalReferences,
			workReferences: userProfile.workReferences,
		};

		firebase.db
			.collection("employees")
			.where("id", "==", userProfile.id)
			.get()
			.then((response) => {
				response.forEach((doc) => {
					firebase.db
						.collection("employees")
						.doc(doc.id)
						.set(employeeObj, { merge: true });
				});
			});

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
		<div className='edit-user'>
			<form onSubmit={handleSubmit} className='edit-user-form'>
				{formComponents(counter)}
				<div className='edit-profile-register-container-btn'>
					{counter == "8" && (
						<div className='btns-form-container'>
							<button
								type='button'
								className='btn-back'
								onClick={handleClickBack}
							>
								Anterior
							</button>
							<button type='submit' className='edit-user-btn-save'>
								Guardar
							</button>
						</div>
					)}
				</div>
			</form>
		</div>
	);
};

export default UserProfileEdit;
