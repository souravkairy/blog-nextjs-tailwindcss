import axios from 'axios'
import React, { useState } from 'react'
import DashboardLayout from '../../components/dashboard/dashboard-layout'
import PortfolioPage from '../../components/dashboard/portfolio-page/PortfolioPage'
import { ApiUrl } from '../../config/ApiConfig'

const Portfolio = ({ data }) => {
  const [portfolios, setPortfolios] = useState(data);

  const onCreated = (portfolio) => {
    setPortfolios([
      ...portfolios,
      portfolio
    ]);
  }
  const onDeleted = (id) => {
    // const portfolio = portfolios.filter(portfolio => portfolio.id != id)
    // setPortfolios([
    //   portfolio
    // ]);
  }
  return (
    <>
      <DashboardLayout>
        <PortfolioPage contents={portfolios} onCreated={onCreated} onDeleted={onDeleted} />
      </DashboardLayout>
    </>
  )
}
export default Portfolio

export async function getStaticProps() {
  try {
    const res = await axios.get(ApiUrl + 'portfolios');
    const data = res.data;
    return {
      props: {
        data,
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
