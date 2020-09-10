import React, { useContext } from "react";
import Register from "../src/components/Register";
import { FirebaseContext } from "../firebase";
import Router from "next/router";
import useProfile from "../hooks/useProfile";

const RegisterForm = () => {
	const { usuario } = useContext(FirebaseContext);

	const perfilUsuario = useProfile(usuario);

	if (usuario == null) {
		Router.push("/");
	}

	if (perfilUsuario != null) {
		Router.push("/dashboard/patient-list");
	}

	return <Register />;
};

export default RegisterForm;
