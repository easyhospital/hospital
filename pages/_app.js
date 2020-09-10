import React from "react";
import firebase, { FirebaseContext } from "../firebase";
import useAutenticacion from "../hooks/useAutenticacion";
import useProfile from "../hooks/useProfile";
import Head from "next/head";
import Layout from "../src/components/Layout";

import "../src/scss/styles.scss";

const MyApp = (props) => {
	const usuario = useAutenticacion();

	const { Component, pageProps, router } = props;

	return (
		<>
			<Head>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1, shrink-to-fit=no'
				/>
				<title>Hospital Divina Providencia</title>
				<meta
					name='description'
					content='Hospital Divina providencia, La Barca, Jalisco'
				/>
				<meta
					name='keywords'
					content='hospital divina providencia, hospital la barca jalisco'
				/>
				<meta name='robots' content='index' />
				<link
					rel='stylesheet'
					href='https://cdn.linearicons.com/free/1.0.0/icon-font.min.css'
				></link>
				<link
					rel='stylesheet'
					href='https://unpkg.com/react-table@6.8.3/react-table.css'
				/>
				<link
					rel='stylesheet'
					href='https://unpkg.com/react-quill@1.3.3/dist/quill.snow.css'
				/>
			</Head>
			<FirebaseContext.Provider
				value={{
					firebase,
					usuario,
				}}
			>
				{router.pathname.startsWith("/dashboard") ? (
					<>
						<Layout />
						<div className='container__wrap'>
							<Component {...pageProps} />
						</div>
					</>
				) : (
					<Component {...pageProps} />
				)}
			</FirebaseContext.Provider>
		</>
	);
};

export default MyApp;
