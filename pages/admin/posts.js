import React from 'react'
import DashboardLayout from './dashboard-layout'
import Posts from './post-page/posts-page'

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
  const res = await fetch('http://127.0.0.1:8000/api/all-post')
  const posts = await res.json()
  return {
    props: {
      posts,
    },
  }
}
