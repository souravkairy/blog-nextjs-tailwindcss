import React from 'react'
import DashboardLayout from './dashboard-layout'
import PortfolioPage from './portfolio-page/portfolio-page'

const Portfolio = ({ posts }) => {
  return (
    <>
      <DashboardLayout>
        <PortfolioPage posts={posts}/>
      </DashboardLayout>
    </>
  )
}
export default Portfolio

export async function getStaticProps() {
  const res = await fetch('http://127.0.0.1:8000/api/all-post')
  const posts = await res.json()
  return {
    props: {
      posts,
    },
  }
}
