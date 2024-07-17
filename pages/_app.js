import 'bootswatch/dist/morph/bootstrap.min.css'
import '../global.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({
    Component,
    pageProps
}) {
    return <Component {
        ...pageProps
    } />

}


export default MyApp;