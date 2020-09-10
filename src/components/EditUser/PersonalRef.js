import React, { useState } from "react";
import shortid from "shortid";
import Error from "../Error";

const PersonalRef = ({
	userProfile,
	setUserProfile,
	handleClickNext,
	handleClickBack,
}) => {
	const { personalReferences } = userProfile;

	const [error, setError] = useState(false);

	const [personalReference, setPersonalReference] = useState({
		name: "",
		cellphone: "",
		relationship: "",
	});

	const { name, cellphone, relationship } = personalReference;

	const handleChange = (e) => {
		setPersonalReference({
			...personalReference,
			[e.target.name]: e.target.value,
		});
	};

	const addPersonalReference = (e) => {
		e.preventDefault();

		if (
			personalReference.name.trim() === "" ||
			personalReference.cellphone.trim() === "" ||
			personalReference.relationship.trim() === ""
		) {
			setError(true);

			setTimeout(() => {
				setError(false);
			}, 5000);
			return;
		}

		personalReference.personalReferenceId = shortid.generate();

		const newPersonalReferences = [...personalReferences, personalReference];

		setUserProfile({
			...userProfile,
			personalReferences: newPersonalReferences,
		});

		setPersonalReference({
			name: "",
			cellphone: "",
			relationship: "",
		});
	};

	const handleDelete = (id) => {
		const newRef = personalReferences.filter(
			(pr) => pr.personalReferenceId != id
		);

		setUserProfile({
			...userProfile,
			personalReferences: newRef,
		});
	};

	const handleUpDateState = () => {
		if (
			personalReference.name.trim() === "" &&
			personalReference.cellphone.trim() === "" &&
			personalReference.relationship.trim() === ""
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
			<div className='personal-ref-form'>
				<h4>Referencias Personales</h4>

				<div className='row'>
					<div className='col-lg-6 col-12'>
						<label htmlFor='name'>Nombre</label>
						<input
							type='text'
							id='name'
							name='name'
							className='input-table'
							value={name}
							onChange={handleChange}
						/>

						<label htmlFor='cellphone'>Celular</label>
						<input
							type='text'
							id='cellphone'
							name='cellphone'
							className='input-table'
							value={cellphone}
							onChange={handleChange}
						/>

						<label htmlFor='relationship'>Parentesco</label>
						<input
							type='text'
							id='relationship'
							name='relationship'
							className='input-table'
							value={relationship}
							onChange={handleChange}
						/>

						{error && (
							<Error
								mensaje={"Favor de agregar información en todos los campos"}
							/>
						)}

						<div className='btn-container-one-btn'>
							<button
								className='btn-referencias'
								onClick={addPersonalReference}
							>
								Agregar Referencia
							</button>
						</div>
					</div>

					<div className='col-lg-6 col-12'>
						<div className='summary'>
							<h4>Registros generados</h4>
							{personalReferences.length === 0 ? (
								<p>No hay ningún registro</p>
							) : (
								<div>
									<div className='ml-5'>
										{personalReferences.map((pr) => (
											<div key={pr.personalReferenceId}>
												<div className='summary-period'>
													<p>
														<b>Nombre:</b> {pr.name}{" "}
													</p>
													<button
														onClick={() => {
															handleDelete(pr.personalReferenceId);
														}}
														className='btn-personal-ref-delete-small'
														value={pr.personalReferenceId}
													>
														Eliminar
													</button>
												</div>
												<p>
													<b>Celular:</b> {pr.cellphone}{" "}
												</p>
												<p>
													<b>Parentesco:</b> {pr.relationship}{" "}
												</p>
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

export default PersonalRef;
