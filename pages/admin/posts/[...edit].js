import axios from 'axios'
import React from 'react'
import DashboardLayout from '../../../components/dashboard/dashboard-layout';
import EditPost from '../../../components/dashboard/post-page/EditPost';
import { ApiUrl } from '../../../config/ApiConfig'

const Edit = ({ post }) => {
    console.log(post);
    return (
        <DashboardLayout>
            <EditPost content={post} />
        </DashboardLayout>
    )
}
export default Edit

Edit.getInitialProps = async ({ query }) => {
    try {
        const res = await axios.get(ApiUrl + `admin/posts/${query.edit[1]}`);
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
