import React, { useEffect, useContext, useState } from "react";
import { useRouter } from "next/router";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { es } from "date-fns/locale";
import { FirebaseContext } from "../../../firebase";

const Patient = () => {
	// state del componente
	const [patient, setPatient] = useState({});
	const [error, setError] = useState(false);
	// const [comentario, guardarComentario ] = useState({});
	const [queryDB, setQueryDB] = useState(true);

	// Routing para obtener el id actual
	const router = useRouter();
	const {
		query: { id },
	} = router;

	// context de firebase
	const { firebase, usuario } = useContext(FirebaseContext);

	useEffect(() => {
		if (id && queryDB) {
			const getPatients = async () => {
				const patientQuery = await firebase.db.collection("patients").doc(id);
				const patient = await patientQuery.get();
				if (patient.exists) {
					setPatient(patient.data());
					setQueryDB(false);
				} else {
					setError(true);
					setQueryDB(false);
				}
			};
			getPatients();
		}
	}, [id]);

	if (Object.keys(patient).length === 0 && !error) return "Cargando...";

	const { name, middleName, lastName, sex } = patient;

	// Administrar y validar los votos
	// const votarBlog = () => {
	//     if(!usuario) {
	//         return router.push('/')
	//     }

	//     // obtener y sumar un nuevo voto
	//     const nuevoTotal = votos + 1;

	//     // Verificar si el usuario actual ha votado
	//     if(haVotado.includes(usuario.uid) ) return;

	//     // guardar el ID del usuario que ha votado
	//     const nuevoHaVotado = [...haVotado, usuario.uid];

	//     //  Actualizar en la BD
	//     firebase.db.collection('blogs').doc(id).update({
	//         votos: nuevoTotal,
	//         haVotado: nuevoHaVotado
	//     })

	//     // Actualizar el state
	//     guardarBlog({
	//         ...blog,
	//         votos: nuevoTotal
	//     })

	//     guardarConsultarDB(true); // hay un voto, por lo tanto consultar a la BD
	// }

	// // Funciones para crear comentarios
	// const comentarioChange = e => {
	//     guardarComentario({
	//         ...comentario,
	//         [e.target.name] : e.target.value
	//     })
	// }

	// // Identifica si el comentario es del creador del producto
	// const esCreador = id => {
	//     if(creador.id == id) {
	//         return true;
	//     }
	// }

	// const agregarComentario = e => {
	//     e.preventDefault();

	//     if(!usuario) {
	//         return router.push('/')
	//     }

	//     // información extra al comentario
	//     comentario.usuarioId = usuario.uid;
	//     comentario.usuarioNombre = usuario.displayName;

	//     // Tomar copia de comentarios y agregarlos al arreglo
	//     const nuevosComentarios = [...comentarios, comentario];

	//     // Actualizar la BD
	//     firebase.db.collection('blogs').doc(id).update({
	//         comentarios: nuevosComentarios
	//     })

	//     // Actualizar el state
	//     guardarBlog({
	//         ...blog,
	//         comentarios: nuevosComentarios
	//     })

	//     guardarConsultarDB(true); // hay un COMENTARIO, por lo tanto consultar a la BD
	// }

	// // función que revisa que el creador del producto sea el mismo que esta autenticado
	// const puedeBorrar = () => {
	//     if(!usuario) return false;

	//     if(creador.id === usuario.uid) {
	//         return true
	//     }
	// }

	// // elimina un producto de la bd
	// const eliminarBlog = async () => {

	//     if(!usuario) {
	//         return router.push('/')
	//     }

	//     if(creador.id !== usuario.uid) {
	//         return router.push('/dashboard/blog-list')
	//     }

	//     try {
	//         await firebase.db.collection('blogs').doc(id).delete();
	//         router.push('/dashboard/blog-list')
	//     } catch (error) {
	//         console.log(error);
	//     }
	// }

	return (
		<>
			{error ? (
				<p>Error de usuario</p>
			) : (
				<div className='container patient'>
					<div>
						<div className='patient-container-header'>
							<h2 className='patient-title'>
								Expediente: {name} {middleName} {lastName}
							</h2>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Patient;
