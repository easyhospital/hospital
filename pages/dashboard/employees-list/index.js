import React from "react";
import EmployeeDetail from "../../../src/components/PatientDetail";
import useEmployees from "../../../hooks/useEmployees";
import Link from "next/link";

const EmployeesList = () => {
	const { employees } = useEmployees("name");

	return (
		<div className='employee-list container'>
			<div className='btn-new-employee-container'>
				<Link href='/dashboard/new-patient'>
					<button className='btn-table'>Agregar Empleado</button>
				</Link>
			</div>

			<div className='employees-table-header col-12'>
				<h5 className='col-3 '>Nombre</h5>
				<h5 className='col-4'>Apellidos</h5>
				<h5 className='col-3'>Status</h5>
				<h5 className='col-2'></h5>
			</div>

			{employees.map((employee) => (
				<EmployeeDetail key={employee.id} employee={employee} />
			))}
		</div>
	);
};

export default EmployeesList;
