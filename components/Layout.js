import Navbar from "./Navbar";
import { useEffect } from "react";
import router, { useRouter } from "next/router";
import NProgress from "nprogress";

const Layout = ({ children, footer = true, dark = false, nav = true }) => {

    useEffect(() => {
        const handleRouteChange = url => {
            NProgress.start();
        }
        router.events.on('routeChangeStart', handleRouteChange)
        router.events.on("routeChangeComplete", () => NProgress.done());
        return () => {
            router.events.off('routeChangeStart', handleRouteChange)
        }
    }, [])
    return (
        <div className={dark ? 'bg-dark' : ''} >
            <Navbar nav={nav} />
            <main className="container py-4 col-12 col-md-8">
                {children}
            </main>
            {
                footer && (<footer className="bg-dark text-light text-center">
                    <div className="container p-4">
                        <div className='row'>
                            <div className="col-md-7 col-12">
                                <h3>Portafolio de Víctor Manuel Velázquez Fuentes</h3>
                                <p>2000-{new Date().getFullYear()}</p>
                                <p>&copy;Todos los derechos reservados</p>

                            </div>
                            <div className="col-md-5 col-12 bg-light text-dark p-3" style={{borderRadius: '0.5rem'}}>
                                <div className="row">
                                    <h3>Contacto</h3>
                                    <p>victor.velazfuentez@gmail.com</p>
                                </div>

                            </div>
                        </div>


                    </div>
                </footer>
                )
            }
        </div>
    )
}
export default Layout;