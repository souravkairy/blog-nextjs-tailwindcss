import React, { useState } from 'react'
import LoginPage from '../../components/loginPage/LoginPage'
import { guestRouteProtector } from '../../utils/routeProtection'

const Index = () => {
    const [token, setToken] = useState('')
    console.log(token);
    return (
        <div>
            <LoginPage setToken={setToken} />
        </div>
    )
}
export const getServerSideProps = guestRouteProtector(async () => {
    return {
        props: {}
    }
})
export default Index
