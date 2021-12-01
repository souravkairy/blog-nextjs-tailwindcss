import React from 'react'
import DashboardLayout from './dashboard-layout'
import Dashboard from './dashboard-layout/dashboard-page'

const dashboard = () => {
    return (
        <div>
            <DashboardLayout>
                <Dashboard/>
            </DashboardLayout>
        </div>
    )
}
export default dashboard
