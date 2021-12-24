import Layout from "../components/Layout";
import { experiences, skills, projects } from "../profile";
import Link from 'next/link'

const Index = () => (
    <Layout>
        {/**Header card */}
        <header className="row" >

            <div className="col-md-12 ">
                <div className="card card-body bg-secondary bg-dark text-light">
                    <div className="row">
                        <div className="col-md-3">
                            <img width="100%" src="/foto.png" alt="" />
                        </div>
                        <div className="col-md-9">
                            <h1>Victor Manuel Fuentes</h1>
                            <h3>Frontend Developer</h3>
                            <p>Estudiante de ingenieria de software y sistemas computacionales en la Universidad de La Salle Bajio</p>
                            <a href="">Vee mi perfil de LinkedIn</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>


        {/**Second sesion */}
        <section className="row">
            <div className="col-md-4 py-2">
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
                                            <p className="col">{skill}</p>
                                        </div>
                                        <div className="progress ">
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

            <div className="col-md-8 py-2">
                {/* Experience */}
                <div className="card bg-light animate__animated animate__fadeInRight">
                    <div className="card-body">
                        <h1>Experience</h1>

                        <ul>
                            {/* List Item Experience */}
                            {experiences.map(({ title, from, to, description }, index) => (
                                <li key={index}>
                                    <h3>{title}</h3>
                                    <h5>
                                        {from} {to ? `- ${to}` : "- current"}
                                    </h5>
                                    <p>
                                        {description}
                                    </p>
                                </li>
                            ))}
                        </ul>
                        <Link href="/hireme">
                            <a className="btn btn-light">Know More</a>
                        </Link>
                    </div>
                </div>
            </div>
        </section>


        {/**Third section */}

        <section className="row">
            <div className="col-md-12">
                <div className="card card-body bg-dark">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="text-center text-light">
                                Portafolio
                            </h1>
                        </div>
                        {
                            projects.map(({ name, image, description }, i) => (
                                <div className="col-md-4 p-2" key={i}>
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

                    <div className="text-center mt-4">
                        <Link href="/portfolio">
                            <a className="btn btn-outline-light">More projects</a>
                        </Link>
                    </div>
                </div>
            </div>
        </section>

    </Layout >
)


export default Index;