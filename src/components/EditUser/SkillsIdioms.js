import React, { useState } from "react";
import shortid from "shortid";
import Error from "../Error";

const SkillsIdioms = ({
	userProfile,
	setUserProfile,
	handleClickNext,
	handleClickBack,
}) => {
	const { languages, skills } = userProfile;

	const [error, setError] = useState(false);

	const [hab, guardarHab] = useState({
		skill: "",
	});

	const [language, setLanguage] = useState({
		lengua: "",
		nivelDominio: "",
	});

	const { lengua, nivelDominio } = language;
	const { skill } = hab;

	const handleChangeLanguage = (e) => {
		setLanguage({
			...language,
			[e.target.name]: e.target.value,
		});
	};
	const handleDeleteSkills = (id) => {
		const nuevasHab = skills.filter((h) => h.skillId != id);

		setUserProfile({
			...userProfile,
			skills: nuevasHab,
		});
	};

	const handleDeletelanguages = (id) => {
		const newlanguages = languages.filter((i) => i.idiomaId != id);

		setUserProfile({
			...userProfile,
			languages: newlanguages,
		});
	};

	const handleChangeSkill = (e) => {
		guardarHab({
			...hab,
			[e.target.name]: e.target.value,
		});
	};

	const addLanguage = (e) => {
		e.preventDefault();

		if (language.lengua.trim() === "" || language.nivelDominio.trim() === "") {
			setError(true);

			setTimeout(() => {
				setError(false);
			}, 5000);
			return;
		}

		language.idiomaId = shortid.generate();

		const newlanguages = [...languages, language];

		setUserProfile({
			...userProfile,
			languages: newlanguages,
		});

		setLanguage({
			lengua: "",
			nivelDominio: "",
		});
	};

	const addSkill = (e) => {
		e.preventDefault();

		if (skill === "") {
			setError(true);

			setTimeout(() => {
				setError(false);
			}, 5000);
			return;
		}

		hab.skillId = shortid.generate();

		const nuevasSkills = [...skills, hab];

		setUserProfile({
			...userProfile,
			skills: nuevasSkills,
		});

		guardarHab({
			skill: "",
		});
	};

	const handleUpDateState = () => {
		if (skill === "" && language.lengua === "") {
			handleClickNext();
		} else {
			setError(true);

			setTimeout(() => {
				setError(false);
			}, 5000);
			return;
		}
	};

	return (
		<>
			<div className='skill-form bg-white'>
				<h4>Habilidades</h4>
				<div className='row'>
					<div className='col-lg-6 col-12'>
						<input
							type='text'
							id='skill'
							name='skill'
							className='input-table'
							placeholder='Tus habilidades'
							value={skill}
							onChange={handleChangeSkill}
						/>

						<div className='btn-container-one-btn'>
							<button className='btn-skill' onClick={addSkill}>
								Agregar skill
							</button>
						</div>
					</div>
					<div className='col-lg-6 col-12'>
						<div className='summary-skills'>
							<h4>Registros generados</h4>
							{skills.length === 0 ? (
								<p>No hay ningún registro</p>
							) : (
								<div>
									<div className='ml-5'>
										{skills.map((h) => (
											<div key={h.skillId}>
												<div className='summary-period-skills'>
													<p className='pr-5'>{h.skill}</p>
													<button
														onClick={() => {
															handleDeleteSkills(h.skillId);
														}}
														className='btn-skill-delete-small'
													>
														Eliminar
													</button>
												</div>
											</div>
										))}
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
			<div className='language-form mt4 bg-white'>
				<h4>Idiomas</h4>
				<div className='row'>
					<div className='col-lg-6 col-12'>
						<input
							type='text'
							id='lengua'
							name='lengua'
							placeholder='Tus habilidades'
							className='input-table'
							value={lengua}
							onChange={handleChangeLanguage}
						/>

						<label htmlFor='nivelDominio'>Nivel de dominio</label>
						<select
							id='nivelDominio'
							className='form-control'
							name='nivelDominio'
							id='nivelDominio'
							value={nivelDominio}
							onChange={handleChangeLanguage}
						>
							<option defaultValue>Selecciona ...</option>
							<option value='Basico'>Básico</option>
							<option value='Intermedio'>Intermedio</option>
							<option value='Avanzado'>Avanzado</option>
							<option value='Lengua nativa'>Lengua Nativa</option>
						</select>

						<div className='btn-container-one-btn mt-3'>
							<button className='btn-idioma' onClick={addLanguage}>
								Agregar Idioma
							</button>
						</div>
						{error && (
							<Error
								mensaje={"Favor de agregar información en todos los campos"}
							/>
						)}
					</div>

					<div className='col-lg-6 col-12'>
						<div className='summary-skills'>
							<h4>Registros generados</h4>
							{languages.length === 0 ? (
								<p>No hay ningún registro</p>
							) : (
								<div>
									{languages.map((language, i) => (
										<div key={language.idiomaId}>
											<div className='summary-period-skills'>
												<p className='pr-3'>{`${language.lengua} - ${language.nivelDominio}`}</p>
												<button
													onClick={() => {
														handleDeletelanguages(language.idiomaId);
													}}
													className='btn-language-delete-small'
												>
													Eliminar
												</button>
											</div>
										</div>
									))}
								</div>
							)}
						</div>
					</div>
				</div>
				<div className='btns-form-container mt7'>
					<button type='button' className='btn-back' onClick={handleClickBack}>
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
			</div>
		</>
	);
};

export default SkillsIdioms;
