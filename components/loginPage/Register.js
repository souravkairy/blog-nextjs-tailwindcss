import React from 'react'
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ApiUrl } from '../../config/ApiConfig';

const Register = () => {
    const route = useRouter();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        const options = {
            method: 'POST',
            url: ApiUrl + 'register',
            headers: { 'Content-Type': 'application/json' },
            data: data
        };
        axios.request(options).then(function (response) {
            toast.success("Message send successfully")
            route.push('login')
        }).catch(function (error) {
            console.error(error);
        });
    };
    return (
        <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 border shadow sm:rounded-lg sm:px-10">
                    <h2 className="mb-6 text-center text-2xl font-bold text-gray-900">Register form for <span className='text-indigo-600'>Admin Dashboard</span> </h2>
                    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Name
                            </label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    {...register("name", { required: true })}
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email address
                            </label>
                            <div className="mt-1">
                                <input
                                    type="email"
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    {...register("email", { pattern: /@./ })}
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <div className="mt-1">
                                <input
                                    type="password"
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    {...register("password", { required: true })}
                                />
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 "
                            >
                                Sign up
                            </button>
                            <ToastContainer />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register
