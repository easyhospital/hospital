import React from "react";
import EmployeeDetail from "../../../src/components/EmployeeDetail";
import useEmployees from "../../../hooks/useEmployees";
import Link from "next/link";

const EmployeesList = () => {
	const { employees } = useEmployees("name");

	return (
		<div className='employee-list container'>
			<h3 className='title mb-5'>Directorio de empleados registrados</h3>
			<div className='employees-table-header col-12'>
				<h5 className='col-3 '>Nombre</h5>
				<h5 className='col-4'>Apellidos</h5>
				<h5 className='col-3'>Status</h5>
				<h5 className='col-2'></h5>
			</div>

			{employees.map((employee) => (
				<EmployeeDetail key={employee.idEmployee} employee={employee} />
			))}
		</div>
	);
};

export default EmployeesList;
