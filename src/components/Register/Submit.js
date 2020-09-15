const Submit = ({ userProfile }) => {
	const {
		name,
		email,
		userType,
		employeeType,
		employeePosition,
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

	return (
		<>
			<div className='register-submit'>
				<div className='container-submit'>
					<div>
						<h4>Información General</h4>
						<p>
							<b>Nombre Completo:</b> {name}
						</p>
						<div>
							<div className='address-container'>
								<p className='pr-3 pl-0'>
									<b>Dirección:</b>
								</p>
								<p className='pr-3'>{street}</p>
								<p className='pr-3'>{suburb}</p>
								<p className='pr-3'>{postalCode}</p>
								<p className='pr-3'>{state}</p>
								<p>{country}</p>
							</div>
						</div>

						<p>
							<b>Email:</b> {email}
						</p>

						<div className='d-flex'>
							<p className='pr-5'>
								<b>Teléfono de Casa:</b> {telephone}
							</p>
							<p>
								<b>Tel. Celular:</b> {cellphone}
							</p>
						</div>
						<div className='d-flex'>
							<p className='pr-5'>
								<b>Fecha de nacimiento:</b> {birthDate}
							</p>
							<p>
								<b>Estado civil:</b> {marriedStatus}
							</p>
						</div>
						<div className='d-flex'>
							<p className='pr-5'>
								<b>Puesto:</b> {employeePosition}
							</p>
							<p>
								<b>Tipo de contratación:</b> {employeeType}
							</p>
						</div>
					</div>

					<hr />

					<div>
						<h4>Experiencia Laboral</h4>

						{workExperiences.length === 0 ? (
							""
						) : (
							<ul className='ml-5'>
								{workExperiences.map((workExperience, i) => (
									<li key={`${workExperience.workExperienceId}-${i}`}>
										<p>
											<b>Periodo:</b>
											{workExperience.startDate} a{" "}
											{workExperience.endDate
												? workExperience.endDate
												: workExperience.current}{" "}
										</p>
										<p>
											<b>Empresa:</b> {workExperience.company}
										</p>
										<p>
											<b>Puesto:</b> {workExperience.position}
										</p>
										<p>
											<b>Logros:</b>
										</p>

										<ul className='ml-5'>
											{workExperiences[i].achievements.map((achievement, i) => (
												<li key={`${achievement.achievementId}-${i}`}>
													<p>{achievement.achievementContent} </p>
												</li>
											))}
										</ul>
									</li>
								))}
							</ul>
						)}
					</div>
					<hr />
					<div>
						<h4>Educación</h4>
						{studies.length === 0 ? (
							""
						) : (
							<ul className='ml-5'>
								{studies.map((study, i) => (
									<li key={`${study.stuydyId}-${i}`}>
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
						{courses.length === 0 ? (
							""
						) : (
							<ul className='ml-5'>
								{courses.map((course, i) => (
									<li key={`${course.courseId}-${i}`}>
										<p>
											<b>Periodo:</b> {course.startDate} a{" "}
											{course.endDate ? course.endDate : course.current}
										</p>
										<p>
											<b>Instituto:</b> {course.institute}
										</p>
										<p>
											<b>course:</b> {course.courseName}
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
						{certifications.length === 0 ? (
							""
						) : (
							<ul className='ml-5'>
								{certifications.map((certification, i) => (
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
											<b>certificación:</b> {certification.certificationName}
										</p>
										<p>
											<b>Link del certificación:</b> {certification.link}
										</p>
									</li>
								))}
							</ul>
						)}
					</div>
					<hr />
					<div>
						<h4>Habilidades & Idiomas</h4>
						{skills.length === 0 ? (
							""
						) : (
							<div className='ml-5 skill-container'>
								<p className='pr-3'>
									<b>Habilidades:</b>
								</p>
								{skills.map((h, i) => (
									<div key={`${h.skillId}-${i}`} className='d-flex'>
										<p className='pr-3'>{h.skill}</p>
									</div>
								))}
							</div>
						)}

						{languages.length === 0 ? (
							""
						) : (
							<div className='ml-5'>
								{languages.map((idioma, i) => (
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

						{personalReferences.length === 0 ? (
							""
						) : (
							<ul className='ml-5'>
								{personalReferences.map((rp, i) => (
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

						{workReferences.length === 0 ? (
							""
						) : (
							<ul className='ml-5'>
								{workReferences.map((rl, i) => (
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
			</div>
		</>
	);
};

export default Submit;
