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
        <div className={dark ? 'bg-dark' : 'bg-light'}>
            <Navbar nav={nav} />
            <main className="container py-4" style={{ width: "70%" }}>
                {children}
            </main>
            {
                footer && (<footer className="bg-dark text-light text-center">
                    <div className="container p-4">
                        <h3>Portafolio de Victor Manuel Velazquez Fuentes</h3>
                        <p>2000-{new Date().getFullYear()}</p>
                        <p>&copy;Todos los derechos reservados</p>
                    </div>
                </footer>
                )
            }
        </div>
    )
}
export default Layout;