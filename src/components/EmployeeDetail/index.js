import React from "react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import Link from "next/link";
import { es } from "date-fns/locale";
import { FaRegComment } from "react-icons/fa";

const PatientDetail = ({ patient }) => {
	const {
		id,
		name,
		email,
		userType,
		employeeType,
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
			<div className='col-12 patient-list'>
				<p className='col-3 patient-table-content'>{name}</p>
				<p className='col-4 patient-table-content'>{lastName}</p>
				<p className='col-3 patient-table-content'>{status}</p>

				<div className='col-2 text-center'>
					<button className='btn-table-more'>Ver mas</button>
				</div>
			</div>
			<hr />
		</>
	);
};

export default PatientDetail;
