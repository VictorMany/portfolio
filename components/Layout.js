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
            <main className="container py-2 col-12 col-md-8">
                {children}
            </main>
            {
                footer && (<footer className="bg-dark text-light text-center">
                    <div className="container p-4">
                        <div className='row'>
                            <div className="col-md-7 col-12">
                                <h3>Víctor's personal website</h3>
                                <p>2000-{new Date().getFullYear()}</p>
                                <p>&copy;All rights reserved</p>

                            </div>
                            <div className="col-md-5 col-12 bg-light text-dark p-3" style={{ borderRadius: '0.5rem' }}>
                                <div className="row">
                                    <h3>Contact me</h3>
                                    
                                    <a href="mailto:victor.velazfuentez@gmail.com?subject=I saw your professional profile" target={'_blank'}>
                                        <div className="col d-flex justify-content-center align-items-center">
                                            <img src="/mail.svg" alt='Mail' height={40}/>
                                            victor.velazfuentez@gmail.com
                                        </div>
                                        </a>
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