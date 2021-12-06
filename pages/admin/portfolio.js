import React from 'react'
import DashboardLayout from '../../components/dashboard/dashboard-layout'
import PortfolioPage from '../../components/dashboard/portfolio-page/PortfolioPage'

const Portfolio = ({ data }) => {
  return (
    <>
      <DashboardLayout>
        <PortfolioPage contents={data}/>
      </DashboardLayout>
    </>
  ) 
}
export default Portfolio

export async function getStaticProps() {
  const res = await fetch('http://127.0.0.1:8000/api/portfolios')
  const data = await res.json()
  return {
    props: {
      data,
    },
  }
}
