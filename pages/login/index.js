import React, { useState } from 'react'
import LoginPage from '../../components/loginPage/LoginPage'
import { guestRouteProtector } from '../../utils/routeProtection'

const index = () => {
    const [token, setToken] = useState('')
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
export default index
