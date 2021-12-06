import React from 'react'
import DashboardLayout from '../../components/dashboard/dashboard-layout'
import Posts from '../../components/dashboard/post-page/Posts'

const AllPost = ({posts}) => {
    return (
        <>
            <DashboardLayout>
                <Posts posts={posts}/>
            </DashboardLayout>
        </>
    )
}
export default AllPost

export async function getStaticProps() {
  const res = await fetch('http://127.0.0.1:8000/api/posts')
  const posts = await res.json()
  return {
    props: {
      posts,
    },
  } 
}
