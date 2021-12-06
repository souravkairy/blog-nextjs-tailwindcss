import React from 'react'
import DashboardPage from '../../components/dashboard/dashboard-layout'
import SettingPage from '../../components/dashboard/settings-page/SettingPage'

const settings = ({ heroSectiondata }) => {
    return (
        <div>
            <DashboardPage>
                <SettingPage heroContent={heroSectiondata} />
            </DashboardPage>
        </div>
    )
}
export default settings

export async function getStaticProps() {
    const res = await fetch('http://127.0.0.1:8000/api/hero-section')
    const response1 = await res.json()
    return {
        props: {
            heroSectiondata: response1,
        },
    }
}
