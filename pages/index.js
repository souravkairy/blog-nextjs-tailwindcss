import React from 'react'
import HeroSection from '../components/hero-section'
import Portfolio from '../components/portfolio'
import BlogPost from '../pages/front-end/posts/posts'
import Footer from '../components/footer'
import Contact from '../components/contact'
import CtaSection from './front-end/cta-section/cta-section'
const index = ({ posts }) => {
  console.log(posts);
  return (
    <>
      <HeroSection />
      <Portfolio />
      <CtaSection/>
      <BlogPost posts={posts} />
      <Contact />
      <Footer />
    </>
  )
}
export default index

export async function getStaticProps() {
  const res = await fetch('http://127.0.0.1:8000/api/all-post')
  const posts = await res.json()
  return {
    props: {
      posts,
    },
  }
}