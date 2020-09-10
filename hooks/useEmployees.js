import React, { useState, useEffect, useContext } from "react";
import { FirebaseContext } from "../firebase";

const useEmployees = (orderBy) => {
	const [employees, setEmployees] = useState([]);

	const { firebase } = useContext(FirebaseContext);

	useEffect(() => {
		const getEmployees = () => {
			firebase.db
				.collection("employees")
				.orderBy(orderBy, "desc")
				.onSnapshot(handleSnapshot);
		};
		getEmployees();
	}, []);

	function handleSnapshot(snapshot) {
		const getAllEmployees = snapshot.docs.map((doc) => {
			return {
				id: doc.id,
				...doc.data(),
			};
		});

		setEmployees(getAllEmployees);
	}

	return {
		employees,
	};
};

export default useEmployees;
