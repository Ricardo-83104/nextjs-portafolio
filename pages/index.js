import Link from "next/link";
import Layout from "../components/Layout";
import { skills, experiences, projects } from '../profile'


console.log(experiences)

const Index = () => (
    <Layout>

        <header className="row">
            <div className="col-md-12">
                <div className="card card-body bg-secondary text-light">
                    <div className="row">
                        <div className="col-md-4">
                            <img src="ricardoTellez.jpg" className="img-fluid rounded" alt="Responsive image" />

                        </div>
                        <div className="col-md-8 ">
                            <h1>Hi, I´m Ricardo Tellez</h1>
                            <h3>FullStack Developer</h3>
                            <p>I am a full-stack developer with a passion for solving problems with technology. Universidad de los Andes alumni
                                with an under graduate degree in Biology and a Master of Science in biology. I use my experience as a science teacher
                                and great solving skills and apply them to web development and programming world.

                                Mintic web developer 2022
                            </p>

                            <p>
                                I have a strong interest in technologies as React, Node.js,
                                Next.js, Mongodb, Firebase, Git repositories, and styling with frameworks as Bootstrap, bootswatch
                                and tailwinds. I invite you to take a look at the proyects I have developed.


                            </p>
                            <div >
                                <a href="mailto:ricardoandrestellez@gmail.com">Email me!</a>
                                <img src="mintic-logo.jpg" className="img-fluid rounded float-end" alt="Responsive image" width="80" height="80" />
                            </div>


                        </div>

                    </div>
                </div>
            </div>

        </header>

        {/* Second section */}

        {/* <div className="row py-2">
            <div className="col-md-4">
                <div className="card bg-light">
                    <div className="card body">
                        

                        {
                            skills.map(({ skill, percentage, keywords }, i) => (
                                <div className="py-2 px-2" key={i}>
                                    <h5>{skill}</h5>
                                    <div className="progress">
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            style={{ width: `${percentage}%` }}></div>
                                    </div>
                                    {
                                        <h6>{keywords}</h6>
                                    }
                                </div>
                            ))

                        }

                    </div>
                </div>
            </div>
            <div className="col-md-8">
                <div className="card bg-light">
                    <div className="card body">
                        <h1>Experience</h1>
                        <ul>
                            {
                                experiences.map(({ title, from, description, to }, index) => (
                                    <li key={index}>
                                        <h3>{title}</h3>
                                        <h5>{from}-{to}</h5>
                                        <p>{description}</p>
                                    </li>
                                ))
                            }
                        </ul>
                        <Link href="/experience">
                            <a className='btn btn-light'>Know more</a>
                        </Link>

                    </div>
                </div>

            </div>
        </div> */}

        {/* Portafolio section*/}
        <div className="row">
            <div className="col-md-12 py-4">
                <div className="card card-body bg-dark">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="text-center text-light">My Proyects</h1>
                        </div>
                        {
                            projects.map(({ name, description, image, url }, i) => (
                                <div className="col-md-4 p-2" key={i}>
                                    <div className="card h-100">
                                        <div className="overflow">
                                            <img src={`/${image}`} className="card-img-top " alt="" />
                                        </div>

                                        <div className="card-body">
                                            <h3>{name}</h3>
                                            <p>{description}</p>
                                            {/* acá van los links a los proyectos */}
                                            <a href={url}>Know more</a>
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

        </div>




    </Layout>
)



export default Index;