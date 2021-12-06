import React from 'react'
import DashboardLayout from '../../components/dashboard/dashboard-layout'
import MessagesList from '../../components/dashboard/message-page/Messages'

const Messages = () => {
    return (
        <DashboardLayout>
           <MessagesList/>
        </DashboardLayout>
    )
}
export default Messages
