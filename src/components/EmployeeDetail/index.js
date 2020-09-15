import React from "react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import Link from "next/link";
import { es } from "date-fns/locale";
import { FaRegComment } from "react-icons/fa";

const EmployeeDetail = ({ employee }) => {
	const {
		idEmployee,
		name,
		email,
		userType,
		employeeType,
		employeePosition,
		street,
		suburb,
		postalCode,
		state,
		country,
		birthDate,
		telephone,
		cellphone,
		marriedStatus,
		workExperience,
		studies,
		courses,
		certifications,
		skills,
		languages,
		personalReferences,
		workReference,
	} = employee;

	return (
		<>
			<div className='col-12 employee-list'>
				<p className='col-3 employee-table-content'>{name}</p>
				<p className='col-4 employee-table-content'>{cellphone}</p>
				<p className='col-3 employee-table-content'>{employeePosition}</p>

				<div className='col-2 text-center'>
					<button className='btn-table-more'>Ver mas</button>
				</div>
			</div>
			<hr />
		</>
	);
};

export default EmployeeDetail;
