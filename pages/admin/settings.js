import React from 'react'
import DashboardPage from './dashboard-layout'
import SettingPage from './settings-page/setting-page'

const settings = () => {
    return (
        <div>
            <DashboardPage>
                <SettingPage/>
            </DashboardPage>
        </div>
    )
}
export default settings
