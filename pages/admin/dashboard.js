import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import DashboardLayout from '../../components/dashboard/dashboard-layout/Index'
import DashboardPage from '../../components/dashboard/dashboard-layout/DashboardPage'
import { ApiUrl } from '../../config/ApiConfig'
import { authRouteProtector } from '../../utils/routeProtection'

const Dashboard = ({ posts, portfolioSectionData, messages }) => {
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
                    <DashboardPage posts={posts} portfolios={portfolioSectionData} messages={messages} />
                </DashboardLayout>
            }
        </div >
    )
}
export default Dashboard

export const getServerSideProps = authRouteProtector(async () => {
    const res1 = await axios.get(ApiUrl + 'admin/posts');
    const res2 = await axios.get(ApiUrl + 'admin/portfolios');
    const res3 = await axios.get(ApiUrl + 'admin/messages');

    return {
        props: {
            posts: res1.data,
            portfolioSectionData: res2.data,
            messages: res3.data,
        },
    }
})
