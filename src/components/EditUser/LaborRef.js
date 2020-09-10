import React, { useState } from "react";
import shortid from "shortid";
import Error from "../Error";

const LaborRef = ({
	userProfile,
	setUserProfile,
	handleClickNext,
	handleClickBack,
}) => {
	const { workReferences } = userProfile;

	const [error, setError] = useState(false);

	const [workReference, setWorkReference] = useState({
		company: "",
		bossName: "",
		telephone: "",
		extension: "",
	});

	const { company, bossName, telephone, extension } = workReference;

	const handleChange = (e) => {
		setWorkReference({
			...workReference,
			[e.target.name]: e.target.value,
		});
	};

	const addWorkReference = (e) => {
		e.preventDefault();

		if (
			workReference.company.trim() === "" ||
			workReference.bossName.trim() === "" ||
			workReference.telephone.trim() === ""
		) {
			setError(true);

			setTimeout(() => {
				setError(false);
			}, 5000);
			return;
		}

		workReference.workReferenceId = shortid.generate();

		const newWorkReferences = [...workReferences, workReference];

		setUserProfile({
			...userProfile,
			workReferences: newWorkReferences,
		});

		setWorkReference({
			company: "",
			bossName: "",
			telephone: "",
			extension: "",
		});
	};

	const handleDelete = (id) => {
		const newWorkRef = workReferences.filter((rl) => rl.workReferenceId != id);

		setUserProfile({
			...userProfile,
			workReferences: newWorkRef,
		});
	};

	const handleUpDateState = () => {
		if (
			workReference.company.trim() === "" &&
			workReference.bossName.trim() === "" &&
			workReference.telephone.trim() === "" &&
			workReference.extension.trim() === ""
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
	return (
		<>
			<div className='workRef-form'>
				<h4>Referencias Laborales</h4>

				<div className='row'>
					<div className='col-lg-6 col-12'>
						<label htmlFor='company'>Empresa</label>
						<input
							type='text'
							id='company'
							name='company'
							placeholder='Nombre de la empresa'
							className='input-table'
							value={company}
							onChange={handleChange}
						/>

						<label htmlFor='bossName'>Nombre</label>
						<input
							type='text'
							id='bossName'
							name='bossName'
							className='input-table'
							placeholder='nombre del jefe directo o contacto'
							value={bossName}
							onChange={handleChange}
						/>
						<div className='a-row'>
							<label htmlFor='telephone'>Tel.</label>
							<input
								type='text'
								id='telephone'
								name='telephone'
								placeholder='Teléfono del contacto'
								className='input-table'
								value={telephone}
								onChange={handleChange}
							/>

							<label htmlFor='extension'>Ext.</label>
							<input
								type='text'
								id='extension'
								placeholder='Ext. del contacto'
								name='extension'
								className='input-table'
								value={extension}
								onChange={handleChange}
							/>
						</div>
						{error && (
							<Error
								mensaje={"Favor de agregar información en todos los campos"}
							/>
						)}

						<div className='btn-container-one-btn'>
							<button className='btn-referencias' onClick={addWorkReference}>
								Agregar Referencia
							</button>
						</div>
					</div>

					<div className='col-lg-6 col-12'>
						<div className='summary'>
							<h4>Registros generados</h4>
							{workReferences.length === 0 ? (
								<p>No hay ningún registro</p>
							) : (
								<div>
									<div className='ml-5'>
										{workReferences.map((rl) => (
											<div key={rl.workReferenceId}>
												<div className='summary-period'>
													<p>
														<b>Empresa:</b> {rl.company}{" "}
													</p>
													<button
														onClick={() => {
															handleDelete(rl.workReferenceId);
														}}
														className='btn-workRef-delete-small'
													>
														Eliminar
													</button>
												</div>
												<p>
													<b>Nombre:</b> {rl.bossName}{" "}
												</p>
												<div className='a-row'>
													<p>
														<b>Teléfono:</b> {rl.telephone}{" "}
													</p>
													<p>
														<b>Extensión:</b> {rl.extension}{" "}
													</p>
												</div>
												<hr />
											</div>
										))}
									</div>
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

export default LaborRef;
