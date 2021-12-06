import React from 'react'
import { MailIcon } from '@heroicons/react/solid'
const people = [
    {
        name: 'Active Post',
        title: 'Regional Paradigm Technician',
        role: 'Posts',
        email: 'janecooper@example.com',
        telephone: '+1-202-555-0170',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
]
const SettingPage = ({heroContent}) => {
    console.log(heroContent);
    return (
        <>
            <div className="flex space-x-10 my-5">
                <div className="w-full md:w-1/2">
                    <h3 className="mb-3 text-lg font-semibold">Hero Section Setting</h3>
                    <div className="">
                        <form action="#" method="POST" className="grid grid-cols-1 gap-y-3">
                            <div>
                                <input
                                    type="text"
                                    name="title"
                                    id="title"
                                    className="block w-full shadow-sm py-1 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border rounded-md"
                                    placeholder="Heading"
                                />
                            </div>
                            <div>
                                <input
                                    id="author"
                                    name="author"
                                    type="text"
                                    className="block w-full shadow-sm py-1 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border rounded-md"
                                    placeholder="Sub-Heading"
                                />
                            </div>
                            <div>
                                <input
                                    id="author"
                                    name="author"
                                    type="text"
                                    className="block w-full shadow-sm py-1 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border rounded-md"
                                    placeholder="Button Link-1"
                                />
                            </div>
                            <div>
                                <input
                                    id="author"
                                    name="author"
                                    type="text"
                                    className="block w-full shadow-sm py-1 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border rounded-md"
                                    placeholder="Button Link-2"
                                />
                            </div>
                            <div>
                                <div className="mt-1 flex justify-center px-6 py-1 border-2 border-gray-300 border-dashed rounded-md">
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
                                <button
                                    type="submit"
                                    className="inline-flex justify-center py-1 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 w-full"
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <h3 className="mb-3 text-lg font-semibold">Existing Section</h3>
                    <ul role="list" className="space-y-4">
                        {people.map((person) => (
                            <li key={person.email} className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
                                <div className="w-full p-6">
                                    <img className="w-1/3 mx-auto bg-gray-300 rounded-lg flex-shrink-0" src={`http://127.0.0.1:8000/${heroContent.image}`} alt="" />
                                    <div className="my-5">
                                        <h3 className="text-gray-900 text-lg font-medium text-center">Syed Rezwanul Haque.</h3>
                                        <p className="mt-1 text-gray-500 text-sm text-center">{heroContent.text}</p>
                                    </div>
                                    <div className="my-5 flex">
                                        <h1 className="mr-4 text-sm flex py-1">Button-1 : </h1>
                                        <button className="py-1 px-4 border rounded-lg text-sm ">{heroContent.btn_link_one}</button>
                                    </div>
                                    <div className="my-5 flex">
                                        <h1 className="mr-4 text-sm flex py-1">Button-1 : </h1>
                                        <button className="py-1 px-4 border rounded-lg text-sm ">{heroContent.btn_link_two}</button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <hr />
            <div className="flex space-x-10 my-5">
                <div className="w-full md:w-1/2">
                    <h3 className="mb-3 text-lg font-semibold">Social Link Setting</h3>
                    <div className="">
                        <form action="#" method="POST" className="grid grid-cols-1 gap-y-3">
                            <div>
                                <input
                                    id="author"
                                    name="author"
                                    type="text"
                                    className="block w-full shadow-sm py-1 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border rounded-md"
                                    placeholder="Facebook"
                                />
                            </div>
                            <div>
                                <input
                                    id="author"
                                    name="author"
                                    type="text"
                                    className="block w-full shadow-sm py-1 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border rounded-md"
                                    placeholder="Twitter"
                                />
                            </div>
                            <div>
                                <input
                                    id="author"
                                    name="author"
                                    type="text"
                                    className="block w-full shadow-sm py-1 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border rounded-md"
                                    placeholder="Linkedin"
                                />
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="inline-flex justify-center py-1 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 w-full"
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <h3 className="mb-3 text-lg font-semibold">Existing Social Links</h3>
                    <ul role="list" className="space-y-4">
                        {people.map((person) => (
                            <li key={person.email} className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
                                <div className="w-full p-6 space-y-3">
                                    <div className="flex">
                                        <h1 className="mr-4 text-sm flex py-1">Facebook : </h1>
                                        <button className="py-1 px-4 border rounded-lg text-sm ">http://souravkairsdsdy.me</button>
                                    </div>
                                    <div className="flex">
                                        <h1 className="mr-4 text-sm flex py-1">Twitter : </h1>
                                        <button className="py-1 px-4 border rounded-lg text-sm ">http://souravkaisdsddsdry.me</button>
                                    </div>
                                    <div className="flex">
                                        <h1 className="mr-4 text-sm flex py-1">Linkedin : </h1>
                                        <button className="py-1 px-4 border rounded-lg text-sm ">http://souravkaisdsddsdry.me</button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default SettingPage
