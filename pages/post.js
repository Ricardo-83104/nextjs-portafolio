import Layout from '../components/Layout';
import { useRouter } from 'next/router'
import { posts } from '../profile';

const Post = ({post}) => {

    const router = useRouter();

    console.log(router.query.title);

    const currentPost = posts.filter(post => post.title === router.query.title)[0];
    console.log(currentPost);

    return (
        <Layout footer={false} title={router.query.title}>
            <div className='text-center'>
                <img src={currentPost.imageURL} alt="" className='img-fluid' style={{width: '50'}}/>
                <p>{currentPost.content}</p>
                <h1>Post</h1>
                </div>
        </Layout>
    )
}

export default Post