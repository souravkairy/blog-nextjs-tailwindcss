import axios from 'axios';
import React from 'react'
import AllPost from '../components/homePage/posts/Posts';
import { ApiUrl } from '../config/ApiConfig';
import Header from '../components/homePage/common-section/header';
import Footer from '../components/homePage/common-section/footer';

const posts = ({ posts }) => {
    return (
        <div className="bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto border-b-0 md:border-b">
                <div className="relative z-10 pb-6 bg-white lg:max-w-2xl lg:w-full">
                    <Header />
                </div>
            </div>
            <AllPost posts={posts} />
            <Footer />
        </div>
    )
}
export default posts

export async function getStaticProps() {
    try {
        const res1 = await axios.get(ApiUrl + 'posts');
        const posts = res1.data;
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