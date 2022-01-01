import axios from 'axios';
import React from 'react'
import DashboardLayout from '../../../components/dashboard/dashboard-layout';
import Message from '../../../components/dashboard/message-page/Message';
import { ApiUrl } from '../../../config/ApiConfig';

const singleMessage = ({ messages }) => {
    return (
        <DashboardLayout>
            <Message content={messages} />
        </DashboardLayout>
    )
}
export default singleMessage
singleMessage.getInitialProps = async ({ query }) => {
    try {
        const res = await axios.get(ApiUrl + `admin/messages/${query.id}`);
        const messages = res.data;
        return {
            messages,
        }
    } catch (error) {
        return {
            props: {
                error: '',
            },
        };
    }
}