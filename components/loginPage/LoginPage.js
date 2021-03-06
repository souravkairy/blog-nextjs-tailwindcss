import React from 'react';
import { useRouter } from 'next/router';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ApiUrl } from '../../config/ApiConfig';
import axios from 'axios';

const LoginPage = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();
    const route = useRouter();
    const onSubmit = (data) => {
        const formData = new FormData();
        formData.append('email', data.email);
        formData.append('password', data.password);

        axios.post(ApiUrl + 'login', formData, {
            headers: {
                'Content-Type': `application/json`
            }
        })
            .then(res => res.data)
            .then(({ message, token }) => {
                localStorage.setItem('token', token)
                toast.success(message)
                console.log(localStorage.getItem('token'));
                route.push('admin/dashboard');
            })
            .catch(err => {
                reset()
                err.response.data && toast.success(err.response.data.message)
            });
    }
    return (
        <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 border shadow sm:rounded-lg sm:px-10">
                    <h2 className="mb-6 text-center text-2xl font-bold text-gray-900">Sign in to <span className='text-indigo-600'>Admin Dashboard</span> </h2>
                    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email address
                            </label>
                            <div className="mt-1">
                                <input
                                    id="email"
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    // onChange={e => setEmail(e.target.value)}
                                    {...register("email", { required: true })}
                                />
                                {errors.email && <p className="text-red-600 text-xs">This field is required</p>}

                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <div className="mt-1">
                                <input
                                    id="password"
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    // onChange={e => setPassword(e.target.value)}
                                    {...register("password", { required: true })}

                                />
                                {errors.password && <p className="text-red-600 text-xs">This field is required</p>}
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>

                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300" />
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-gray-500">Welcome</span>
                            </div>
                        </div>
                    </div>
                    <ToastContainer />
                </div>
            </div>
        </div>
    )
}

export default LoginPage

