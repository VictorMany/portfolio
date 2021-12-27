import Layout from "../components/Layout";
import Error from "./_error";

const Github = ({ user, statusCode }) => {
    console.log(user)
    if (statusCode) {
        return <Error statusCode={statusCode}></Error>
    }
    return (
        <Layout footer={false} dark={true} nav={false}>
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <div className="card card-body text-center">
                        <h3>{user.name}</h3>
                        <img src={user.avatar_url} />
                        <p>{user.bio}</p>
                        <a href={user.html_url} target="_blank" className="btn btn-outline-secondary">Go to Github</a>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export async function getServerSideProps() {
    const res = await fetch('https://api.github.com/users/VictorMany')
    const data = await res.json();

    const statusCode = res.status > 200 ? res.status : false;

    console.log(data)
    return {
        props: {
            user: data,
            statusCode
        }
    }
}
export default Github;