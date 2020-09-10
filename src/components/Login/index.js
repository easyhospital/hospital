import React, { useState } from "react";
import Router from "next/router";
import firebase from "../../../firebase";
import Link from "next/link";
import { FiEye } from "react-icons/fi";
import useValidation from "../../../hooks/useValidation";
import loginValidation from "../../../validations/loginValidation";

const INICIAL_STATE = {
	email: "",
	password: "",
};

const Login = () => {
	const [error, setError] = useState(false);

	const [isShowPassword, setIsShowPassword] = useState(false);

	const { values, errors, handleSubmit, handleChange } = useValidation(
		INICIAL_STATE,
		loginValidation,
		login
	);

	const { email, password } = values;

	async function login() {
		try {
			await firebase.login(email, password);
			Router.push("/register-form");
		} catch (error) {
			console.error("Hubo un error al autenticar el usuario ", error.message);
			setError(error.message);
		}
	}

	const showPassword = (e) => {
		e.preventDefault();
		setIsShowPassword(!isShowPassword);
	};

	return (
		<div className='login'>
			<div className='col-xl-4 col-md-6 col-11 login-content'>
				<h2>HOSPITAL DIVINA PROVIDENCIA</h2>
				<div className='card-login'>
					<div className=''>
						<h4 className=''>Iniciar Sesión</h4>
					</div>
					<div className='card-body'>
						<form
							className='form-horizontal'
							onSubmit={handleSubmit}
							noValidate
						>
							<div className='form-group'>
								<input
									className='form-control'
									type='email'
									id='email'
									placeholder='Tu Email'
									name='email'
									value={email}
									onChange={handleChange}
								/>
							</div>
							{errors.email && <p className='error'>{errors.email}</p>}
							<div className='form-group d-flex'>
								<input
									className='form-control'
									type={isShowPassword ? "text" : "password"}
									id='password'
									placeholder='Tu Password'
									name='password'
									value={password}
									onChange={handleChange}
								/>
								<button
									type='button'
									className='btn-showPassword'
									onClick={(e) => showPassword(e)}
								>
									<FiEye />
								</button>
							</div>
							{errors.password && <p className='error'>{errors.password}</p>}
							<div className='form-group text-center mt-4'>
								<button className='btn-login' type='submit'>
									Iniciar sesión
								</button>
							</div>
							{error && <p className='error'>{error} </p>}
							<div className='form-group'>
								<div className='float-right'>
									<Link href='/signup'>
										<a className='text-muted'>
											<i className='lni-user'></i> Obtener una cuenta
										</a>
									</Link>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
