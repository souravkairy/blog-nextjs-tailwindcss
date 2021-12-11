import axios from 'axios'
import React from 'react'
import DashboardLayout from '../../components/dashboard/dashboard-layout'
import Dashboard from '../../components/dashboard/dashboard-layout/DashboardPage'
import { ApiUrl } from '../../config/ApiConfig'

const dashboard = ({ posts, portfolioSectionData }) => {
    return (
        <div>
            <DashboardLayout>
                <Dashboard posts={posts} portfolios={portfolioSectionData} />
            </DashboardLayout>
        </div>
    )
}
export default dashboard

export async function getStaticProps() {
    try {
        const res1 = await axios.get(ApiUrl + 'posts');
        const res3 = await axios.get(ApiUrl + 'portfolios');
        const res5 = await axios.get(ApiUrl + 'contact-info');
        const posts = res1.data;
        const portfolioSectionData = res3.data;
        const contactInfo = res5.data;
        return {
            props: {
                posts,
                portfolioSectionData,
                contactInfo
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