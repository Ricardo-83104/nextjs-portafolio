import Link from "next/link"

const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <Link href="/">
            <a className="navbar-brand">Portfolio</a>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" 
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">

                    <li className="nav-item">
                        <Link href="/blog">
                            <a className="nav-link" >Blog</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link  href="/github">
                        <a className="nav-link">Github</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href='https://www.linkedin.com/in/ricardo-tellez-0932a372/' >
                        <a className="nav-link" target="_blank" rel="noopener noreferrer" >Linkedin</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
)
export default Navbar