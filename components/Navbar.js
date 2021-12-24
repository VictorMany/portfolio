import Link from 'next/link'

const Navbar = ({ nav }) =>
(
    <nav className={nav ? "navbar navbar-expand-lg navbar-dark bg-dark" : "navbar navbar-expand-lg navbar-dark bg-light"}>
        <div className={"container"} >
            <Link href="/">
                <a className={nav ? "navbar-brand text-light" : "navbar-brand text-dark"} href="#">Portafolio</a>
            </Link>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav justify-content-end col">

                    <Link href="/github">
                        <a className={nav ? "nav-link text-light" : "nav-link text-dark"} >Github</a>
                    </Link>

                </div>
            </div>
        </div>
    </nav >
)

export default Navbar;


