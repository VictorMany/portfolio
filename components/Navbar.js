import Link from 'next/link'

const Navbar = ({ nav }) =>
(
    <nav className={nav ? "navbar navbar-expand-lg navbar-dark bg-dark" : "navbar navbar-expand-lg navbar-dark bg-light"}>
        <div className={"container"} >
            <Link href="/">
                <a className={nav ? "navbar-brand text-light" : "navbar-brand text-dark"} href="#">Portafolio</a>
            </Link>
            <Link href="/github">
                <a className={nav ? "nav-link text-light" : "nav-link text-dark"} >Github</a>
            </Link>
        </div>
    </nav>
)

export default Navbar;


