import React, { useState, useRef } from 'react'
import Link from 'next/link'
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { ApiUrl } from "../../../config/ApiConfig";
// import JoditEditor from "jodit-react";
const AddPostPage = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();
    const text = useRef(null)
    const [content, setContent] = useState('')

    const config = {
        readonly: false 
    }
    const onSubmit = (data) => {
        console.log(data, ...content)
        const formData = new FormData();
        formData.append('title', data.title);
        formData.append('text', data.text);
        formData.append('author', data.author);
        formData.append('meta_title', data.meta_title);
        formData.append('meta_description', data.meta_description);
        formData.append('image', data.image[0]);

        axios.post(ApiUrl + 'admin/posts/store', formData, {
            headers: {
                'Content-Type': `multipart/form-data`
            }
        })
            .then(res => res.data)
            .then(({ message, post }) => {
                reset()
                toast.success(message)
                // onCreated(portfolio)
            })
            .catch(err => {
                err.response.data && toast.success(err.response.data.message)
            });
    };
    return (
        <>
            <div className="bg-gray-50 px-4 py-3 border-b border rounded-lg mb-4">
                <div className="flex items-center justify-between flex-wrap sm:flex-nowrap">
                    <div className="">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">Add Post</h3>
                    </div>
                    <div className="">
                        <Link href="posts">
                            <a 
                                className="px-4 py-1 shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 "
                            >
                                All Post
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="relative bg-white">
                <div className="mx-auto w-full">
                    <div className="bg-white py-4">
                        <div className="">
                            <form className="grid grid-cols-1 gap-y-5" onSubmit={handleSubmit(onSubmit)}>
                                <div>
                                    <input
                                        type="text"
                                        id="title"
                                        className="block w-full shadow-sm py-2 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border rounded-md"
                                        placeholder="Title"
                                        {...register("title", { required: true })}
                                    />
                                    {errors.title && <p className="text-red-600 text-xs">This field is required</p>}
                                </div>
                                <div>
                                    <input
                                        id="author"
                                        className="block w-full shadow-sm py-2 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border rounded-md"
                                        placeholder="Author"
                                        {...register("author", { required: true })}
                                    />
                                    {errors.author && <p className="text-red-600 text-xs">This field is required</p>}
                                </div>
                                <div>
                                    <label htmlFor="message" className="sr-only">
                                        Message
                                    </label>
                                    {/* <JoditEditor
                                        ref={text}
                                        value={content}
                                        config={config}
                                        tabIndex={2} // tabIndex of textarea
                                        onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons

                                    /> */}
                                    <textarea
                                        id="text"
                                        rows={4}
                                        className="block w-full shadow-sm py-2 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border rounded-md"
                                        placeholder="Post"
                                        {...register("text", { required: true })}
                                    />
                                    {errors.text && <p className="text-red-600 text-xs">This field is required</p>}
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

                                                    <input id="file-upload" type="file" className="sr-only" {...register("image", { required: true })} />
                                                </label>
                                                <p className="pl-1">or drag and drop</p>
                                            </div>
                                            <p className="text-xs text-gray-500">PNG, JPG, GIF up to 300Kb</p>
                                            {errors.image && <p className="text-red-600 text-xs">This field is required</p>}
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <input
                                        id="author"
                                        type="text"
                                        className="block w-full shadow-sm py-2 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border rounded-md"
                                        placeholder="Meta Title"
                                        {...register("meta_title", { required: true })}
                                    />
                                    {errors.meta_title && <p className="text-red-600 text-xs">This field is required</p>}
                                </div>
                                <div>
                                    <textarea
                                        id="text"
                                        rows={4}
                                        className="block w-full shadow-sm py-2 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border rounded-md"
                                        placeholder="Meta Description"
                                        {...register("meta_description", { required: true })}
                                    />
                                    {errors.meta_description && <p className="text-red-600 text-xs">This field is required</p>}
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        className="inline-flex justify-center py-1 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 w-full"
                                    >
                                        Submit
                                    </button>
                                    <ToastContainer />
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







