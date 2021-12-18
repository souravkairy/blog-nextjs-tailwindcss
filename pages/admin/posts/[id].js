import axios from 'axios'
import React from 'react'
import DashboardLayout from '../../../components/dashboard/dashboard-layout';
import Post from '../../../components/dashboard/post-page/Post';
import { ApiUrl } from '../../../config/ApiConfig'


const SinglePost = ({ post }) => {
    return (
        <DashboardLayout>
            <Post content={post} />
        </DashboardLayout>
    )
}

export default SinglePost


SinglePost.getInitialProps = async ({ query }) => {
    try {
        const res = await axios.get(ApiUrl + `admin/posts/${query.id}`);
        const post = res.data;
        return {
            post,
        }
    } catch (error) {
        return {
            props: {
                error: '',
            },
        };
    }
}
