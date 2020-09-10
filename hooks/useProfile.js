import React, { useEffect, useState } from "react";
import firebase from "../firebase";

const useProfile = (usuario) => {
	const [userProfile, setUserProfile] = useState(null);

	useEffect(() => {
		const userDB = () =>
			firebase.db
				.collection("employees")
				.where(
					"email",
					"==",
					usuario != null && usuario.email != null ? usuario.email : ""
				)
				.get()
				.then((response) => {
					response.forEach((doc) => {
						setUserProfile(doc.data());
					});
				});

		userDB();
	}, []);

	return userProfile;
};
export default useProfile;
