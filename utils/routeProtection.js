const guestRouteProtector = (serverSideProps) => {
    return async () => {
        const token = null;

        if (token) {
            return {
                redirect: {
                    destination: '/admin/dashboard'
                }
            }
        }

        return serverSideProps({});
    }
}

const authRouteProtector = (serverSideProps) => {
    return async () => {
        const token = 123;

        if (!token) {
            return {
                redirect: {
                    destination: '/login'
                }
            }
        }

        return serverSideProps({});
    }
}

export {
    guestRouteProtector,
    authRouteProtector
}