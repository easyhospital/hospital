import React, { useState } from "react";
import shortid from "shortid";
import { IoIosRadioButtonOff, IoIosRadioButtonOn } from "react-icons/io";
import Error from "../Error";

const Certifications = ({
	userProfile,
	setUserProfile,
	handleClickNext,
	handleClickBack,
}) => {
	const { certifications } = userProfile;

	const [error, setError] = useState(false);

	const [certification, setCertification] = useState({
		startDate: "",
		endDate: "",
		current: "",
		institute: "",
		certificationName: "",
		link: "",
	});

	const {
		startDate,
		endDate,
		current,
		institute,
		certificationName,
		link,
	} = certification;

	const handleChange = (e) => {
		setCertification({
			...certification,
			[e.target.name]: e.target.value,
		});
	};

	const addCertification = (e) => {
		e.preventDefault();

		if (
			certification.startDate === "" ||
			certification.institute.trim() === "" ||
			certification.certificationName.trim() === ""
		) {
			setError(true);

			setTimeout(() => {
				setError(false);
			}, 5000);
			return;
		}

		certification.certificationId = shortid.generate();

		const newCertifications = [...certifications, certification];

		setUserProfile({
			...userProfile,
			certifications: newCertifications,
		});

		setCertification({
			startDate: "",
			endDate: "",
			institute: "",
			certificationName: "",
			link: "",
		});
	};

	const handleDelete = (id) => {
		const newCer = certifications.filter((cer) => cer.certificationId != id);

		setUserProfile({
			...userProfile,
			certifications: newCer,
		});
	};
	const handleUpDateState = () => {
		if (
			certification.startDate === "" &&
			certification.endDate === "" &&
			certification.institute.trim() === "" &&
			certification.certificationName.trim() === "" &&
			certification.link.trim() === ""
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

	const [isToggledCertifications, setToggledCertifications] = useState(false);

	const toggleTrueFalseCertifications = (e) => {
		setToggledCertifications(!isToggledCertifications);
		if (!isToggledCertifications) {
			setCertification({
				...certification,
				current: "empleo actual",
				endDate: "",
			});
		} else {
			setCertification({
				...certification,
				current: "",
				endDate: "",
			});
		}
	};

	return (
		<>
			<div className='certification-form bg-white'>
				<h4>Certificaciones</h4>

				<div className='row'>
					<div className='col-lg-6 col-12'>
						<label htmlFor='startDate'>Inicio</label>
						<input
							type='date'
							id='startDate'
							name='startDate'
							className='input-table'
							value={startDate}
							onChange={handleChange}
						/>

						<div className='end-date'>
							{!isToggledCertifications ? (
								<>
									<label htmlFor='endDate'>Fin</label>
									<input
										type='date'
										id='endDate'
										name='endDate'
										className='input-table'
										value={endDate}
										onChange={handleChange}
									/>
								</>
							) : (
								""
							)}

							{!isToggledCertifications ? (
								<div className='current-container'>
									<p>En certificación</p>
									<IoIosRadioButtonOff
										onClick={toggleTrueFalseCertifications}
									/>
								</div>
							) : (
								<div className='current-container'>
									<p>En certificación</p>
									<IoIosRadioButtonOn onClick={toggleTrueFalseCertifications} />
								</div>
							)}
						</div>

						<label htmlFor='institute'>Institución</label>
						<input
							type='text'
							id='institute'
							name='institute'
							className='input-table'
							placeholder='Nombre del instituto'
							value={institute}
							onChange={handleChange}
						/>

						<label htmlFor='certificationName'>Certificación</label>
						<input
							type='text'
							id='certificationName'
							name='certificationName'
							className='input-table'
							placeholder='nombre de la certificación'
							value={certificationName}
							onChange={handleChange}
						/>

						<label htmlFor='link'>Link de la certificación</label>
						<input
							type='text'
							id='link'
							name='link'
							className='input-table'
							placeholder='link de la certificación'
							value={link}
							onChange={handleChange}
						/>

						{error && (
							<Error
								className='error'
								mensaje={"Favor de agregar información en todos los campos"}
							/>
						)}

						<div className='btn-container-one-btn'>
							<button className='btn-certification' onClick={addCertification}>
								Agregar Certificación
							</button>
						</div>
					</div>
					<div className='col-lg-6 col-12'>
						<div className='summary'>
							<h4>Registros generados</h4>
							{certifications.length === 0 ? (
								<p>No hay ningún registro</p>
							) : (
								<div>
									{certifications.map((certification) => (
										<div key={certification.certificationId}>
											<div className='summary-period'>
												<p>
													<b>Periodo: </b>
													{certification.startDate} a{" "}
													{certification.endDate
														? certification.endDate
														: certification.current}{" "}
												</p>
												<button
													onClick={() => {
														handleDelete(certification.certificationId);
													}}
													className='btn-certification-delete'
													value={certification.certificationId}
												>
													Eliminar
												</button>
											</div>

											<p>
												<b>Instituto: </b> {certification.institute}
											</p>
											<p>
												<b>Certificacion: </b> {certification.certificationName}
											</p>
											<p>
												<b>Link del Certificacion: </b> {certification.link}
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

export default Certifications;
