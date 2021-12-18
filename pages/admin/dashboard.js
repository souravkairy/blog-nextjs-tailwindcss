import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import DashboardLayout from '../../components/dashboard/dashboard-layout'
import Dashboard from '../../components/dashboard/dashboard-layout/DashboardPage'
import { ApiUrl } from '../../config/ApiConfig'
import { authRouteProtector } from '../../utils/routeProtection'

const dashboard = ({ posts, portfolioSectionData }) => {
    const [auth, setAuth] = useState(true)
    const router = useRouter();
    useEffect(() => {
        (
            async () => {
                try {
                    const response = await fetch('http://localhost:8000/api/user', {
                        credentials: 'include',
                    });
                    await response.json();
                } catch (e) {
                    setAuth(false)
                    router.push('/login')
                }
            }
        )();
    });
    return (
        <div>
            {auth &&
                <DashboardLayout>
                    <Dashboard posts={posts} portfolios={portfolioSectionData} />
                </DashboardLayout>
            }
        </div >
    )
}
export default dashboard

export const getServerSideProps = authRouteProtector(async () => {
    const res1 = await axios.get(ApiUrl + 'admin/posts');
    const res2 = await axios.get(ApiUrl + 'admin/portfolios');
    const res3 = await axios.get(ApiUrl + 'admin/contact-info');

    return {
        props: {
            posts: res1.data,
            portfolioSectionData: res2.data,
            contactInfo: res3.data,
        },
    }
})
