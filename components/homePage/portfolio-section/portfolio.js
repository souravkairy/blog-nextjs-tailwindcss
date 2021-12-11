import React from 'react'
const portfolio = ({ contents }) => {
    return (
        <div className="bg-white" id="products">
            <div className="max-w-7xl mx-auto py-10 text-center px-5 md:px-10">
                <div className="space-y-8 sm:space-y-8">
                    <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-7xl">
                        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Companies, Brands & Partners</h2>
                        <p className="text-base text-gray-500">
                            Since 2010, I was fortunate enough to work with few big companies like Elance, Upwork, Microsoft. Later,
                            I initiated in few products & services, and started my dream company Technext Limited.
                        </p>
                    </div>
                    <ul
                        role="list"
                        className="mx-auto grid grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-5 md:gap-x-6 lg:max-w-7xl lg:gap-x-6 lg:gap-y-6 xl:grid-cols-6"
                    >
                        {contents.map((data) => (
                            <li key={data.id} className="border px-3 py-5 rounded-lg hover:border-indigo-600 cursor-pointer hover:shadow-sm">
                                <div className="space-y-4">
                                    <img className="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src={data.image_url} alt="" />
                                    <div className="space-y-2">
                                        <div className="text-xs font-medium lg:text-sm">
                                            <h3>{data.heading}</h3>22
                                            <p className="text-indigo-600">{data.sub_heading}</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default portfolio
