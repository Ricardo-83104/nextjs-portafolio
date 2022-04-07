import Layout from "../components/Layout"
import Error from './_error'


const Github = ({user}) => { 
return (
    <Layout footer={false} dark>
        <div className="row">
            <div className="col-md-4 offset-md-4">
                <div className="card card-body text-center">
                    <h1>{user.name}</h1>
                    <img src={user.avatar_url}  alt=""/>
                    <p>{user.bio}</p>
                    <a href={user.blog} target="_blank" className="btn btn-outline-secondary my-2">My Blog</a>

                    <a href={user.html_url} target="_blank" className="btn btn-outline-scondary">Go to Github</a>
                </div>
            </div>
        </div>    
    </Layout>
)
}
//pedir datos a una API
export async function getServerSideProps() {

    //falta poner mi github
    const res = await fetch('http://api.github.com/users/Ricardo-83104')
    const data = await res.json()

    console.log(data)
    return {
        props: {
            user: data

        }
    }
}

export default Github