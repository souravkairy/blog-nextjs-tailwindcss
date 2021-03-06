import Image from 'next/image'
import Header from '../../components/homePage/common-section/header'
import Footer from '../../components/homePage/common-section/footer'
import axios from 'axios';
import { ApiUrl } from '../../config/ApiConfig';
import { NextSeo } from 'next-seo';

const SinglePost = ({ post }) => {
    return (
        <>
            <NextSeo
                title={post?.meta_title}
                description={post.meta_description}
                canonical="https://rezahaque.me/"
                openGraph={{
                    url: 'https://rezahaque.me/',
                    title: `${post?.meta_title}`,
                    description: `${post.meta_description}`,
                    images: { url: `${post?.image_url}` },
                    site_name: 'https://rezahaque.me/',
                }}
                twitter={{
                    handle: '@handle',
                    site: '@site',
                    cardType: 'summary_large_image',
                }}
            />
            <div className="bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto border-b-0 md:border-b">
                    <div className="relative z-10 pb-6 bg-white lg:max-w-2xl lg:w-full">
                        <Header />
                    </div>
                </div>
                <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                    <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen" />
                    <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
                        <div>
                            {/* <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Case Study</h2> */}
                            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                {post?.title}
                            </h3><br />
                            <p>By-<b>{post?.author}</b></p>
                            <p><b>{post?.created_at}</b></p>
                        </div>
                    </div>
                    <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
                        <div className="relative lg:row-start-1 lg:col-start-2">
                            <svg
                                className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
                                width={404}
                                height={384}
                                fill="none"
                                viewBox="0 0 404 384"
                                aria-hidden="true"
                            >
                                <defs>
                                    <pattern
                                        id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                                        x={0}
                                        y={0}
                                        width={20}
                                        height={20}
                                        patternUnits="userSpaceOnUse"
                                    >
                                        <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                                    </pattern>
                                </defs>
                                <rect width={404} height={384} fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
                            </svg>
                            <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
                                <figure>
                                    <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                                        <Image
                                            src={post?.image_url}
                                            alt="Post Image"
                                            className="rounded-lg shadow-lg object-cover object-center"
                                            width='1184'
                                            height='1376'
                                            objectFit='contain'
                                        />
                                    </div>
                                </figure>
                            </div>
                        </div>
                        <div className="mt-8 lg:mt-0">
                            <div className="mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
                                <p>
                                    {post?.text}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default SinglePost

SinglePost.getInitialProps = async ({ query }) => {
    try {
        const res = await axios.get(ApiUrl + `user/posts/${query.id}`);
        const post = res.data;
        return {
            post,
        }
    } catch (error) {
        return {
            props: {
                error: '',
            },
        };
    }
}
