import React from 'react'

const Testforconnection = ({ data }) => {
    return (
        <ul>
            {data.map((post) => (
                <li>{post.name}</li>
            ))}
         
        </ul>
    )
}
export default Testforconnection