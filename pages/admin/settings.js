import axios from 'axios'
import React from 'react'
import DashboardPage from '../../components/dashboard/dashboard-layout'
import SettingPage from '../../components/dashboard/settings-page/SettingPage'
import { ApiUrl } from '../../config/ApiConfig'

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
    try {
        const res = await axios.get(ApiUrl + 'hero');
        const heroSectiondata = res.data;
        return {
            props: {
                heroSectiondata,
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
