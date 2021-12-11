import axios from 'axios'
import React from 'react'
import DashboardPage from '../../components/dashboard/dashboard-layout'
import SettingPage from '../../components/dashboard/settings-page/SettingPage'
import { ApiUrl } from '../../config/ApiConfig'

const settings = ({ heroData, seoData }) => {
    return (
        <div>
            <DashboardPage>
                <SettingPage heroContent={heroData} seoContent={seoData} />
            </DashboardPage>
        </div>
    )
}
export default settings

export async function getStaticProps() {
    try {
        const hero = await axios.get(ApiUrl + 'hero');
        const seo = await axios.get(ApiUrl + 'seo');
        const heroData = hero.data;
        const seoData = seo.data;
        return {
            props: {
                heroData,
                seoData,
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
