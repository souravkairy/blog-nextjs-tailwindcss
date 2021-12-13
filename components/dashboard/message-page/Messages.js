import React from 'react'
import Link from 'next/link'
import SvgEyeRegular from '../../../public/icon-components/EyeRegular';
import SvgTrashRegular from '../../../public/icon-components/TrashRegular';

const Messages = ({ all_messages }) => {
    console.log(all_messages);
    return (
        <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Name
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        email
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Message
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {all_messages?.map((message) => (
                                    <Link href="#" >
                                        <tr key={message.id}>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-500">{message.name}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-500">{message.email}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-500">{message.message.substr(0, 60) + ' . . . . . . .'}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                                                <button className="border p-1.5 rounded-lg hover:bg-gray-100 text-green-500 bg-green-100 border-green-200" title="View">
                                                    <SvgEyeRegular />
                                                </button>
                                                <button className="border p-1.5 rounded-lg hover:bg-gray-100 text-red-500 bg-red-100 border-red-200" title="Trash">
                                                    <SvgTrashRegular />
                                                </button>
                                            </td>
                                        </tr>
                                    </Link>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Messages
