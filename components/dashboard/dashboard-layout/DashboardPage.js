import React from 'react'

const Dashboard = ({ posts, portfolios }) => {
    return (
        <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <li key={posts?.id} className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
                <div className="w-full flex items-center justify-between p-4 space-x-6">
                    <div className="flex-1 truncate">
                        <div className="flex items-center space-x-3">
                            <h3 className="text-gray-900 text-sm font-medium truncate">Total Active Posts</h3>
                        </div>
                    </div>
                    <h2 className="border px-3 py-1 rounded-lg text-indigo-700 text-base font-semibold" >{posts?.length}</h2>

                </div>
            </li>
            <li key={posts?.id} className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
                <div className="w-full flex items-center justify-between p-4 space-x-6">
                    <div className="flex-1 truncate">
                        <div className="flex items-center space-x-3">
                            <h3 className="text-gray-900 text-sm font-medium truncate">Total Portfolios</h3>
                        </div>
                    </div>
                    <h2 className="border px-3 py-1 rounded-lg text-indigo-700 text-base font-semibold" >{portfolios?.length}</h2>

                </div>
            </li>
            <li key={posts?.id} className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
                <div className="w-full flex items-center justify-between p-4 space-x-6">
                    <div className="flex-1 truncate">
                        <div className="flex items-center space-x-3">
                            <h3 className="text-gray-900 text-sm font-medium truncate">Total Messages</h3>
                        </div>
                    </div>
                    <h2 className="border px-3 py-1 rounded-lg text-indigo-700 text-base font-semibold" >0</h2>
                </div>
            </li>
            <li key={posts?.id} className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
                <div className="w-full flex items-center justify-between p-4 space-x-6">
                    <div className="flex-1 truncate">
                        <div className="flex items-center space-x-3">
                            <h3 className="text-gray-900 text-sm font-medium truncate">Total Visitors</h3>
                        </div>
                    </div>
                    <h2 className="border px-3 py-1 rounded-lg text-indigo-700 text-base font-semibold" >0</h2>
                </div>
            </li>
        </ul>
    )
}

export default Dashboard
