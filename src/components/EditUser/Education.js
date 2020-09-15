import React, { useState } from "react";
import { IoIosRadioButtonOff, IoIosRadioButtonOn } from "react-icons/io";
import shortid from "shortid";
import Error from "../Error";

const Education = ({
	userProfile,
	setUserProfile,
	handleClickNext,
	handleClickBack,
}) => {
	const { studies } = userProfile;

	const [mainError, setMainError] = useState(false);

	const [study, setStudy] = useState({
		studyId: "",
		startDate: "",
		endDate: "",
		current: "",
		institute: "",
		studyName: "",
	});

	const { startDate, endDate, current, institute, studyName } = study;

	const handleChangeEstudio = (e) => {
		setStudy({
			...study,
			[e.target.name]: e.target.value,
		});
	};

	const handleDelete = (id) => {
		const newStudy = studies.filter((study) => study.studyId != id);

		setUserProfile({
			...userProfile,
			studies: newStudy,
		});
	};

	const addStudy = (e) => {
		e.preventDefault();

		if (
			study.startDate === "" ||
			study.institute.trim() === "" ||
			study.studyName.trim() === ""
		) {
			setMainError(true);

			setTimeout(() => {
				setMainError(false);
			}, 5000);
			return;
		}

		study.studyId = shortid.generate();

		const newStudies = [...studies, study];

		setUserProfile({
			...userProfile,
			studies: newStudies,
		});

		setStudy({
			startDate: "",
			endDate: "",
			current: "",
			institute: "",
			studyName: "",
		});
	};

	const handleUpDateState = () => {
		if (
			study.startDate === "" &&
			study.endDate === "" &&
			study.institute.trim() === "" &&
			study.studyName.trim() === ""
		) {
			handleClickNext();
		} else {
			setMainError(true);

			setTimeout(() => {
				setMainError(false);
			}, 5000);
			return;
		}
	};

	const [isToggledStudies, setToggledStudies] = useState(false);

	const toggleTrueFalseStudies = () => {
		setToggledStudies(!isToggledStudies);
		if (!isToggledStudies) {
			setStudy({
				...study,
				current: "actualmente",
				endDate: "",
			});
		} else {
			setStudy({
				...study,
				current: "",
				endDate: "",
			});
		}
	};

	return (
		<>
			<div className='education-form bg-white'>
				<h4>Educación</h4>
				<div className='row'>
					<div className='col-lg-6 col-12'>
						<label htmlFor='startDate'>Inicio</label>
						<input
							type='date'
							id='startDate'
							name='startDate'
							className='input-table'
							value={startDate}
							onChange={handleChangeEstudio}
						/>
						<div className='end-date'>
							{!isToggledStudies ? (
								<>
									<label htmlFor='endDate'>Fin</label>
									<input
										type='date'
										id='endDate'
										name='endDate'
										className='input-table'
										value={endDate}
										onChange={handleChangeEstudio}
									/>
								</>
							) : (
								""
							)}

							{!isToggledStudies ? (
								<div className='current-container'>
									<p>Actualmente</p>
									<IoIosRadioButtonOff onClick={toggleTrueFalseStudies} />
								</div>
							) : (
								<div className='current-container'>
									<p>Actualmente</p>
									<IoIosRadioButtonOn onClick={toggleTrueFalseStudies} />
								</div>
							)}
						</div>

						<label htmlFor='institute'>Instituto</label>
						<input
							type='text'
							id='institute'
							name='institute'
							className='input-table'
							placeholder='Nombre del instituto'
							value={institute}
							onChange={handleChangeEstudio}
						/>

						<label htmlFor='studyName'>Carrera</label>
						<input
							type='text'
							id='studyName'
							name='studyName'
							className='input-table'
							placeholder='nombre del estudio'
							value={studyName}
							onChange={handleChangeEstudio}
						/>

						{mainError && (
							<Error
								className='error'
								mensaje={"Favor de agregar información en todos los campos"}
							/>
						)}

						<div className='btn-container-one-btn'>
							<button className=' btn-studies' onClick={addStudy}>
								Agregar Estudio
							</button>
						</div>
					</div>
					<div className='col-lg-6 col-12'>
						<div className='summary'>
							<h4>Registros generados</h4>
							{studies.length === 0 ? (
								<p>No hay ningún registro</p>
							) : (
								<div>
									{studies.map((study) => (
										<div key={study.studyId}>
											<div className='summary-period'>
												<p>
													<b>Periodo: </b>
													{study.startDate}
													{study.endDate
														? ` a ${study.endDate}`
														: ` - ${study.current}`}
												</p>
												<button
													onClick={() => handleDelete(study.studyId)}
													className='btn-education-delete'
												>
													Eliminar
												</button>
											</div>

											<p>
												<b>Instituto: </b> {study.institute}
											</p>
											<p>
												<b>Carrera o Profesión: </b> {study.studyName}
											</p>

											<hr />
										</div>
									))}
								</div>
							)}
						</div>
					</div>
				</div>
				<div className='btns-form-container mt2'>
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

export default Education;
