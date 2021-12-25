import Layout from "../components/Layout";
import { experiences, skills, projects, cursos, tecnologies } from "../profile";
import Link from 'next/link'
import Image from 'next/image'


const Index = () => (
    <Layout>
        {/**Header card */}
        <header className="row" >
            <div className="col-md-12 col-12">
                <div className="card card-body bg-secondary bg-dark text-light">
                    <div className="row">
                        <div className="col-md-3">
                            <img width="100%" src="/foto.png" alt="" />
                        </div>
                        <div className="col-md-9">
                            <h1>Victor Manuel Fuentes</h1>
                            <h3>Frontend Developer</h3>
                            <p style={{ color: '#928F8C' }}>Estudiante de Ingeniería en Software y Sistemas Computacionales en la Universidad de La Salle Bajío</p>
                            <a href="https://www.linkedin.com/in/victor-manuel-velazquez-fuentes-bab088156/" target='_blank'>Vee mi perfil de LinkedIn</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>


        {/**Second sesion */}
        <section className="row">
            <div className="col-md-4 py-2 col-12">
                <div className="card bg-light animate__animated animate__fadeInLeft">
                    <div className="card-body">
                        <h1>Skills</h1>

                        {/* Skill Progress  */}
                        {
                            console.log(skills),
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
                        <h3>Experiencia</h3>

                        <ul>
                            {/* List Item Experience */}
                            {experiences.map(({ title, from, to, description }, index) => (
                                <li key={index}>
                                    <h4>{title}</h4>
                                    <h5>
                                        {from} {to ? `- ${to}` : "- current"}
                                    </h5>
                                    <p>
                                        {description}
                                    </p>
                                </li>
                            ))}
                        </ul>

                        <h3>Idiomas</h3>

                        <ul>

                            <li>
                                <h5>Español</h5>
                                <p>
                                    Competencia bilingüe o nativa
                                </p>
                            </li>
                            <li>
                                <h5>Inglés</h5>
                                <p>
                                    Competencia básica limitada
                                </p>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div className="col-md-12 pb-2 col-12">
                {/* Experience */}
                <div className="card bg-light animate__animated animate__fadeInRight h-100">
                    <div className="card-body">
                        <h1>Otras tecnologías</h1>

                        <div className="row">

                            {
                                console.log(skills),
                                tecnologies.map(({ skill, percentage, image }, i) => (
                                    <div className="col-md-4">
                                        <div className="py-3" key={i} >

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
                <div className="card card-body bg-dark">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="text-center text-light">
                                Portafolio
                            </h1>
                        </div>
                        {
                            projects.map(({ name, image, description }, i) => (
                                <div className="col-md-4 p-2" key={i} style={{ maxHeight: 490 }}>
                                    <div className="card h-100">
                                        <div className="overflow">
                                            <img src={`/${image}`} alt="" className="card-img-top" />
                                        </div>
                                        <div className="card-body">
                                            <h3>{name}</h3>
                                            <p>{description}</p>
                                            <a href="#!">Know more</a>
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
                <div className="card card-body bg-dark">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="text-center text-light">
                                Cursos
                            </h1>
                        </div>
                        {
                            cursos.map(({ name, image, description, link }, i) => (
                                <div className="col-md-4 p-2" key={i}>
                                    <div className="card h-100">
                                        <div className="card-body">
                                            <h3>{name}</h3>
                                            <p>{description}</p>

                                            <div className='mt-5'>
                                                <a href={link} className='position-absolute start-0 bottom-0 m-2 btn btn-secondary-outline btn-sm' target="_blank">Ver certificado</a>
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

    </Layout >
)


export default Index;