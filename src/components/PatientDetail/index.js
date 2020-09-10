import React from "react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import Link from "next/link";
import { es } from "date-fns/locale";
import { FaRegComment } from "react-icons/fa";

const PatientDetail = ({ patient }) => {
	const {
		id,
		id_Patient,
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
		contactFamily,
		insuranceCompany,
		insurancePolicyNumber,
		clinicHistory,
		status,
	} = patient;

	return (
		<>
			<div className='col-12 patient-list'>
				<p className='col-3 patient-table-content'>
					{name} {middleName}
				</p>
				<p className='col-4 patient-table-content'>{lastName}</p>
				<p className='col-3 patient-table-content'>{status}</p>
				<Link href='/dashboard/patients/[id]' as={`/dashboard/patients/${id}`}>
					<div className='col-2 text-center'>
						<button className='btn-table-more'>Ver mas</button>
					</div>
				</Link>
			</div>
			<hr className='hr' />
		</>
	);
};

export default PatientDetail;
