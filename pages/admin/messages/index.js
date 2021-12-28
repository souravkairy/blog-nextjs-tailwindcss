import axios from 'axios';
import React, { useState } from 'react'
import DashboardLayout from '../../../components/dashboard/dashboard-layout'
import MessagesList from '../../../components/dashboard/message-page/Messages'
import { ApiUrl } from '../../../config/ApiConfig';

const Messages = ({ data }) => {
  const [messages, setMessages] = useState(data)
  return (
    <DashboardLayout>
      <MessagesList all_messages={messages} onDelete={setMessages}/>
    </DashboardLayout>
  )
}
export default Messages

export async function getServerSideProps() {
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