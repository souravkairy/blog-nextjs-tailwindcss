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

// const index = ({ posts, heroSectionData, portfolioSectionData, ctaData, contactInfo, socialLink, seoData }) => {
const index = () => {
  return (
    <>
      {/* <NextSeo
        title={seoData?.meta_title}
        description={seoData?.meta_description}
        canonical={seoData?.canonical_link}
        openGraph={{
          url: `${seoData?.canonical_link}`,
          title: `${seoData?.meta_title}`,
          description: `${seoData?.meta_description}`,
          images: { url: `${seoData?.image_url}` },
          site_name: `${seoData?.site_name}`,
        }}
      /> */}
      {/* <ScrollToTop smooth color="#6f00ff" className="bg-white shadow-lg fixed right-7 bottom-7 p-3 text-white z-50 cursor-pointer rounded-lg w-14 h-14 
      transition ease-in-out duration-700 outline-none"/> */}
      {/* <HeroSection content={heroSectionData} />
      <Portfolio contents={portfolioSectionData} />
      <CtaSection content={ctaData} />
      <BlogPost posts={posts} />
      <Contact content={contactInfo} />
      <Footer socialLinks={socialLink} /> */}
      <h1>Next Seo</h1>
    </>
  )
}
export default index

// export async function getServerSideProps() {
//   try {
//     const res1 = await axios.get(ApiUrl + 'user/posts');
//     const res2 = await axios.get(ApiUrl + 'user/hero');
//     const res3 = await axios.get(ApiUrl + 'user/portfolios');
//     const res4 = await axios.get(ApiUrl + 'user/cta');
//     const res5 = await axios.get(ApiUrl + 'user/contact-info');
//     const res6 = await axios.get(ApiUrl + 'user/social-link');
//     const res7 = await axios.get(ApiUrl + 'user/seos');
//     const posts = res1.data;
//     const heroSectionData = res2.data;
//     const portfolioSectionData = res3.data;
//     const ctaData = res4.data;
//     const contactInfo = res5.data;
//     const socialLink = res6.data;
//     const seoData = res7.data;
//     return {
//       props: {
//         posts,
//         heroSectionData,
//         portfolioSectionData,
//         ctaData,
//         contactInfo,
//         socialLink,
//         seoData
//       },
//     }
//   } catch (error) {
//     return {
//       props: {
//         error: '',
//       },
//     };
//   }
// }