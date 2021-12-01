import React, { useState } from 'react'
import { Switch } from '@headlessui/react'
import Link from 'next/link'
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const AddPostPage = () => {
    const [agreed, setAgreed] = useState(false)
    return (
        <>
            <div className="bg-gray-50 px-4 py-3 border-b border sm:px-6 rounded-lg mb-4">
                <div className="flex items-center justify-between flex-wrap sm:flex-nowrap">
                    <div className="">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">Add Post</h3>
                    </div>
                    <div className="">
                        <Link href="posts">
                            <button
                                type="button"
                                className="px-4 py-1 shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 "
                            >
                                All Post
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="relative bg-white">
                <div className="mx-auto w-full">
                    <div className="bg-white py-4">
                        <h3 className="mb-3 text-lg font-semibold">Add Post</h3>
                        <div className="">
                            <form action="#" method="POST" className="grid grid-cols-1 gap-y-5">
                                <div>
                                    <input
                                        type="text"
                                        name="title"
                                        id="title"
                                        className="block w-full shadow-sm py-2 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border rounded-md"
                                        placeholder="Title"
                                    />
                                </div>
                                <div>
                                    <input
                                        id="author"
                                        name="author"
                                        type="text"
                                        className="block w-full shadow-sm py-2 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border rounded-md"
                                        placeholder="Author"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="sr-only">
                                        Message
                                    </label>
                                    <textarea
                                        id="text"
                                        name="text"
                                        rows={4}
                                        className="block w-full shadow-sm py-2 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border rounded-md"
                                        placeholder="Post"
                                    // defaultValue={'dfgdf'}
                                    />
                                </div>
                                <div>
                                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                        <div className="space-y-1 text-center">
                                            <svg
                                                className="mx-auto h-12 w-12 text-gray-400"
                                                stroke="currentColor"
                                                fill="none"
                                                viewBox="0 0 48 48"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                            <div className="flex text-sm text-gray-600">
                                                <label
                                                    htmlFor="file-upload"
                                                    className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                                >
                                                    <span>Upload blog image</span>
                                                    <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                                </label>
                                                <p className="pl-1">or drag and drop</p>
                                            </div>
                                            <p className="text-xs text-gray-500">PNG, JPG, GIF up to 300Kb</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <input
                                        id="author"
                                        name="author"
                                        type="text"
                                        className="block w-full shadow-sm py-2 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border rounded-md"
                                        placeholder="Meta Data"
                                    />
                                </div>
                                <div>
                                    <input
                                        id="author"
                                        name="author"
                                        type="text"
                                        className="block w-full shadow-sm py-2 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border rounded-md"
                                        placeholder="Meta Tag"
                                    />
                                </div>
                                <div>
                                    <textarea
                                        id="text"
                                        name="text"
                                        rows={4}
                                        className="block w-full shadow-sm py-2 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border rounded-md"
                                        placeholder="Meta Description"
                                    />
                                </div>

                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <Switch
                                            checked={agreed}
                                            onChange={setAgreed}
                                            className={classNames(
                                                agreed ? 'bg-indigo-600' : 'bg-gray-200',
                                                'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                                            )}
                                        >
                                            <span className="sr-only">Agree to policies</span>
                                            <span
                                                aria-hidden="true"
                                                className={classNames(
                                                    agreed ? 'translate-x-5' : 'translate-x-0',
                                                    'inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                                                )}
                                            />
                                        </Switch>
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-base text-gray-500">
                                            Please Select, If you want to publish...
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="inline-flex justify-center py-1 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 w-full"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddPostPage







