import React, { useState, useContext } from "react";
import Router from "next/router";
import firebase from "../firebase";
import { FiEye } from "react-icons/fi";
import Link from "next/link";
import useValidation from "../hooks/useValidation";
import siginValidation from "../validations/signinValidation";

const INICIAL_STATE = {
	name: "",
	email: "",
	password: "",
};

const Signin = () => {
	const [error, setError] = useState(false);

	const [isShowPassword, setIsShowPassword] = useState(false);

	const { values, errors, handleSubmit, handleChange } = useValidation(
		INICIAL_STATE,
		siginValidation,
		signin
	);

	const { name, email, password, confPassword } = values;

	async function signin() {
		try {
			await firebase.registrar(name, email, password);
			// crearPerfilUsuario()
			Router.push("/register-form");
		} catch (error) {
			console.error("Hubo un error al crear el usuario ", error.message);
			setError(error.message);
		}
	}

	const showPassword = (e) => {
		e.preventDefault();
		setIsShowPassword(!isShowPassword);
	};

	return (
		<div className='signin'>
			<div className='col-xl-4 col-md-6 col-11 signin-content'>
				<h2>HOSPITAL DIVINA PROVIDENCIA</h2>
				<div className='card-signin'>
					<div>
						<h4>Crear Cuenta</h4>
					</div>
					<div className='card-body'>
						<form
							className='form-horizontal m-t-20'
							onSubmit={handleSubmit}
							noValidate
						>
							<div className='form-group'>
								<input
									className='form-control'
									type='text'
									id='name'
									placeholder='Nombre completo'
									name='name'
									value={name}
									onChange={handleChange}
								/>
							</div>
							{errors.nombre && <p className='error'>{errors.nombre}</p>}
							<div className='form-group'>
								<input
									className='form-control'
									type='email'
									id='email'
									placeholder='Email'
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
									placeholder='Password'
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
							<div className='form-group d-flex'>
								<input
									className='form-control'
									type={isShowPassword ? "text" : "password"}
									id='confPassword'
									placeholder='Confirma tu Password'
									name='confPassword'
									value={confPassword}
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
							{errors.confPassword && (
								<p className='error'>{errors.confPassword}</p>
							)}
							<div className='form-group text-center'>
								<button className='btn-signin' type='submit'>
									Crear cuenta
								</button>
							</div>
							{error && <p className='error'>{error} </p>}

							<div className='form-group'>
								<div className='float-right'>
									<Link href='/'>
										<a className='text-muted'>
											<i className='lni-lock'></i> Ya tengo una cuenta
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

export default Signin;
