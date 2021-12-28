import axios from 'axios';
import React from 'react'
import DashboardLayout from '../../../components/dashboard/dashboard-layout';
import Message from '../../../components/dashboard/message-page/Message';
import { ApiUrl } from '../../../config/ApiConfig';

const singleMessage = ({ post }) => {
    return (
        <DashboardLayout>
            <Message content={post} />
        </DashboardLayout>
    )
}
export default singleMessage
singleMessage.getInitialProps = async ({ query }) => {
    try {
        const res = await axios.get(ApiUrl + `admin/messages/${query.id}`);
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