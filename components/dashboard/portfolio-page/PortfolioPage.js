import { useForm } from "react-hook-form";
import axios from 'axios';
import { ApiUrl } from "../../../config/ApiConfig";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const PortfolioPage = ({ contents, onCreated, onDeleted }) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();
    const onSubmit = (data) => {
        const formData = new FormData();
        formData.append('heading', data.heading);
        formData.append('sub_heading', data.sub_heading);
        formData.append('link', data.link);
        formData.append('image', data.image[0]);

        axios.post(ApiUrl + 'admin/portfolios', formData, {
            headers: {
                'Content-Type': `multipart/form-data`
            }
        })
            .then(res => res.data)
            .then(({ message, portfolio }) => {
                reset()
                toast.success(message)
                onCreated(portfolio)
            })
            .catch(err => {
                err.response.data && toast.success(err.response.data.message)
            });
    };

    //delete operation
    const deleteOperation = (id) => {
        axios.delete(ApiUrl + "portfolios/" + id)
            .then(() => toast.success('Deleted'))
            .then(onDeleted(id));
    }
    return (
        <div className="flex space-x-4">
            <div className="w-full md:w-1/2">
                <h3 className="mb-3 text-lg font-semibold">Add Portfolio</h3>
                <div className="">
                    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <input
                                id="heading"
                                className="block w-full shadow-sm py-2 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border rounded-md"
                                placeholder="Heading"
                                {...register("heading", { required: true })}
                            />
                            {errors.heading && <p className="text-red-600 text-xs">This field is required</p>}
                        </div>
                        <div>
                            <input
                                id="sub_heading"
                                className="block w-full shadow-sm py-2 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border rounded-md"
                                placeholder="Sub-Heading"
                                {...register("sub_heading", { required: true })}
                            />
                            {errors.sub_headng && <p className="text-red-600 text-xs">This field is required</p>}
                        </div>
                        <div>
                            <input
                                id="link"
                                className="block w-full shadow-sm py-2 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border rounded-md"
                                placeholder="Link"
                                {...register("link", { required: true })}
                            />
                            {errors.link && <p className="text-red-600 text-xs">This field is required</p>}
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
                                            <input id="file-upload" type="file" className="sr-only"
                                                {...register("image", { required: true })}
                                            />
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
                                Submit
                            </button>
                            <ToastContainer />
                        </div>
                    </form>
                </div>
            </div>
            <div className="w-full md:w-1/2">
                <h3 className="mb-3 text-lg font-semibold">Portfolio List</h3>
                <ul role="list" className="space-y-4">
                    {contents?.map((data) => (
                        <li key={data.id} className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
                            <div className="w-full flex items-center justify-between p-4 space-x-6">
                                <div className="flex-1 truncate">
                                    <div className="flex items-center space-x-3">
                                        <h3 className="text-gray-900 text-base font-medium truncate">{data.heading}</h3>
                                        <button className="border p-1 rounded-lg hover:bg-gray-100 text-red-500 bg-red-100 border-red-200" onClick={() => deleteOperation(data.id)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                        </button>
                                    </div>
                                    <p className="mt-1 text-gray-500 text-sm truncate">{data.sub_heading}</p>
                                </div>
                                <img className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0" src={data.image_url} alt="" />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
export default PortfolioPage

