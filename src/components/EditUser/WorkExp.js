import React, { useState } from "react";
import { IoIosRadioButtonOff, IoIosRadioButtonOn } from "react-icons/io";
import shortid from "shortid";
import Error from "../Error";

const WorkExp = ({
	userProfile,
	setUserProfile,
	handleClickNext,
	handleClickBack,
}) => {
	const { workExperiences } = userProfile;

	const [errorAchievement, setErrorAchievement] = useState(false);
	const [error, setError] = useState(false);

	const [workExperience, setWorkExperience] = useState({
		workExperienceId: "",
		startDate: "",
		endDate: "",
		current: "",
		company: "",
		position: "",
		achievements: [],
	});

	const [achievement, setAchievement] = useState({
		achievementId: "",
		achievementContent: "",
	});

	const {
		startDate,
		endDate,
		current,
		company,
		position,
		achievements,
	} = workExperience;

	const { achievementContent } = achievement;

	const handleWorkExperienceChange = (e) => {
		setWorkExperience({
			...workExperience,
			[e.target.name]: e.target.value,
		});
	};

	const handleAchievementChange = (e) => {
		setAchievement({
			...achievement,
			achievementContent: e.target.value,
		});
	};

	const addAchievements = (e) => {
		e.preventDefault();

		if (achievement.achievementContent.trim() === "") {
			setErrorAchievement(true);

			setTimeout(() => {
				setErrorAchievement(false);
			}, 5000);
			return;
		}

		achievement.achievementId = shortid.generate();

		const newAchievements = [...achievements, achievement];

		setWorkExperience({
			...workExperience,
			achievements: newAchievements,
		});

		setAchievement({
			achievementId: "",
			achievementContent: "",
		});
	};

	const handleDeleteWorkExperience = (id) => {
		const newExp = workExperiences.filter((exp) => exp.workExperienceId != id);

		setUserProfile({
			...userProfile,
			workExperiences: newExp,
		});
	};

	const addWorkExperience = (e) => {
		e.preventDefault();

		if (
			workExperience.startDate === "" ||
			workExperience.company.trim() === "" ||
			workExperience.position.trim() === ""
		) {
			setError(true);

			setTimeout(() => {
				setError(false);
			}, 5000);
			return;
		}

		workExperience.workExperienceId = shortid.generate();

		const newWorkExperiences = [...workExperiences, workExperience];

		setUserProfile({
			...userProfile,
			workExperiences: newWorkExperiences,
		});

		setWorkExperience({
			startDate: "",
			endDate: "",
			current: "",
			company: "",
			position: "",
			achievements: [],
		});
	};

	const handleUpDateState = (e) => {
		if (
			workExperience.startDate === "" &&
			workExperience.endDate === "" &&
			workExperience.company.trim() === "" &&
			workExperience.position.trim() === ""
		) {
			handleClickNext();
		} else {
			setError(true);

			setTimeout(() => {
				setError(false);
			}, 5000);
			return;
		}
	};

	const [isToggledWE, setToggledWE] = useState(false);

	const toggleTrueFalseWE = () => {
		setToggledWE(!isToggledWE);
		if (!isToggledWE) {
			setWorkExperience({
				...workExperience,
				current: "actualmente",
				endDate: "",
			});
		} else {
			setWorkExperience({
				...workExperience,
				current: "",
				endDate: "",
			});
		}
	};

	return (
		<>
			<div className='workexp-form'>
				<h4>Experiencia Profesional</h4>
				<div className='row'>
					<div className='col-lg-6 col-12'>
						<label htmlFor='startDate'>Inicio</label>
						<input
							type='date'
							id='startDate'
							name='startDate'
							className='input-table'
							value={startDate}
							onChange={handleWorkExperienceChange}
						/>

						<div className='end-date'>
							{!isToggledWE ? (
								<>
									<label htmlFor='endDate'>Fin</label>
									<input
										type='date'
										id='endDate'
										name='endDate'
										value={endDate}
										onChange={handleWorkExperienceChange}
									/>
								</>
							) : (
								""
							)}

							{!isToggledWE ? (
								<div className='current-container'>
									<p>Empleo actual</p>
									<IoIosRadioButtonOff onClick={toggleTrueFalseWE} />
								</div>
							) : (
								<div className='current-container'>
									<p>Empleo actual</p>
									<IoIosRadioButtonOn onClick={toggleTrueFalseWE} />
								</div>
							)}
						</div>

						<label htmlFor='company'>Company</label>
						<input
							type='text'
							id='company'
							name='company'
							className='input-table'
							placeholder='Empresa donde trabajas o trabajaste'
							value={company}
							onChange={handleWorkExperienceChange}
						/>

						<label htmlFor='position'>Puesto</label>
						<input
							type='text'
							id='position'
							name='position'
							className='input-table'
							placeholder='Nombre del puesto'
							value={position}
							onChange={handleWorkExperienceChange}
						/>

						<div className='d-felx'>
							<label htmlFor='achievementContent'>Logros</label>
							<textarea
								type='text'
								id='achievementContent'
								name='achievementContent'
								className='input-table'
								placeholder='Logros generados en el periodo laboral'
								value={achievementContent}
								onChange={handleAchievementChange}
							/>

							{errorAchievement && (
								<Error
									className='error'
									mensaje={"Favor de agregar información en el campo de Logros"}
								/>
							)}
							{error && (
								<Error
									className='error'
									mensaje={
										"Favor de agregar información en todos los campos, ya agregaste tus logros?"
									}
								/>
							)}
						</div>

						<div className='btn-container'>
							<button className='btn-logro' onClick={addAchievements}>
								Agregar Logro
							</button>

							<button className='btn-workexp' onClick={addWorkExperience}>
								Agregar Expreriencia Profesional
							</button>
						</div>
					</div>

					<div className='col-lg-6 col-12'>
						<div className='summary'>
							<h4>Registros generados</h4>
							{workExperiences.length === 0 ? (
								<p>No hay ningún registro</p>
							) : (
								<div>
									{workExperiences.map((expProf, i) => (
										<div key={expProf.workExperienceId}>
											<div className='summary-period'>
												<p>
													<b>Periodo: </b>
													{expProf.startDate}
													{expProf.endDate
														? ` a ${expProf.endDate}`
														: ` - ${expProf.current}`}
												</p>
												<button
													onClick={() =>
														handleDeleteWorkExperience(expProf.workExperienceId)
													}
													className='btn-workexp-delete'
												>
													Eliminar
												</button>
											</div>

											<p>
												<b>Empresa: </b> {expProf.company}
											</p>
											<p>
												<b>Puesto: </b> {expProf.position}
											</p>
											<p>
												<b>Logros: </b>
											</p>

											<ul className='ml-5'>
												{workExperiences[i].achievements.map((achievement) => (
													<li key={achievement.achievementId}>
														<div>{achievement.achievementContent} </div>
													</li>
												))}
											</ul>
											<hr />
										</div>
									))}
								</div>
							)}
						</div>
					</div>
				</div>
				{error || errorAchievement ? (
					""
				) : (
					<div className='btns-form-container'>
						<button
							type='button'
							className='btn-back'
							onClick={handleClickBack}
						>
							Anterior
						</button>
						<button
							type='button'
							className='btn-next'
							onClick={handleUpDateState}
						>
							Siguiente
						</button>
					</div>
				)}
			</div>
		</>
	);
};

export default WorkExp;
