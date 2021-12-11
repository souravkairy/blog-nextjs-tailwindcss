import React from 'react'
import Link from 'next/link'
import SvgThumbsDownLight from '../../../public/icon-components/ThumbsDownLight'
import SvgThumbsUpLight from '../../../public/icon-components/ThumbsUpLight'
import SvgTrashRegular from '../../../public/icon-components/TrashRegular'
import SvgEyeRegular from '../../../public/icon-components/EyeRegular'
import SvgEditRegular from '../../../public/icon-components/EditRegular'

const Posts = ({ posts }) => {
    return (
        <>
            <div className="bg-gray-50 px-4 py-3 border-b border sm:px-6 rounded-lg mb-4">
                <div className="flex items-center justify-between flex-wrap sm:flex-nowrap">
                    <div className="">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">All Post</h3>
                    </div>
                    <div className="">
                        <Link href="add-post">
                            <a
                                type="button"
                                className="px-4 py-1 shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 "
                            >
                                Add Post
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Name
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Title
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Status
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {posts?.map((post) => (
                                        <Link href="#" >
                                            <tr key={post.id}>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        <div className="flex-shrink-0 h-10 w-10">
                                                            <img className="h-10 w-10 rounded-full" src={post.image_url} alt="" />
                                                        </div>
                                                        <div className="ml-4">
                                                            <div className="text-sm font-medium text-gray-900">{post.author}</div>
                                                            <div className="text-sm text-gray-500">{post.created_at}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">{post.title}</div>
                                                    <div className="text-sm text-gray-500">{post.text.substr(0, 60) + ' . . . . . . .'}</div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                        Active
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-1">
                                                    {
                                                        post.status === 1 ?
                                                            <button className="border p-1.5 rounded-lg hover:bg-gray-100 text-red-500 bg-red-100 border-red-200" title="de-Active">
                                                                <SvgThumbsDownLight />
                                                            </button>
                                                            :
                                                            <button className="border p-1.5 rounded-lg hover:bg-gray-100 text-green-700 bg-green-100 border-green-200" title="Active">
                                                                <SvgThumbsUpLight />
                                                            </button>
                                                    }
                                                    <button className="border p-1.5 rounded-lg hover:bg-gray-100 text-green-500 bg-green-100 border-green-200" title="View">
                                                        <SvgEyeRegular />
                                                    </button>
                                                    <button className="border p-1.5 rounded-lg hover:bg-gray-100 text-yellow-500 bg-yellow-100 border-yellow-200" title="Edit Post">
                                                        <SvgEditRegular />
                                                    </button>
                                                    <button className="border p-1.5 rounded-lg hover:bg-gray-100 text-red-500 bg-red-100 border-red-200" title="Trash">
                                                        <SvgTrashRegular />
                                                    </button>
                                                </td>
                                            </tr>
                                        </Link>

                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Posts

