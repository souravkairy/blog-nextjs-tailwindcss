import React from 'react'
import DashboardLayout from '../../components/dashboard/dashboard-layout'
import Dashboard from '../../components/dashboard/dashboard-layout/DashboardPage'

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
    const res1 = await fetch('http://127.0.0.1:8000/api/posts')
    const res3 = await fetch('http://127.0.0.1:8000/api/portfolios')
    const res5 = await fetch('http://127.0.0.1:8000/api/get-contact-section')
    const posts = await res1.json()
    const portfolioSectionData = await res3.json()
    const contactInfo = await res5.json()

    return {
        props: {
            posts,
            portfolioSectionData,
            contactInfo
        },
    }
}