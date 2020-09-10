import React, { useState, useEffect, useContext } from "react";
import { FirebaseContext } from "../firebase";

const usePatients = (orderBy) => {
	const [patients, setPatients] = useState([]);

	const { firebase } = useContext(FirebaseContext);

	useEffect(() => {
		const getPatients = () => {
			firebase.db
				.collection("patients")
				.orderBy(orderBy, "desc")
				.onSnapshot(manejarSnapshot);
		};
		getPatients();
	}, []);

	function manejarSnapshot(snapshot) {
		const getAllPatients = snapshot.docs.map((doc) => {
			return {
				id: doc.id,
				...doc.data(),
			};
		});

		setPatients(getAllPatients);
	}

	return {
		patients,
	};
};

export default usePatients;
