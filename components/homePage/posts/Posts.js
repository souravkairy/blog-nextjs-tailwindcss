import react, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const AllPost = ({ posts }) => {
    const router = useRouter();
    const slug = router.pathname;
    const [count, setCount] = useState('')
    useEffect(() => {
        slug === '/posts' ? setCount(10) : setCount(4)
    }, [setCount])
    return (
        <>
            <div className="relative bg-white py-10" id="blogs">
                <div className="relative max-w-7xl mx-auto px-5 md:px-10">
                    <div className="text-center">
                        <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
                            {
                                slug === '/posts' ? "All Blogs" : "From the blog"
                            }
                        </h2>
                        <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed.
                        </p>
                    </div>
                    <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-4 lg:max-w-none">
                        {posts?.slice(0, count)?.map((post) => (
                            <Link href={'/posts/' + post.id} >
                                <div key={post.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden cursor-pointer">
                                    <div className="flex-shrink-0">
                                        <img className="h-48 w-full object-cover" src={post.image_url} alt="" />
                                    </div>
                                    <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                                        <div className="flex-1">
                                            <a href={post.href} className="block mt-2">
                                                <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                                                <p className="mt-3 text-base text-gray-500">{post.text.substr(0, 100) + ' . . . . . . .'}</p>
                                            </a>
                                        </div>
                                        <div className="mt-6 flex items-center">
                                            <div className="flex-shrink-0">
                                                <a href={post.author.href}>
                                                    <span className="sr-only">{post.author}</span>
                                                    <img className="h-10 w-10 rounded-full" src={post.image_url} alt="" />
                                                </a>
                                            </div>
                                            <div className="ml-3">
                                                <p className="text-base font-medium text-gray-900">
                                                    <a href={post.author.href} className="hover:underline">
                                                        {post.author}
                                                    </a>
                                                </p>
                                                <p className="text-xs font-normal text-gray-900">
                                                    {post.created_at}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                    {
                        slug === '/posts' ?
                            null
                            :
                            <div className="my-5 flex justify-center">
                                <Link href="/posts/">
                                    <a
                                        className="w-full md:w-40 text-center py-2 text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 shadow-lg"
                                    >
                                        See All Post
                                    </a>
                                </Link>
                            </div>
                    }
                </div>
            </div>
        </>
    )
}
export default AllPost