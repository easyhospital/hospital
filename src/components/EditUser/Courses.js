import React, { useState } from "react";
import shortid from "shortid";
import { IoIosRadioButtonOff, IoIosRadioButtonOn } from "react-icons/io";
import Error from "../Error";

const Courses = ({
	userProfile,
	setUserProfile,
	handleClickNext,
	handleClickBack,
}) => {
	const { courses } = userProfile;

	const [mainError, setMainError] = useState(false);

	const [course, setCourse] = useState({
		startDate: "",
		endDate: "",
		current: "",
		institute: "",
		courseName: "",
		link: "",
	});

	const { startDate, endDate, current, institute, courseName, link } = course;

	const handleChange = (e) => {
		setCourse({
			...course,
			[e.target.name]: e.target.value,
		});
	};

	const handleDelete = (id) => {
		const newCur = courses.filter((cur) => cur.cursoId != id);

		setUserProfile({
			...userProfile,
			cursos: newCur,
		});
	};

	const addCourse = (e) => {
		e.preventDefault();

		if (
			course.startDate === "" ||
			course.institute.trim() === "" ||
			course.courseName.trim() === ""
		) {
			setMainError(true);

			setTimeout(() => {
				setMainError(false);
			}, 5000);
			return;
		}

		course.courseId = shortid.generate();

		const newCourses = [...courses, course];

		setUserProfile({
			...userProfile,
			courses: newCourses,
		});

		setCourse({
			startDate: "",
			endDate: "",
			institute: "",
			courseName: "",
			link: "",
		});
	};

	const handleUpDateState = () => {
		if (
			course.startDate === "" &&
			course.endDate === "" &&
			course.institute.trim() === "" &&
			course.courseName.trim() === "" &&
			course.link.trim() === ""
		) {
			handleClickNext();
		} else {
			setMainError(true);

			setTimeout(() => {
				setMainError(false);
			}, 5000);
			return;
		}
	};

	const [isToggledCourses, setToggledCourses] = useState(false);

	const toggleTrueFalseCourses = (e) => {
		setToggledCourses(!isToggledCourses);
		if (!isToggledCourses) {
			setCourse({
				...course,
				current: "actualmente",
				endDate: "",
			});
		} else {
			setCourse({
				...course,
				current: "",
				endDate: "",
			});
		}
	};

	return (
		<>
			<div className='courses-form'>
				<h4>Cursos</h4>
				<div className='row'>
					<div className='col-lg-6 col-12'>
						<label htmlFor='startDate'>Inicio</label>
						<input
							type='date'
							id='startDate'
							name='startDate'
							className='input-table'
							value={startDate}
							onChange={handleChange}
						/>

						<div className='end-date'>
							{!isToggledCourses ? (
								<>
									<label htmlFor='endDate'>Fin</label>
									<input
										type='date'
										id='endDate'
										name='endDate'
										className='input-table'
										value={endDate}
										onChange={handleChange}
									/>
								</>
							) : (
								""
							)}

							{!isToggledCourses ? (
								<div className='current-container'>
									<p>Actualmente</p>
									<IoIosRadioButtonOff onClick={toggleTrueFalseCourses} />
								</div>
							) : (
								<div className='current-container'>
									<p>Actualmente</p>
									<IoIosRadioButtonOn onClick={toggleTrueFalseCourses} />
								</div>
							)}
						</div>

						<label htmlFor='institute'>Instituto</label>
						<input
							type='text'
							id='institute'
							name='institute'
							className='input-table'
							placeholder='Nombre del instituto'
							value={institute}
							onChange={handleChange}
						/>

						<label htmlFor='courseName'>Curso</label>
						<input
							type='text'
							id='courseName'
							name='courseName'
							className='input-table'
							placeholder='nombre del curso'
							value={courseName}
							onChange={handleChange}
						/>

						<label htmlFor='link'>Link del curso</label>
						<input
							type='text'
							id='link'
							name='link'
							className='input-table'
							placeholder='link del curso'
							value={link}
							onChange={handleChange}
						/>

						{mainError && (
							<Error
								className='error'
								mensaje={"Favor de agregar información en todos los campos"}
							/>
						)}

						<div className='btn-container-one-btn'>
							<button className=' btn-course' onClick={addCourse}>
								Agregar Curso
							</button>
						</div>
					</div>

					<div className='col-lg-6 col-12'>
						<div className='summary'>
							<h4>Registros generados</h4>
							{courses.length === 0 ? (
								<p>No hay ningún registro</p>
							) : (
								<div>
									{courses.map((course) => (
										<div key={course.courseId}>
											<div className='summary-period'>
												<p>
													<b>Periodo: </b>
													{course.startDate}
													{course.endDate
														? ` a ${course.endDate}`
														: ` - ${course.current}`}
												</p>
												<button
													onClick={() => handleDelete(course.courseId)}
													className='btn-course-delete'
													value={course.courseId}
												>
													Eliminar
												</button>
											</div>

											<p>
												<b>Instituto: </b> {course.institute}
											</p>
											<p>
												<b>Curso: </b> {course.courseName}
											</p>
											<p>
												<b>Link del Curso: </b> {course.link}
											</p>

											<hr />
										</div>
									))}
								</div>
							)}
						</div>
					</div>
				</div>
				<div className='btns-form-container mt2'>
					<button type='button' className='btn-back' onClick={handleClickBack}>
						Anterior
					</button>
					<button
						type='button'
						className='btn-next'
						onClick={handleUpDateState}
					>
						Siguiente
					</button>
				</div>
			</div>
		</>
	);
};

export default Courses;
