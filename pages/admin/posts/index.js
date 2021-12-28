import React, { useState } from 'react'
import DashboardLayout from '../../../components/dashboard/dashboard-layout'
import Posts from '../../../components/dashboard/post-page/Posts'
import { ApiUrl } from '../../../config/ApiConfig'
import axios from 'axios'

const AllPost = ({ posts }) => {
  const [allPosts, setAllPosts] = useState(posts)
  return (
    <>
      <DashboardLayout>
        <Posts posts={allPosts} onUpdate={setAllPosts} onDelete={setAllPosts}/>
      </DashboardLayout>
    </>
  )
}
export default AllPost

export async function getServerSideProps() {
  try {
    const res = await axios.get(ApiUrl + 'admin/posts');
    const posts = res.data;
    return {
      props: {
        posts,
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
