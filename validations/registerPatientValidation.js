export default function registerPatientValidation(values) {
	let errores = {};

	if (!values.name) {
		errores.name = "El nombre es obligatorio";
	}
	if (!values.lastName) {
		errores.lastName = "Los apellidos son obligatorios";
	}
	if (!values.sex) {
		errores.sex = "Indique el genero del paciente";
	}
	if (!values.idType) {
		errores.idType = "Indique el tipo de identificación del paciente";
	}
	if (!values.idReference) {
		errores.idReference =
			"Indique el número de referencia de la identificación del paciente";
	}
	if (!values.emergenciesadmission) {
		errores.emergenciesadmission = "seleccione si ingreso por urgencias o no";
	}
	if (!values.status) {
		errores.status = "seleccione el status del paciente";
	}

	return errores;
}
