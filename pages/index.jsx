import Layout from "../components/Layout";
import { experiences, skills, projects, cursos, tecnologies, ENexperiences, ENprojects, ENcursos, languages, ENlanguages } from "../profile";
import { useState } from 'react'
import { saveAs } from "file-saver";


const saveFile = (ruta) => {
    saveAs(
        ruta,
        ruta.split('/')[1]
    );
};


const Index = () => {

    const [englishMode, setEnglishMode] = useState(false)
    const [Experiences, setExperiences] = useState(ENexperiences);
    const [Projects, setProjects] = useState(ENprojects);
    const [Courses, setCourses] = useState(ENcursos);
    const [Languages, setLanguages] = useState(ENlanguages);

    const changeMode = () => {
        setEnglishMode(!englishMode)

        if (!englishMode) {
            setExperiences(ENexperiences)
            setProjects(ENprojects)
            setCourses(ENcursos)
            setLanguages(ENlanguages)
        } else {
            setExperiences(experiences)
            setProjects(projects)
            setCourses(cursos)
            setLanguages(languages)
        }

    }


    return (
        <Layout>
            {/**Header card */}
            < header className="row" >
                <div className="col-md-12 col-12">
                    <div className="form-check form-switch d-flex justify-content-end m-1 mb-2 ">
                        <input className="form-check-input" type="checkbox" onClick={changeMode} role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label ps-1"><strong>EN/SP</strong></label>
                    </div>
                    <div className="card card-body bg-secondary bg-black text-light">
                        <div className="row">
                            <div className="col-md-4 p-3 col-12 d-flex justify-content-center align-items-center">
                                <div className="image-blurred-edge"></div>
                            </div>
                            <div className="col-md-8 col-12 ">
                                <h1>Victor Manuel Fuentes</h1>
                                <h3>Frontend Developer</h3>
                                <p style={{ color: '#928F8C' }}>{englishMode ? 'Soy ingeniero de software con preferencia en desarrollo frontend.' + ' Me gusta participar en todas las etapas de la creación de software de calidad y aprender de aquellos con más experiencia que pueden aportar algo a mi propio desarrollo profesional y personal.' :
                                "I'm a software engineer with a preference in frontend development." + " I like to participate in all stages of the creation of quality software and learn from those with more experience who can contribute something to my own professional and personal development."}</p>
                                <a style={{ color: '#5A97E2' }} href="https://www.linkedin.com/in/victor-manuel-velazquez-fuentes-bab088156/" target='_blank'>{englishMode ? 'Vee mi perfil de LinkedIn' : 'linkedin profile'}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </header >


            {/**Second sesion */}
            < section className="row" >
                <div className="col-md-4 py-2 col-12">
                    <div className="card bg-light animate__animated animate__fadeInLeft h-100">
                        <div className="card-body">
                            <h1>Skills</h1>

                            {/* Skill Progress  */}
                            {
                                //console.log(skills),
                                skills.map(({ skill, percentage, image }, i) => (

                                    <div className="py-3" key={i} >

                                        <div className="col-12">
                                            <div className="row mb-1" >
                                                <img src={`/${image}`} alt={skill} height={40} className="col-3" />
                                                <p className="col mt-2">{skill}</p>
                                            </div>
                                            <div className="progress" style={{ height: 10 }}>
                                                <div
                                                    className="progress-bar"
                                                    role="progressbar"
                                                    style={{ width: `${percentage}%` }}
                                                    aria-valuenow="50"
                                                    aria-valuemin="0"
                                                    aria-valuemax="100"
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>

                <div className="col-md-8 py-2 col-12 pad">
                    {/* Experience */}
                    <div className="card bg-light animate__animated animate__fadeInRight h-100" >
                        <div className="card-body">
                            {englishMode ? <h1>Experiencia</h1> : <h1>Work Experience</h1>}
                            <ul className="pt-3">
                                {/* List Item Experience */}
                                {
                                    Experiences.map(({ title, from, to, description, where }, index) => (
                                        <li key={index}>
                                            <h4 className="text-red">{title}</h4>
                                            <h5>
                                                {from} {to ? `- ${to}` : `${!englishMode ? "- I currently work here" : " - Actualmente trabajo aquí" }`}
                                            </h5>
                                            <h6>
                                                {where}
                                            </h6>
                                            <p>
                                                {description}
                                            </p>
                                        </li>
                                    ))
                                }
                            </ul>

                            {englishMode ? <h3>Idiomas</h3> : <h3>Languages</h3>}
                            <ul>
                                {
                                    Languages.map(({ language, exp }, index) => (
                                        <li key={index}>
                                            <h5>{language}</h5>
                                            <p>
                                                {exp}
                                            </p>
                                        </li>
                                    ))
                                }

                            </ul>
                        </div>
                    </div>
                </div>
            </section >

            <section>
                <div className="col-md-12 pb-2 col-12">
                    {/* Experience */}
                    <div className="card bg-light animate__animated animate__fadeInRight h-100">
                        <div className="card-body">
                            {englishMode ? <h1>Otras tecnologías</h1> : <h1>Other technologies</h1>}
                            <div className="row">

                                {
                                    tecnologies.map(({ skill, percentage, image }, i) => (
                                        <div className="col-md-4" key={i}>
                                            <div className="py-3"  >

                                                <div className="col-12">
                                                    <div className="row mb-1" >
                                                        <div className="row">
                                                            <div className='col-3' style={{ height: '2.5rem' }}>
                                                                <img
                                                                    src={image}
                                                                    alt={skill}
                                                                    height='100%'
                                                                />

                                                            </div>
                                                            <p className="col mt-2">{skill}</p>
                                                        </div>



                                                    </div>
                                                    <div className="progress" style={{ height: 10 }}>
                                                        <div
                                                            className="progress-bar"
                                                            role="progressbar"
                                                            style={{ width: `${percentage}%` }}
                                                            aria-valuenow="50"
                                                            aria-valuemin="0"
                                                            aria-valuemax="100"
                                                        ></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                            </div>


                        </div>
                    </div>
                </div>
            </section>

            {/**Third section */}

            <section className="row">
                <div className="col-md-12 col-12">
                    <div className="card card-body bg-black">
                        <div className="row">
                            <div className="col-md-12">
                                {englishMode ? <h1 className="text-center text-light">
                                    Portafolio
                                </h1> : <h1 className="text-center text-light">
                                    Portfolio
                                </h1>}
                            </div>
                            {
                                Projects.map(({ name, image, description, link }, i) => (
                                    <div className="col-md-4 p-2 height-card" key={i}>
                                        <div className="card h-100">
                                            <div className="overflow">
                                                {image ? (
                                                    <img src={`/${image}`} alt="..." className="card-img-top" />) : <></>
                                                }
                                            </div>
                                            <div className="card-body">
                                                <h3>{name}</h3>
                                                <p className="pb-2">{description}</p>
                                                <a href={link} target='_blank' className='position-absolute start-0 bottom-0 m-2 btn bg-white btn-sm pt-1'>{englishMode ? 'Saber más' : 'Know more'}</a>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>


            {/**Fourth section */}

            <section className="row mt-3">
                <div className="col-md-12 col-12">
                    <div className="card card-body bg-black">
                        <div className="row">
                            <div className="col-md-12">
                                {englishMode ? <h1 className="text-center text-light">
                                    Cursos
                                </h1> : <h1 className="text-center text-light">
                                    Courses
                                </h1>}
                            </div>
                            {
                                Courses.map(({ name, image, description, link }, i) => (
                                    <div className="col-md-4 p-2" key={i}>
                                        <div className="card h-100">
                                            <div className="card-body">
                                                <h3>{name}</h3>
                                                <p>{description}</p>

                                                <div className='mt-5'>
                                                    <a href={link} className='position-absolute start-0 bottom-0 m-2 btn bg-white btn-sm pt-1' target="_blank">{englishMode ? 'Ver certificado' : 'Proof of completion'}</a>
                                                    <img className='position-absolute bottom-0 end-0 m-1' style={{ height: 50 }} src={`/${image}`} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>

            <div className="bg-black p-2 d-grid d-md-flex justify-content-center mt-2" >
                {englishMode ? <button className="btn bg-primary shadow-none text-white" onClick={() => saveFile('cv/CV-SP-Victor_Manuel_Velázquez_Fuentes.pdf')}>Descargar CV en PDF</button> : <button className="btn bg-primary shadow-none text-white" onClick={() => saveFile('cv/CV-EN-Victor_Manuel_Velázquez_Fuentes.pdf')}>Download CV</button>}
            </div>

        </Layout >
    )

}

export default Index;