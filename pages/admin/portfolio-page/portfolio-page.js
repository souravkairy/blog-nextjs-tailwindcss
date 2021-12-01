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
    {
        name: 'Total Post',
        title: 'Regional Paradigm Technician',
        role: 'Posts',
        email: 'janecooper@example.com',
        telephone: '+1-202-555-0170',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
        name: 'Total Visitor',
        title: 'Regional Paradigm Technician',
        role: 'Users',
        email: 'janecooper@example.com',
        telephone: '+1-202-555-0170',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
]
const PortfolioPage = ({ posts }) => {
    return (
        <div className="flex space-x-10">
            <div className="w-1/2">
                <h3 className="mb-3 text-lg font-semibold">Add Portfolio</h3>
                <div className="">
                    <form action="#" method="POST" className="grid grid-cols-1 gap-y-4">
                        <div>
                            <input
                                type="text"
                                name="title"
                                id="title"
                                className="block w-full shadow-sm py-2 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border rounded-md"
                                placeholder="Heading"
                            />
                        </div>
                        <div>
                            <input
                                id="author"
                                name="author"
                                type="text"
                                className="block w-full shadow-sm py-2 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border rounded-md"
                                placeholder="Sub-Heading"
                            />
                        </div>
                        <div>
                            <input
                                id="author"
                                name="author"
                                type="text"
                                className="block w-full shadow-sm py-2 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border rounded-md"
                                placeholder="Link"
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
            <div className="w-1/2">
                <h3 className="mb-3 text-lg font-semibold">Portfolio List</h3>
                <ul role="list" className="space-y-4">
                    {people.map((person) => (
                        <li key={person.email} className="col-span-1 bg-white rounded-lg shadow-md divide-y divide-gray-200">
                            <div className="w-full flex items-center justify-between p-6 space-x-6">
                                <div className="flex-1 truncate">
                                    <div className="flex items-center space-x-3">
                                        <h3 className="text-gray-900 text-base font-medium truncate">{person.name}</h3>
                                        <button className="border p-1 rounded-lg hover:bg-gray-100 text-red-500 bg-red-100 border-red-200">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                        </button>
                                    </div>
                                    <p className="mt-1 text-gray-500 text-sm truncate">{person.title}</p>
                                </div>
                                <img className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0" src={person.imageUrl} alt="" />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    )
}
export default PortfolioPage

