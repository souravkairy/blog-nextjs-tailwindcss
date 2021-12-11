import React from 'react'
import HeroSection from '../components/homePage/hero-section/HeroSection'
import Portfolio from '../components/homePage/portfolio-section/portfolio'
import BlogPost from '../components/homePage/posts/Posts'
import Footer from '../components/homePage/common-section/footer'
import Contact from '../components/homePage/contact-section/Contact'
import CtaSection from '../components/homePage/cta-section/CtaSection'
import ScrollToTop from "react-scroll-to-top";
import { ApiUrl } from '../config/ApiConfig'
import { NextSeo } from 'next-seo';
import axios from 'axios'

const index = ({ posts, heroSectionData, portfolioSectionData, ctaData, contactInfo }) => {
  return (
    <>
      <NextSeo
        title="Using More of Config"
        description="This example uses more of the available config options."
        canonical="https://rezahaque.me/"
        openGraph={{
          url: 'https://www.url.ie/a',
          title: 'Open Graph Title',
          description: 'Open Graph Description',
          images: { url: 'https://www.example.ie/og-image-03.jpg' },
          site_name: 'SiteName',
        }}
        // twitter={{
        //   handle: '@handle',
        //   site: '@site',
        //   cardType: 'summary_large_image',
        // }}
      />
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
  try {
    const res1 = await axios.get(ApiUrl + 'posts');
    const res2 = await axios.get(ApiUrl + 'hero');
    const res3 = await axios.get(ApiUrl + 'portfolios');
    const res4 = await axios.get(ApiUrl + 'cta');
    const res5 = await axios.get(ApiUrl + 'contact-info');
    const posts = res1.data;
    const heroSectionData = res2.data;
    const portfolioSectionData = res3.data;
    const ctaData = res4.data;
    const contactInfo = res5.data;
    return {
      props: {
        posts,
        heroSectionData,
        portfolioSectionData,
        ctaData,
        contactInfo
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