import Layout from "../components/Layout";

const _error = ({ statusCode }) => {
    return (
        <Layout>
            <p>Ha ocurrido un error al cragar el sitio</p>
            <p>Codigo de error {statusCode}</p>
        </Layout>
    )
}

export default _error;