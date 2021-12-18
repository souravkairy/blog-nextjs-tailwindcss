import axios from 'axios';
import React from 'react'
import DashboardLayout from '../../components/dashboard/dashboard-layout'
import MessagesList from '../../components/dashboard/message-page/Messages'
import { ApiUrl } from '../../config/ApiConfig';

const Messages = ({data}) => {
    return (
        <DashboardLayout>
            <MessagesList all_messages={data} />
        </DashboardLayout>
    )
}
export default Messages

export async function getStaticProps() {
    try {
      const res = await axios.get(ApiUrl + 'admin/messages');
      const data = res.data;
      return {
        props: {
            data,
        },
      }
    } catch (error) {
      return {
        props: {
          error: '',
        },
      };
    }
  }