import React, { useState, useContext } from "react";
import { useRouter } from "next/router";
import { FirebaseContext } from "../../../firebase";
import shortid from "shortid";
import useValidation from "../../../hooks/useValidation";
import registerPatientValidation from "../../../validations/registerPatientValidation";

const INICIAL_STATE = {
	status: "",
	name: "",
	middleName: "",
	lastName: "",
	sex: "",
	birthDate: "",
	birthPlace: "",
	ocupation: "",
	idType: "",
	idReference: "",
	emergenciesadmission: "",
	rfc: "",
	curp: "",
	address_street: "",
	address_outdoorNumber: "",
	address_indoorNumber: "",
	suburb: "",
	town: "",
	state: "",
	country: "",
	phoneNumber: "",
	cellphoneNumber: "",
	insuranceCompany: "",
	insurancePolicyNumber: "",
};

const NewPatient = (props) => {
	const [error, setError] = useState(false);

	const { values, errors, handleSubmit, handleChange } = useValidation(
		INICIAL_STATE,
		registerPatientValidation,
		registerPatient
	);

	const {
		status,
		name,
		middleName,
		lastName,
		sex,
		birthDate,
		birthPlace,
		ocupation,
		idType,
		idReference,
		emergenciesadmission,
		rfc,
		curp,
		address_street,
		address_outdoorNumber,
		address_indoorNumber,
		suburb,
		town,
		state,
		country,
		phoneNumber,
		cellphoneNumber,
		insuranceCompany,
		insurancePolicyNumber,
	} = values;

	// hook de routing para redireccionar
	const router = useRouter();

	// context con las operaciones crud de firebase
	const { usuario, firebase } = useContext(FirebaseContext);

	async function registerPatient() {
		// si el usuario no esta autenticado llevar al login
		if (!usuario) {
			return router.push("/");
		}

		// crear el objeto de nuevo paciente
		const patient = {
			id_Patient: shortid.generate(),
			status,
			name,
			middleName,
			lastName,
			sex,
			birthDate,
			birthPlace,
			ocupation,
			idType,
			idReference,
			emergenciesadmission,
			rfc,
			curp,
			address_street,
			address_outdoorNumber,
			address_indoorNumber,
			suburb,
			town,
			state,
			country,
			phoneNumber,
			cellphoneNumber,
			contactFamily: [],
			insuranceCompany,
			insurancePolicyNumber,
			clinicHistory: [],
		};

		// insertarlo en la base de datos
		firebase.db.collection("patients").add(patient);

		return router.push("/dashboard/patient-list");
	}

	return (
		<div>
			<div className='new-patient'>
				{!usuario ? (
					<p>Error de autenticacion del usuario</p>
				) : (
					<>
						<h3 className='title'>Registro de Ingreso Paciente</h3>

						<form
							className='form-new-patient'
							onSubmit={handleSubmit}
							noValidate
						>
							<label htmlFor='name'>Nombre</label>
							<input
								type='text'
								id='name'
								name='name'
								className='input-table'
								placeholder='primer nombre'
								value={name}
								onChange={handleChange}
							/>

							<label htmlFor='middleName'>Segundo Nombre</label>
							<input
								type='text'
								id='middleName'
								name='middleName'
								className='input-table'
								placeholder='segundo nombre'
								value={middleName}
								onChange={handleChange}
							/>

							<label htmlFor='lastName'>Apellidos</label>
							<input
								className='input-table'
								type='text'
								id='lastName'
								name='lastName'
								placeholder='apellidos'
								value={lastName}
								onChange={handleChange}
							/>

							<label htmlFor='sex'>Sexo</label>
							<input
								className='input-table'
								type='text'
								id='sex'
								name='sex'
								placeholder='sexo'
								value={sex}
								onChange={handleChange}
							/>

							<label htmlFor='birthDate'>Fecha de Nacimiento</label>
							<input
								type='date'
								id='birthDate'
								name='birthDate'
								className='input-table'
								placeholder='fecha de nacimiento'
								value={birthDate}
								onChange={handleChange}
							/>

							<label htmlFor='birthPlace'>Lugar de Nacimiento</label>
							<input
								type='text'
								id='birthPlace'
								name='birthPlace'
								className='input-table'
								placeholder='lugar de nacimiento'
								value={birthPlace}
								onChange={handleChange}
							/>

							<label htmlFor='ocupation'>Ocupación</label>
							<input
								className='input-table'
								type='text'
								id='ocupation'
								name='ocupation'
								placeholder='ocupación'
								value={ocupation}
								onChange={handleChange}
							/>

							<label htmlFor='idType'>Tipo de identificación</label>
							<input
								type='text'
								id='idType'
								name='idType'
								className='input-table'
								placeholder='INE, IFE, Pasaporte, Licencia de conducir, etc.'
								value={idType}
								onChange={handleChange}
							/>

							<label htmlFor='idReference'>Número de Identificación</label>
							<input
								type='text'
								id='idReference'
								name='idReference'
								className='input-table'
								placeholder='número de referencia de la identificación'
								value={idReference}
								onChange={handleChange}
							/>

							<label htmlFor='emergenciesadmission'>
								Ingreso por emergencias
							</label>
							<input
								className='input-table'
								type='text'
								id='emergenciesadmission'
								name='emergenciesadmission'
								placeholder='Ingreso por emergencias'
								value={emergenciesadmission}
								onChange={handleChange}
							/>

							<label htmlFor='rfc'>RFC</label>
							<input
								className='input-table'
								type='text'
								id='rfc'
								name='rfc'
								placeholder='RFC'
								value={rfc}
								onChange={handleChange}
							/>

							<label htmlFor='curp'>CURP</label>
							<input
								type='text'
								id='curp'
								name='curp'
								className='input-table'
								placeholder='CURP'
								value={curp}
								onChange={handleChange}
							/>

							<label htmlFor='address_street'>Dirección._Calle</label>
							<input
								type='text'
								id='address_street'
								name='address_street'
								className='input-table'
								placeholder='calle'
								value={address_street}
								onChange={handleChange}
							/>

							<label htmlFor='address_outdoorNumber'>Número exterior</label>
							<input
								className='input-table'
								type='text'
								id='address_outdoorNumber'
								name='address_outdoorNumber'
								placeholder='número exterior'
								value={address_outdoorNumber}
								onChange={handleChange}
							/>

							<label htmlFor='address_indoorNumber'>Número interior</label>
							<input
								type='text'
								id='address_indoorNumber'
								name='address_indoorNumber'
								className='input-table'
								placeholder='número interior'
								value={address_indoorNumber}
								onChange={handleChange}
							/>

							<label htmlFor='suburb'>Colonia</label>
							<input
								type='text'
								id='suburb'
								name='suburb'
								className='input-table'
								placeholder='colonia'
								value={suburb}
								onChange={handleChange}
							/>

							<label htmlFor='town'>Municipio</label>
							<input
								className='input-table'
								type='text'
								id='town'
								name='town'
								placeholder='municipio'
								value={town}
								onChange={handleChange}
							/>

							<label htmlFor='state'>Estado</label>
							<input
								className='input-table'
								type='text'
								id='state'
								name='state'
								placeholder='estado'
								value={state}
								onChange={handleChange}
							/>

							<label htmlFor='country'>País</label>
							<input
								type='text'
								id='country'
								name='country'
								className='input-table'
								placeholder='país'
								value={country}
								onChange={handleChange}
							/>

							<label htmlFor='phoneNumber'>Teléfono</label>
							<input
								type='text'
								id='phoneNumber'
								name='phoneNumber'
								className='input-table'
								placeholder='número de teléfono'
								value={phoneNumber}
								onChange={handleChange}
							/>

							<label htmlFor='cellphoneNumber'>Celular</label>
							<input
								className='input-table'
								type='text'
								id='cellphoneNumber'
								name='cellphoneNumber'
								placeholder='número de celular'
								value={cellphoneNumber}
								onChange={handleChange}
							/>

							<label htmlFor='insuranceCompany'>Compañia de SGMM</label>
							<input
								type='text'
								id='insuranceCompany'
								name='insuranceCompany'
								className='input-table'
								placeholder='compáñia de SGMM'
								value={insuranceCompany}
								onChange={handleChange}
							/>

							<label htmlFor='insurancePolicyNumber'>
								Numero de políza de SGMM
							</label>
							<input
								className='input-table'
								type='text'
								id='insurancePolicyNumber'
								name='insurancePolicyNumber'
								placeholder='Numero de políza de SGMM'
								value={insurancePolicyNumber}
								onChange={handleChange}
							/>
							<label htmlFor='insurancePolicyNumber'>Status</label>
							<input
								className='input-table'
								type='text'
								id='status'
								name='status'
								placeholder='internado, consulta medica'
								value={status}
								onChange={handleChange}
							/>
							<br />
							<button type='submit' className='new-patient-btn-save cl-right'>
								Guardar
							</button>
						</form>
					</>
				)}
			</div>
		</div>
	);
};

export default NewPatient;
