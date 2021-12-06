import React from 'react'
import HeroSection from '../components/homePage/hero-section/HeroSection'
import Portfolio from '../components/homePage/portfolio-section/portfolio'
import BlogPost from '../components/homePage/posts/Posts'
import Footer from '../components/homePage/common-section/footer'
import Contact from '../components/homePage/contact-section/Contact'
import CtaSection from '../components/homePage/cta-section/CtaSection'
import ScrollToTop from "react-scroll-to-top";

const index = ({ posts, heroSectionData, portfolioSectionData, ctaData, contactInfo }) => {
  return (
    <>
      <ScrollToTop smooth color="#6f00ff" className="bg-white shadow-lg fixed right-7 bottom-7 p-3 text-white z-50 cursor-pointer rounded-lg w-14 h-14 
      transition ease-in-out duration-700 outline-none"/>
      <HeroSection content={heroSectionData} />
      <Portfolio contents={portfolioSectionData} />
      <CtaSection content={ctaData} />
      <BlogPost posts={posts} />
      <Contact content={contactInfo} />
      <Footer />
    </>
  )
}
export default index

export async function getStaticProps() {
  const res1 = await fetch('http://127.0.0.1:8000/api/posts')
  const res2 = await fetch('http://127.0.0.1:8000/api/hero-section')
  const res3 = await fetch('http://127.0.0.1:8000/api/portfolios')
  const res4 = await fetch('http://127.0.0.1:8000/api/get-cta-section')
  const res5 = await fetch('http://127.0.0.1:8000/api/get-contact-section')
  const posts = await res1.json()
  const heroSectionData = await res2.json()
  const portfolioSectionData = await res3.json()
  const ctaData = await res4.json()
  const contactInfo = await res5.json()

  if (posts.length === 0) {
    return {
      notFound: true
    }
  }
  return {
    props: {
      posts,
      heroSectionData,
      portfolioSectionData,
      ctaData,
      contactInfo
    },
  }
}