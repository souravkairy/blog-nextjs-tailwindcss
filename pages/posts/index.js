import React from 'react'
import Header from '../../components/homePage/common-section/header'
import Footer from '../../components/homePage/common-section/footer'
import BlogPost from '../../components/homePage/posts/Posts'

const index = ({ posts }) => {
    return (
        <div className="bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto border-b-0 md:border-b">
                <div className="relative z-10 pb-6 bg-white lg:max-w-2xl lg:w-full">
                    <Header />
                </div>
            </div>
            <BlogPost posts={posts} />
            <Footer />
        </div>
    )
}

export default index
export async function getStaticProps() {
    const res1 = await fetch('http://127.0.0.1:8000/api/posts')
    const posts = await res1.json()
    if (posts.length === 0) {
        return {
            notFound: true
        }
    }
    return {
        props: {
            posts
        },
    }
}