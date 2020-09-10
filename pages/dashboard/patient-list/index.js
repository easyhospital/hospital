import React from "react";
import PatientDetail from "../../../src/components/PatientDetail";
import usePatients from "../../../hooks/usePatients";
import Link from "next/link";

const PatientList = () => {
	const { patients } = usePatients("name");

	return (
		<div className='patient-list container'>
			<div className='btn-new-patient-container'>
				<Link href='/dashboard/new-patient'>
					<button className='btn-table'>Agregar Paciente</button>
				</Link>
			</div>

			<div className='patients-table-header col-12'>
				<h5 className='col-3 '>Nombre</h5>
				<h5 className='col-4'>Apellidos</h5>
				<h5 className='col-3'>Status</h5>
				<h5 className='col-2'></h5>
			</div>

			{patients.map((patient) => (
				<PatientDetail key={patient.id} patient={patient} />
			))}
		</div>
	);
};

export default PatientList;
