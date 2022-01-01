import React from 'react'
import { MailIcon, PhoneIcon } from '@heroicons/react/outline'
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ApiUrl } from '../../../config/ApiConfig';
import axios from 'axios';

const Contact = ({ content }) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();
    const onSubmit = (data) => {
        const options = {
            method: 'POST',
            url: ApiUrl + 'user/messages',
            headers: { 'Content-Type': 'application/json' },
            data: data
        };
        axios.request(options).then(function (response) {
            console.log(response.data);
            reset()
            toast.success("Message send successfully")
        }).catch(function (error) {
            console.error(error);
        });
    };
    return (
        <div className="bg-white max-w-7xl mx-auto py-10 px-5 md:px-10" id="contact">
            <div className="max-w-7xl mx-auto flex flex-wrap rounded-lg border">
                <div className="bg-purple-50 py-10 px-5 sm:px-10 w-full md:w-1/2 ">
                    <div className="">
                        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">{content?.heading}</h2>
                        <p className="mt-3 text-lg leading-6 text-gray-500">
                            {content?.sub_heading}
                        </p>
                        <dl className="mt-8 text-base text-gray-500">
                            <div>
                                {/* <dt className="sr-only">Postal address</dt> */}
                                <dd>
                                    <p>

                                        {content?.address}
                                    </p>
                                    {/* <p>Springfield, OR 12345</p> */}
                                </dd>
                            </div>
                            <div className="mt-6">
                                <dt className="sr-only">Phone number</dt>
                                <dd className="flex">
                                    <PhoneIcon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                                    <span className="ml-3">{content?.mobile_number}</span>
                                </dd>
                            </div>
                            <div className="mt-3">
                                <dt className="sr-only">Email</dt>
                                <dd className="flex">
                                    <MailIcon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                                    <span className="ml-3">{content?.email}</span>
                                </dd>
                            </div>
                        </dl>
                        <p className="mt-6 text-base text-gray-500">
                            Looking for careers?{' '}
                            <a href="#" className="font-medium text-gray-700 underline">
                                View all job openings
                            </a>
                            .
                        </p>
                    </div>
                </div>
                <div className="bg-white py-10 px-5 sm:px-10 w-full md:w-1/2 my-2">
                    <div className="max-w-lg mx-auto lg:max-w-none">
                        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-y-4">
                            <div>
                                <label htmlFor="full-name" className="sr-only">
                                    Full name
                                </label>
                                <input
                                    type="text"
                                    id="full-name"
                                    autoComplete="name"
                                    className="block w-full shadow-sm py-1.5 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border rounded-md"
                                    placeholder="Name"
                                    {...register("name")}
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="sr-only">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    className="block w-full shadow-sm py-1.5 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border rounded-md"
                                    placeholder="Email"
                                    {...register("email", { required: true })}
                                />
                                {errors.email && <p className="text-red-600 text-xs">This field is required</p>}
                            </div>
                            <div>
                                <label htmlFor="phone" className="sr-only">
                                    Phone
                                </label>
                                <input
                                    type="text"
                                    id="phone"
                                    className="block w-full shadow-sm py-1.5 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border rounded-md"
                                    placeholder="Phone"
                                    {...register("phone")}
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="sr-only">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    className="block w-full shadow-sm py-1.5 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border rounded-md"
                                    placeholder="Message"
                                    {...register("message", { required: true })}
                                />
                                {errors.message && <p className="text-red-600 text-xs">This field is required</p>}
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="inline-flex justify-center py-1.5 px-6 border shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
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
    )
}

export default Contact




