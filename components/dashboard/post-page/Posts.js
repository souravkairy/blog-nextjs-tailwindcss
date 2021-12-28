import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Link from 'next/link'
import SvgThumbsDownLight from '../../../public/icon-components/ThumbsDownLight'
import SvgThumbsUpLight from '../../../public/icon-components/ThumbsUpLight'
import SvgTrashRegular from '../../../public/icon-components/TrashRegular'
import SvgEyeRegular from '../../../public/icon-components/EyeRegular'
import SvgEditRegular from '../../../public/icon-components/EditRegular'
import { ApiUrl } from '../../../config/ApiConfig'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Posts = ({ posts, onUpdate, onDelete }) => {
    const [open, setOpen] = useState(false)
    const [postId, setPostId] = useState('')
    const deleteOperation = () => {
        axios.delete(ApiUrl + 'admin/posts/destory/' + postId)
            .then(res => res.data)
            .then(({ message, data }) => {
                onDelete(data)
                toast.success(message)
            })
    }
    const handleChange = (id) => {
        console.log(id);
        axios.get(ApiUrl + 'admin/posts/update/status/' + id)
            .then(res => res.data)
            .then(({ message, data }) => {
                onUpdate(data)
                toast.success(message)
            })
        // .catch(err => {
        //     err.response.data && toast.success(err.response.data.message)
        //     console.log(err.response.data);
        // });
    }

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

                                        <tr key={post.id}>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0 h-10 w-10">
                                                        <img className="h-10 w-10 rounded-lg" src={post.image_url} alt="" />
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
                                                {
                                                    post.status === 1 ?
                                                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                            Active
                                                        </span>
                                                        :
                                                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                                                            De-Active
                                                        </span>
                                                }

                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-1">
                                                {
                                                    post.status === 1 ?
                                                        <button onClick={() => handleChange(post.id)} className="border p-1.5 rounded-lg hover:bg-gray-100 text-red-500 bg-red-100 border-red-200" title="De-active">
                                                            <SvgThumbsDownLight />
                                                        </button>
                                                        :
                                                        <button onClick={() => handleChange(post.id)} className="border p-1.5 rounded-lg hover:bg-gray-100 text-green-700 bg-green-100 border-green-200" title="Active">
                                                            <SvgThumbsUpLight />
                                                        </button>
                                                }
                                                <Link href={'/admin/posts/' + post.id} >
                                                    <button className="border p-1.5 rounded-lg hover:bg-gray-100 text-green-500 bg-green-100 border-green-200" title="View">
                                                        <SvgEyeRegular />
                                                    </button>
                                                </Link >
                                                <Link href={'/admin/posts/edit/' + post.id} >
                                                    <button className="border p-1.5 rounded-lg hover:bg-gray-100 text-yellow-500 bg-yellow-100 border-yellow-200" title="Edit Post">
                                                        <SvgEditRegular />
                                                    </button>
                                                </Link >
                                                <button onClick={() => { setOpen(true), setPostId(post.id) }} className="border p-1.5 rounded-lg hover:bg-gray-100 text-red-500 bg-red-100 border-red-200" title="Trash">
                                                    <SvgTrashRegular />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <ToastContainer />
                        </div>
                    </div>
                </div>
            </div>
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={setOpen}>
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                            &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
                                <div>
                                    <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
                                        <p className="text-red-600">
                                            <SvgTrashRegular />
                                        </p>
                                    </div>
                                    <div className="mt-3 text-center sm:mt-5">
                                        <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                                            Do you want to delete this post ?
                                        </Dialog.Title>
                                        <div className="mt-2">
                                            <p className="text-sm text-gray-500">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                                    <button
                                        type="button"
                                        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm"
                                        onClick={() => { deleteOperation(), setOpen(false) }}
                                    >
                                        Delete
                                    </button>
                                    <button
                                        type="button"
                                        className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm"
                                        onClick={() => setOpen(false)}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    )
}
export default Posts

