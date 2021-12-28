import React from 'react'
import { useForm } from "react-hook-form";
import axios from 'axios';
import { ApiUrl } from "../../../config/ApiConfig";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const SettingPage = ({ heroContent, seoContent, ctaContents, linkContents, onslCreated, onSeoCreated, onHsCreated, onCtaCreated }) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();
    const seoDataSubmit = (data) => {
        const formData = new FormData();
        formData.append('meta_title', data.meta_title);
        formData.append('meta_description', data.meta_description);
        formData.append('canonical_link', data.canonical_link);
        formData.append('seo_image', data.seo_image[0]);
        formData.append('site_name', data.site_name);

        axios.post(ApiUrl + 'admin/seo', formData, {
            headers: {
                'Content-Type': `multipart/form-data`
            }
        })
            .then(res => res.data)
            .then(({ message, seo }) => {
                reset()
                toast.success(message)
                onSeoCreated(seo)
            })
            .catch(err => {
                err.response.data && toast.success(err.response.data.message)
                console.log(err.response.data);
            });
    };
    const SocialLinkDataSubmit = (data) => {
        axios.post(ApiUrl + 'admin/social-link', data)
            .then(res => res.data)
            .then(({ message, links }) => {
                reset()
                toast.success(message)
                onslCreated(links)
            })
            .catch(err => {
                err.response.data && toast.success(err.response.data.message)
                console.log(err.response.data);
            });
    };
    const HeroDataSubmit = (data) => {
        const formData = new FormData();
        formData.append('heading', data.heading);
        formData.append('sub_heading', data.sub_heading);
        formData.append('text', data.text);
        formData.append('btn_link_one', data.btn_link_one);
        formData.append('btn_link_two', data.btn_link_two);
        formData.append('image', data.image[0]);
        axios.post(ApiUrl + 'admin/hero', formData, {
            headers: {
                'Content-Type': `multipart/form-data`
            }
        })
            .then(res => res.data)
            .then(({ message, hero }) => {
                reset()
                toast.success(message)
                onHsCreated(hero)
            })
            .catch(err => {
                err.response.data && toast.success(err.response.data.message)
                console.log(err.response.data);
            });
    };
    const CtaDataSubmit = (data) => {
        const formData = new FormData();
        formData.append('heading', data.cta_heading);
        formData.append('sub_heading', data.cta_sub_heading);
        formData.append('image', data.cta_image[0]);
        axios.post(ApiUrl + 'admin/cta', formData, {
            headers: {
                'Content-Type': `multipart/form-data`
            }
        })
            .then(res => res.data)
            .then(({ message, cta }) => {
                reset()
                toast.success(message)
                onCtaCreated(cta)
            })
            .catch(err => {
                err.response.data && toast.error(err.response.data.message)
                console.log(err.response.data);
            });
    };
    return (
        <>
            <div className="flex space-x-10 my-5">
                <div className="w-full md:w-1/2">
                    <h3 className="mb-3 text-lg font-semibold">Hero Section Setting</h3>
                    <div className="">
                        <form onSubmit={handleSubmit(HeroDataSubmit)} className="grid grid-cols-1 gap-y-3">
                            <div>
                                <input
                                    type="text"
                                    id="title"
                                    className="block w-full shadow-sm py-1.5 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border rounded-md"
                                    placeholder="Heading"
                                    {...register("heading")}
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    className="block w-full shadow-sm py-1.5 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border rounded-md"
                                    placeholder="Sub-Heading"
                                    {...register("sub_heading")}
                                />
                            </div>
                            <div>
                                <textarea
                                    row={4}
                                    type="text"
                                    id="title"
                                    className="block w-full shadow-sm py-1.5 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border rounded-md"
                                    placeholder="Text"
                                    {...register("text")}
                                />
                            </div>
                            <div>
                                <input
                                    id="button_one"
                                    type="text"
                                    className="block w-full shadow-sm py-1.5 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border rounded-md"
                                    placeholder="Button Link-1"
                                    {...register("btn_link_one")}
                                />
                            </div>
                            <div>
                                <input
                                    id="button_two"
                                    name="author"
                                    type="text"
                                    className="block w-full shadow-sm py-1.5 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border rounded-md"
                                    placeholder="Button Link-2"
                                    {...register("btn_link_two")}
                                />
                            </div>
                            <div>
                                <div className="mt-1 flex justify-center px-6 py-1.5 border-2 border-gray-300 border-dashed rounded-md">
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
                                                <input id="file-upload" type="file" {...register("image")}
                                                    className="sr-only" />
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
                                    className="inline-flex justify-center py-1.5 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 w-full"
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
                        <li key={heroContent?.id} className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
                            <div className="w-full p-6">
                                <img className="w-1/3 mx-auto bg-gray-300 rounded-lg flex-shrink-0" src={heroContent?.image_url} alt="" />
                                <div className="my-5">
                                    <h3 className="text-gray-900 text-lg font-medium text-center">{heroContent?.heading}</h3>
                                    <h3 className="text-gray-900 text-lg font-normal text-center">{heroContent?.sub_heading}</h3>
                                    <p className="mt-1 text-gray-500 text-sm text-center">{heroContent?.text}</p>
                                </div>
                                <div className="my-5 flex">
                                    <h1 className="mr-4 text-sm flex py-1.5">Button-1 : </h1>
                                    <button className="py-1.5 px-4 border rounded-lg text-sm ">{heroContent?.btn_link_one}</button>
                                </div>
                                <div className="my-5 flex">
                                    <h1 className="mr-4 text-sm flex py-1.5">Button-1 : </h1>
                                    <button className="py-1.5 px-4 border rounded-lg text-sm ">{heroContent?.btn_link_two}</button>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className="flex space-x-10 my-5">
                <div className="w-full md:w-1/2">
                    <h3 className="mb-3 text-lg font-semibold">Social Link Setting</h3>
                    <div className="">
                        <form onSubmit={handleSubmit(SocialLinkDataSubmit)} className="grid grid-cols-1 gap-y-3">
                            <div>
                                <input
                                    id="facebook"
                                    type="text"
                                    className="block w-full shadow-sm py-1.5 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border rounded-md"
                                    placeholder="Facebook"
                                    {...register("facebook")}
                                />
                            </div>
                            <div>
                                <input
                                    id="twitter"
                                    type="text"
                                    className="block w-full shadow-sm py-1.5 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border rounded-md"
                                    placeholder="twitter"
                                    {...register("twitter")}

                                />
                            </div>
                            <div>
                                <input
                                    id="linkedin"
                                    type="text"
                                    className="block w-full shadow-sm py-1.5 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border rounded-md"
                                    placeholder="Linkedin"
                                    {...register("linkedin")}

                                />
                            </div>
                            <div>
                                <input
                                    id="youtube"
                                    type="text"
                                    className="block w-full shadow-sm py-1.5 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border rounded-md"
                                    placeholder="youtube"
                                    {...register("youtube")}

                                />
                            </div>
                            <div>
                                <input
                                    id="linkedin"
                                    type="text"
                                    className="block w-full shadow-sm py-1.5 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border rounded-md"
                                    placeholder="Instagram"
                                    {...register("instagram")}

                                />
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="inline-flex justify-center py-1.5 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 w-full"
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
                        <li key={linkContents.id} className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
                            <div className="w-full p-6 space-y-3">
                                <div className="flex justify-between">
                                    <h1 className="mr-4 text-sm flex py-1.5">Facebook : </h1>
                                    <button className="py-1.5 px-4 border rounded-lg text-sm ">{linkContents?.facebook}</button>
                                </div>
                                <div className="flex justify-between">
                                    <h1 className="mr-4 text-sm flex py-1.5">Twitter : </h1>
                                    <button className="py-1.5 px-4 border rounded-lg text-sm ">{linkContents?.twitter}</button>
                                </div>
                                <div className="flex justify-between">
                                    <h1 className="mr-4 text-sm flex py-1.5">Linkedin : </h1>
                                    <button className="py-1.5 px-4 border rounded-lg text-sm ">{linkContents?.linkedin}</button>
                                </div>
                                <div className="flex justify-between">
                                    <h1 className="mr-4 text-sm flex py-1.5">Youtube : </h1>
                                    <button className="py-1.5 px-4 border rounded-lg text-sm ">{linkContents?.youtube}</button>
                                </div>
                                <div className="flex justify-between">
                                    <h1 className="mr-4 text-sm flex py-1.5">Instagram : </h1>
                                    <button className="py-1.5 px-4 border rounded-lg text-sm ">{linkContents?.instagram}</button>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className="flex space-x-10 my-5">
                <div className="w-full md:w-1/2">
                    <h3 className="mb-3 text-lg font-semibold">Seo Setting</h3>
                    <div className="">
                        <form onSubmit={handleSubmit(seoDataSubmit)} className="grid grid-cols-1 gap-y-3">
                            <div>
                                <input
                                    id="meta_title"
                                    type="text"
                                    className="block w-full shadow-sm py-1.5 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border rounded-md"
                                    placeholder="Meta title"
                                    {...register("meta_title")}
                                />
                            </div>
                            <div>
                                <textarea
                                    rows={4}
                                    id="meta_description"
                                    type="text"
                                    className="block w-full shadow-sm py-1.5 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border rounded-md"
                                    placeholder="Meta Description"
                                    {...register("meta_description")}
                                />
                            </div>
                            <div>
                                <input
                                    id="canonical_link"
                                    type="text"
                                    className="block w-full shadow-sm py-1.5 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border rounded-md"
                                    placeholder="Canonical"
                                    {...register("canonical_link")}
                                />
                            </div>
                            <div>
                                <input
                                    id="seo_image"
                                    type="file"
                                    className="block w-full shadow-sm py-1.5 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border rounded-md"
                                    placeholder="SEO Image"
                                    {...register("seo_image")}
                                />
                            </div>
                            <div>
                                <input
                                    id="site_name"
                                    type="text"
                                    className="block w-full shadow-sm py-1.5 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border rounded-md"
                                    placeholder="Site Name"
                                    {...register("site_name")}
                                />

                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="inline-flex justify-center py-1.5 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 w-full"
                                >
                                    Save
                                </button>
                                <ToastContainer />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <h3 className="mb-3 text-lg font-semibold">Existing Contents</h3>
                    <ul role="list" className="space-y-4">
                        <li key={seoContent.id} className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
                            <div className="w-full p-6 space-y-3">
                                <div className="flex justify-between">
                                    <h1 className="mr-4 text-sm flex py-1.5">Meta Title: </h1>
                                    <button className="py-1.5 px-4 border rounded-lg text-sm ">{seoContent.meta_title}</button>
                                </div>
                                <div className="flex justify-between">
                                    <h1 className="mr-4 text-sm flex py-1.5">Meta Description : </h1>
                                    <button className="py-1.5 px-4 border rounded-lg text-sm text-left">{seoContent.meta_description}</button>
                                </div>
                                <div className="flex justify-between">
                                    <h1 className="mr-4 text-sm flex py-1.5">Canonical Link : </h1>
                                    <button className="py-1.5 px-4 border rounded-lg text-sm ">{seoContent.canonical_link}</button>
                                </div>
                                <div className="flex justify-between">
                                    <h1 className="mr-4 text-sm flex py-1.5">Seo Image : </h1>
                                    <img src={seoContent.image_url} alt="" className='w-1/3 bg-gray-300 rounded-lg flex-shrink-0' />
                                </div>
                                <div className="flex justify-between">
                                    <h1 className="mr-4 text-sm flex py-1.5">Site Name : </h1>
                                    <button className="py-1.5 px-4 border rounded-lg text-sm ">{seoContent.site_name}</button>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className="flex space-x-10 my-5">
                <div className="w-full md:w-1/2">
                    <h3 className="mb-3 text-lg font-semibold">Cta Section Setting</h3>
                    <div className="">
                        <form onSubmit={handleSubmit(CtaDataSubmit)} className="grid grid-cols-1 gap-y-3">
                            <div>
                                <input
                                    type="text"
                                    id="title"
                                    className="block w-full shadow-sm py-1.5 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border rounded-md"
                                    placeholder="Heading"
                                    {...register("cta_heading")}
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    className="block w-full shadow-sm py-1.5 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border rounded-md"
                                    placeholder="Sub-Heading"
                                    {...register("cta_sub_heading")}
                                />
                            </div>
                            <div>
                                <input
                                    id="cta_image"
                                    type="file"
                                    className="block w-full shadow-sm py-1.5 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border rounded-md"
                                    placeholder="Cta Image"
                                    {...register("cta_image")}
                                />
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="inline-flex justify-center py-1.5 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 w-full"
                                >
                                    Save
                                </button>
                                <ToastContainer />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <h3 className="mb-3 text-lg font-semibold">Existing Section</h3>
                    <ul role="list" className="space-y-4">
                        <li key={heroContent?.id} className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
                            <div className="w-full p-6">
                                <img className="w-1/3 mx-auto bg-gray-300 rounded-lg flex-shrink-0" src={ctaContents?.image_url} alt="" />
                                <div className="my-5">
                                    <h3 className="text-gray-900 text-lg font-medium text-center">{ctaContents?.heading}</h3>
                                    <p className="mt-1 text-gray-500 text-sm text-center">{ctaContents?.sub_heading}</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default SettingPage
