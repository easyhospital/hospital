import React, { useContext, useState, useEffect } from "react";
import useProfile from "../../../hooks/useProfile";
import { FirebaseContext } from "../../../firebase";
import { useRouter } from "next/router";

const UserAccount = (props) => {
	const { usuario, firebase } = useContext(FirebaseContext);
	// console.log(usuario)

	let perfilUsuario = useProfile(usuario);

	if (perfilUsuario != null) {
		console.log(perfilUsuario);
	}

	const router = useRouter();
	const clickUpdateEvent = () => {
		return router.push("./edit-profile");
	};

	return (
		<>
			{perfilUsuario != null && (
				<div className='register-submit'>
					<div className='container-submit'>
						<div>
							<h4>Información General</h4>
							<p>
								<b>Nombre Completo:</b> {perfilUsuario.name}
							</p>
							<div>
								<div className='address-container'>
									<p className='pr-3 pl-0'>
										<b>Dirección:</b>
									</p>
									<p className='pr-3'>{perfilUsuario.street}</p>
									<p className='pr-3'>{perfilUsuario.suburb}</p>
									<p className='pr-3'>{perfilUsuario.postalCode}</p>
									<p className='pr-3'>{perfilUsuario.state}</p>
									<p>{perfilUsuario.country}</p>
								</div>
							</div>
							<p>
								<b>Email:</b> {perfilUsuario.email}
							</p>
							<div className='d-flex'>
								<p className='pr-5'>
									<b>Teléfono de Casa:</b> {perfilUsuario.telephone}
								</p>
								<p>
									<b>Tel. Celular:</b> {perfilUsuario.cellphone}
								</p>
							</div>
							<div className='d-flex'>
								<p className='pr-5'>
									<b>Fecha de nacimiento:</b> {perfilUsuario.birthDate}
								</p>
								<p>
									<b>Estado civil:</b> {perfilUsuario.marriedStatus}
								</p>
							</div>
						</div>
						<hr />
						<div>
							<h4>Experiencia Laboral</h4>

							{perfilUsuario.workExperiences.length === 0 ? (
								""
							) : (
								<ul className='ml-5'>
									{perfilUsuario.workExperiences.map((expProf, i) => (
										<li key={`${expProf.workExperienceId}-${i}`}>
											<p>
												<b>Periodo:</b>
												{expProf.startDate} a{" "}
												{expProf.endDate ? expProf.endDate : expProf.current}{" "}
											</p>
											<p>
												<b>Empresa:</b> {expProf.company}
											</p>
											<p>
												<b>Puesto:</b> {expProf.position}
											</p>
											<p>
												<b>Logros:</b>
											</p>

											<ul className='ml-5'>
												{perfilUsuario.workExperiences[i].achievements.map(
													(achievement, i) => (
														<li key={`${achievement.achievementId}-${i}`}>
															<p>{achievement.achievementContent} </p>
														</li>
													)
												)}
											</ul>
										</li>
									))}
								</ul>
							)}
						</div>
						<hr />
						<div>
							<h4>Educación</h4>
							{perfilUsuario.studies.length === 0 ? (
								""
							) : (
								<ul className='ml-5'>
									{perfilUsuario.studies.map((study, i) => (
										<li key={`${study.studyId}-${i}`}>
											<p>
												<b>Periodo:</b> {study.startDate} a{" "}
												{study.endDate ? study.endDate : study.current}
											</p>
											<p>
												<b>Instituto:</b> {study.institute}
											</p>
											<p>
												<b>Carrera / Maestría / Doctorado:</b> {study.studyName}
											</p>
										</li>
									))}
								</ul>
							)}
						</div>
						<hr />
						<div>
							<h4>Cursos</h4>
							{perfilUsuario.courses.length === 0 ? (
								""
							) : (
								<ul className='ml-5'>
									{perfilUsuario.courses.map((course, i) => (
										<li key={`${course.courseId}-${i}`}>
											<p>
												<b>Periodo:</b> {course.startDate} a{" "}
												{course.endDate ? course.endDate : course.current}
											</p>
											<p>
												<b>Institución:</b> {course.institute}
											</p>
											<p>
												<b>Curso:</b> {course.courseName}
											</p>
											<p>
												<b>Link del curso:</b> {course.link}
											</p>
										</li>
									))}
								</ul>
							)}
						</div>
						<hr />
						<div>
							<h4>Certificaciones</h4>
							{perfilUsuario.certifications.length === 0 ? (
								""
							) : (
								<ul className='ml-5'>
									{perfilUsuario.certifications.map((certification, i) => (
										<li key={`${certification.certificationId}-${i}`}>
											<p>
												<b>Periodo:</b> {certification.startDate} a{" "}
												{certification.endDate
													? certification.endDate
													: certification.current}
											</p>
											<p>
												<b>Instituto:</b> {certification.institute}
											</p>
											<p>
												<b>certificacion:</b> {certification.certificationName}
											</p>
											<p>
												<b>Link de la certificacion:</b> {certification.link}
											</p>
										</li>
									))}
								</ul>
							)}
						</div>
						<hr />
						<div>
							<h4>Habilidades & Idiomas</h4>
							{perfilUsuario.skills.length === 0 ? (
								""
							) : (
								<div className='ml-5 skill-container'>
									<p className='pr-3'>
										<b>Habilidades:</b>
									</p>
									{perfilUsuario.skills.map((h, i) => (
										<div key={`${h.skillId}-${i}`} className='d-flex'>
											<p className='pr-3'>{h.skill}</p>
										</div>
									))}
								</div>
							)}

							{perfilUsuario.languages.length === 0 ? (
								""
							) : (
								<div className='ml-5'>
									{perfilUsuario.languages.map((idioma, i) => (
										<div key={`${idioma.idiomaId}-${i}`} className='d-flex'>
											<div className='d-flex'>
												<p className='pr-3'>
													<b>Idioma:</b>
												</p>
												<p className='pr-3'>{idioma.lengua}</p>
											</div>
											<div className='d-flex'>
												<p className='pr-3'>
													<b>Nivel:</b>
												</p>
												<p className='pr-3'>{idioma.nivelDominio}</p>
											</div>
										</div>
									))}
								</div>
							)}
						</div>
						<hr />
						<div>
							<h4>Referencias Personales</h4>

							{perfilUsuario.personalReferences.length === 0 ? (
								""
							) : (
								<ul className='ml-5'>
									{perfilUsuario.personalReferences.map((rp, i) => (
										<li key={`${rp.personalReferenceId}-${i}`}>
											<p>
												<b>Nombre:</b> {rp.name}{" "}
											</p>
											<p>
												<b>Celular:</b> {rp.cellphone}{" "}
											</p>
											<p>
												<b>Parentesco:</b> {rp.relationship}{" "}
											</p>
										</li>
									))}
								</ul>
							)}
						</div>
						<hr />
						<div>
							<h4>Referencias Laborales</h4>

							{perfilUsuario.workReferences.length === 0 ? (
								""
							) : (
								<ul className='ml-5'>
									{perfilUsuario.workReferences.map((rl, i) => (
										<li key={`${rl.workReferenceId}-${i}`}>
											<p>
												<b>Empresa:</b> {rl.company}{" "}
											</p>
											<p>
												<b>Nombre:</b> {rl.bossName}{" "}
											</p>
											<p>
												<b>Teléfono:</b> {rl.telephone}{" "}
											</p>
											<p>
												<b>Extensión:</b> {rl.extension}{" "}
											</p>
										</li>
									))}
								</ul>
							)}
						</div>
					</div>
					<div className='user-account-container-btn row'>
						<button
							type='button'
							className='btn btn-searchnav'
							onClick={clickUpdateEvent}
						>
							Editar
						</button>
					</div>
				</div>
			)}
		</>
	);
};

export default UserAccount;
