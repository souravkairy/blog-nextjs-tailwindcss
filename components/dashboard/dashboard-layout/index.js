import { Fragment, useState, useEffect } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import { MenuAlt1Icon, ViewListIcon, XIcon, } from '@heroicons/react/outline'
import HomeRegular from '../../../public/icon-components/HomeRegular'
import ThListSolid from '../../../public/icon-components/ThListSolid'
import InboxInSolid from '../../../public/icon-components/InboxInSolid'
import StreamSolid from '../../../public/icon-components/StreamSolid'
import CogsSolid from '../../../public/icon-components/CogsSolid'
import { SearchIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import { useRouter } from 'next/router'
const navigation = [
    { name: 'Home', href: 'dashboard', icon: <HomeRegular />, current: true },
    { name: 'All Post', href: 'posts', icon: <ThListSolid />, current: false, },
    { name: 'Portfolio', href: 'portfolio', icon: <StreamSolid />, current: false, },
    { name: 'Settings', href: 'settings', icon: <CogsSolid />, current: false, },
    { name: 'Messages', href: 'messages', icon: <InboxInSolid />, current: false, },
]
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const DashboardLayout = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [slug, setSlug] = useState('')
    const router = useRouter();
    const routingSlug = router.pathname;
    useEffect(() => {
        setSlug(routingSlug)
    }, [setSlug])
    console.log(slug);
    return (
        <div className="min-h-full">
            <Transition.Root show={sidebarOpen} as={Fragment}>
                <Dialog as="div" className="fixed inset-0 flex z-40 lg:hidden" onClose={setSidebarOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
                    </Transition.Child>
                    <Transition.Child
                        as={Fragment}
                        enter="transition ease-in-out duration-300 transform"
                        enterFrom="-translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition ease-in-out duration-300 transform"
                        leaveFrom="translate-x-0"
                        leaveTo="-translate-x-full"
                    >
                        <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-in-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in-out duration-300"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className="absolute top-0 right-0 -mr-12 pt-2">
                                    <button
                                        type="button"
                                        className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                        onClick={() => setSidebarOpen(false)}
                                    >
                                        <span className="sr-only">Close sidebar</span>
                                        <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </button>
                                </div>
                            </Transition.Child>
                            <div className="flex-shrink-0 flex items-center px-4">
                                <h1 className="text-lg font-medium leading-6 text-gray-900 sm:truncate">Admin-Dashboard</h1>
                            </div>
                            <div className="mt-5 flex-1 h-0 overflow-y-auto">
                                <nav className="px-2">
                                    <div className="space-y-1">
                                        {navigation.map((item) => (
                                            <Link href={item.href} key={item.name}>
                                                <a
                                                    className={classNames(
                                                        '/admin/' + item.href === slug
                                                            ? 'bg-gray-100 text-gray-900'
                                                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50',
                                                        'group flex items-center px-2 py-2 text-base leading-5 font-medium rounded-md'
                                                    )}
                                                    aria-current={item.current ? 'page' : undefined}
                                                >
                                                    <p className={classNames(
                                                        '/admin/' + item.href === slug ? 'bg-gray-200 text-gray-900' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50',
                                                        'group flex items-center px-2 py-0.5 text-sm font-medium rounded-md'
                                                    )}>{item.icon}</p>
                                                    {item.name}
                                                </a>
                                            </Link>
                                        ))}
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </Transition.Child>
                    <div className="flex-shrink-0 w-14" aria-hidden="true">
                        {/* Dummy element to force sidebar to shrink to fit close icon */}
                    </div>
                </Dialog>
            </Transition.Root>

            {/* Static sidebar for desktop */}
            <div className="hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 lg:border-r lg:border-gray-200 lg:pt-5 lg:pb-4 lg:bg-gray-100">
                <div className="flex items-center flex-shrink-0 px-6">
                    <h1 className="text-lg font-medium leading-6 text-gray-900 sm:truncate">Admin-Dashboard</h1>
                </div>
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className="mt-6 h-0 flex-1 flex flex-col overflow-y-auto">
                    {/* Navigation */}
                    <nav className="px-3 mt-6">
                        <div className="space-y-1">
                            {navigation.map((item) => (
                                <Link href={item.href} key={item.name}>
                                    <a
                                        key={item.name}
                                        className={classNames(
                                            '/admin/' + item.href === slug ? 'bg-gray-200 text-gray-900' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50',
                                            'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                                        )}
                                        aria-current={item.current ? 'page' : undefined}
                                    >
                                        <p className={classNames(
                                            '/admin/' + item.href === slug ? 'bg-gray-200 text-gray-900' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50',
                                            'group flex items-center px-2 py-0.5 text-sm font-medium rounded-md'
                                        )}>{item.icon}</p>

                                        {item.name}
                                    </a>
                                </Link>
                            ))}
                        </div>
                    </nav>
                </div>
            </div>
            {/* Main column */}
            <div className="lg:pl-64 flex flex-col">
                {/* Search header */}
                <div className="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200 lg:hidden">
                    <button
                        type="button"
                        className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 lg:hidden"
                        onClick={() => setSidebarOpen(true)}
                    >
                        <span className="sr-only">Open sidebar</span>
                        <MenuAlt1Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                    <div className="flex-1 flex justify-between px-4 sm:px-6 lg:px-8">
                        <div className="flex-1 flex">
                            <form className="w-full flex md:ml-0" action="#" method="GET">
                                <label htmlFor="search-field" className="sr-only">
                                    Search
                                </label>
                                <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                                    <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                                        <SearchIcon className="h-5 w-5" aria-hidden="true" />
                                    </div>
                                    <input
                                        id="search-field"
                                        name="search-field"
                                        className="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent focus:placeholder-gray-400 sm:text-sm"
                                        placeholder="Search"
                                        type="search"
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="flex items-center">
                            {/* Profile dropdown */}
                            <Menu as="div" className="ml-3 relative">
                                <div>
                                    <Menu.Button className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                                        <span className="sr-only">Open user menu</span>
                                        {/* <h1 className="text-lg font-medium leading-6 text-gray-900 sm:truncate">Admin-Dashboard</h1> */}
                                    </Menu.Button>
                                </div>
                            </Menu>
                        </div>
                    </div>
                </div>
                <main className="flex-1">
                    {/* Page title & actions */}
                    <div className="border-b border-gray-200 px-4 py-4 flex items-center justify-between sm:px-6 lg:px-8">
                        <div className="min-w-0">
                            {/* <h1 className="text-lg font-medium leading-6 text-gray-900 sm:truncate">Admin-Dashboard</h1> */}
                        </div>
                        <div className="md:ml-4 flex">
                            <div className="mt-1 mr-3 text-gray-900">
                                <Link href="/">
                                    <a>
                                        <HomeRegular />
                                    </a>
                                </Link>
                            </div>
                            <button
                                type="button"
                                className="px-4 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 sm:order-0 sm:ml-0"
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                    <div className="px-4 mt-6 sm:px-6 lg:px-8">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    )
}

export default DashboardLayout
