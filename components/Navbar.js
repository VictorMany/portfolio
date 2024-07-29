import Link from 'next/link'

const Navbar = ({ nav }) =>
(
    <nav className={nav ? "navbar navbar-expand-lg navbar-dark gradient" : "navbar navbar-expand-lg navbar-dark gradient"}>
        <div className={"container"} >
            <Link href="/">
                <a className={nav ? "navbar-brand text-light" : "navbar-brand text-light"} href="#">Portafolio</a>
            </Link>
            <Link href="/github">
                <a className={nav ? "nav-link text-light" : "nav-link text-light"} >Github</a>
            </Link>
        </div>
    </nav>
)

export default Navbar;


