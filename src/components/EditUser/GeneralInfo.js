import React from "react";

const GeneralInfo = ({ userProfile, setUserProfile, handleClickNext }) => {
	const {
		employeeType,
		employeePosition,
		street,
		suburb,
		postalCode,
		country,
		state,
		birthDate,
		telephone,
		cellphone,
		marriedStatus,
	} = userProfile;

	const handleChange = (e) => {
		setUserProfile({
			...userProfile,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<div className='general-info bg-white'>
			<h4>Información General</h4>
			<div className='row general-info-form-row'>
				<div className='col-md-4 col-11 m-auto pb-3'>
					<label htmlFor='street'>Calle</label>
					<input
						type='text'
						id='street'
						name='street'
						placeholder='nombre de la calle'
						value={street}
						onChange={handleChange}
					/>
				</div>
				<div className='col-md-4 col-11 m-auto pb-3'>
					<label htmlFor='suburb'>Colonia</label>
					<input
						type='text'
						id='suburb'
						name='suburb'
						placeholder='Nombre de la colonia'
						value={suburb}
						onChange={handleChange}
					/>
				</div>
				<div className='col-md-4 col-11 m-auto pb-3'>
					<label htmlFor='postalCode'>CP</label>
					<input
						type='text'
						id='postalCode'
						name='postalCode'
						placeholder='código postal'
						value={postalCode}
						onChange={handleChange}
					/>
				</div>
			</div>

			<div className='row general-info-form-row'>
				<div className='col-md-4 col-11 m-auto pb-3'>
					<label htmlFor='country'>País</label>
					<select
						id='country'
						className='form-control'
						name='country'
						id='country'
						value={country}
						onChange={handleChange}
					>
						<option defaultValue>Seleccione...</option>
						<option value='MX'>México</option>
						<option value='USA'>USA</option>
						<option value='Extranjero'>Otro</option>
					</select>
				</div>
				<div className='col-md-4 col-11 m-auto pb-3'>
					<label htmlFor='state'>Estado</label>
					<select
						id='state'
						className='form-control'
						name='state'
						id='state'
						value={state}
						onChange={handleChange}
					>
						<option defaultValue>Seleccione...</option>
						<option value='DIF'>Distrito Federal</option>
						<option value='AGS'>Aguascalientes</option>
						<option value='BCN'>Baja California</option>
						<option value='BCS'>Baja California Sur</option>
						<option value='CAM'>Campeche</option>
						<option value='CHP'>Chiapas</option>
						<option value='CHI'>Chihuahua</option>
						<option value='COA'>Coahuila</option>
						<option value='COL'>Colima</option>
						<option value='DUR'>Durango</option>
						<option value='GTO'>Guanajuato</option>
						<option value='GRO'>Guerrero</option>
						<option value='HGO'>Hidalgo</option>
						<option value='JAL'>Jalisco</option>
						<option value='MEX'>México</option>
						<option value='MIC'>Michoacán</option>
						<option value='MOR'>Morelos</option>
						<option value='NAY'>Nayarit</option>
						<option value='NLE'>Nuevo León</option>
						<option value='OAX'>Oaxaca</option>
						<option value='PUE'>Puebla</option>
						<option value='QRO'>Querétaro</option>
						<option value='ROO'>Quintana Roo</option>
						<option value='SLP'>San Luis Potosi;</option>
						<option value='SIN'>Sinaloa</option>
						<option value='SON'>Sonora</option>
						<option value='TAB'>Tabasco</option>
						<option value='TAM'>Tamaulipas</option>
						<option value='TLX'>Tlaxcala</option>
						<option value='VER'>Veracruz</option>
						<option value='YUC'>Yucatan</option>
						<option value='ZAC'>Zacatecas</option>
						<option value='AL'>Alabama</option>
						<option value='AK'>Alaska</option>
						<option value='AZ'>Arizona</option>
						<option value='AR'>Arkansas</option>
						<option value='CA'>California</option>
						<option value='CO'>Colorado</option>
						<option value='CT'>Connecticut</option>
						<option value='DE'>Delaware</option>
						<option value='DC'>District Of Columbia</option>
						<option value='FL'>Florida</option>
						<option value='GA'>Georgia</option>
						<option value='HI'>Hawaii</option>
						<option value='ID'>Idaho</option>
						<option value='IL'>Illinois</option>
						<option value='IN'>Indiana</option>
						<option value='IA'>Iowa</option>
						<option value='KS'>Kansas</option>
						<option value='KY'>Kentucky</option>
						<option value='LA'>Louisiana</option>
						<option value='ME'>Maine</option>
						<option value='MD'>Maryland</option>
						<option value='MA'>Massachusetts</option>
						<option value='MI'>Michigan</option>
						<option value='MN'>Minnesota</option>
						<option value='MS'>Mississippi</option>
						<option value='MO'>Missouri</option>
						<option value='MT'>Montana</option>
						<option value='NE'>Nebraska</option>
						<option value='NV'>Nevada</option>
						<option value='NH'>New Hampshire</option>
						<option value='NJ'>New Jersey</option>
						<option value='NM'>New Mexico</option>
						<option value='NY'>New York</option>
						<option value='NC'>North Carolina</option>
						<option value='ND'>North Dakota</option>
						<option value='OH'>Ohio</option>
						<option value='OK'>Oklahoma</option>
						<option value='OR'>Oregon</option>
						<option value='PA'>Pennsylvania</option>
						<option value='RI'>Rhode Island</option>
						<option value='SC'>South Carolina</option>
						<option value='SD'>South Dakota</option>
						<option value='TN'>Tennessee</option>
						<option value='TX'>Texas</option>
						<option value='UT'>Utah</option>
						<option value='VT'>Vermont</option>
						<option value='VA'>Virginia</option>
						<option value='WA'>Washington</option>
						<option value='WV'>West Virginia</option>
						<option value='WI'>Wisconsin</option>
						<option value='WY'>Wyoming</option>
						<option value='Otros'>Otros</option>
					</select>
				</div>
				<div className='col-md-4 col-11 m-auto pb-3'>
					<label htmlFor='birthDate' className='w-fechaNac'>
						Fecha Nacimiento
					</label>
					<input
						type='date'
						id='birthDate'
						name='birthDate'
						value={birthDate}
						onChange={handleChange}
					/>
				</div>
			</div>

			<div className='row general-info-form-row'>
				<div className='col-md-4 col-11 m-auto pb-3'>
					<label htmlFor='telephone' className='w-telephone'>
						Tel. Casa
					</label>
					<input
						type='text'
						id='telephone'
						name='telephone'
						placeholder='tel de casa del usuario'
						value={telephone}
						onChange={handleChange}
					/>
				</div>
				<div className='col-md-4 col-11 m-auto pb-3'>
					<label htmlFor='cellphone'>Celular</label>
					<input
						type='text'
						id='cellphone'
						name='cellphone'
						placeholder='tel celular del usuario'
						value={cellphone}
						onChange={handleChange}
					/>
				</div>
				<div className='col-md-4 col-11 m-auto pb-3'>
					<label htmlFor='marriedStatus' className='w-estadoCivil'>
						Estado civil
					</label>
					<select
						id='marriedStatus'
						className='form-control'
						name='marriedStatus'
						value={marriedStatus}
						onChange={handleChange}
					>
						<option defaultValue>Selecciona...</option>
						<option value='soltero'>Solter@</option>
						<option value='Union Libre'>Union libre</option>
						<option value='Casado'>Casad@</option>
						<option value='Divorciado'>Divorciad@</option>
						<option value='Separado'>Separad@</option>
						<option value='Otro'>Otro</option>
					</select>
				</div>
			</div>

			<div className='row general-info-form-row'>
				<div className='col-md-6 col-11 m-auto pb-3'>
					<label htmlFor='employeePosition'>Puesto</label>
					<input
						type='text'
						id='employeePosition'
						name='employeePosition'
						placeholder='puesto'
						value={employeePosition}
						onChange={handleChange}
					/>
				</div>
				<div className='col-md-6 col-11 m-auto pb-3'>
					<label htmlFor='marriedStatus' className='w-estadoCivil'>
						Tipo de contratación
					</label>
					<select
						id='employeeType'
						className='form-control'
						name='employeeType'
						value={employeeType}
						onChange={handleChange}
					>
						<option defaultValue>Selecciona...</option>
						<option value='interno'>Interno</option>
						<option value='externo'>Externo</option>
					</select>
				</div>
			</div>
			<div className='general-info-container-btn-next'>
				<button
					type='button'
					className='general-info-btn-next'
					onClick={handleClickNext}
				>
					Siguiente
				</button>
			</div>
		</div>
	);
};

export default GeneralInfo;
