import Header from "../common-section/header"
import Image from 'next/image'
const heroSection = ({ content }) => {
    return (
        <div className="relative bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                    <Header />
                    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                        <div className="sm:text-center lg:text-left">
                            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-4xl">
                                <span className="block xl:inline">{content?.heading},</span>{' '}<br />
                                <span className="block text-indigo-600 xl:inline">{content?.sub_heading}</span>
                            </h1>
                            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                {content?.text}
                            </p>
                            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                <div className="rounded-md shadow">
                                    <a
                                        href={content?.btn_link_one}
                                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-2 md:text-lg md:px-8"
                                    >
                                        Email Me
                                    </a>
                                </div>
                                <div className="mt-3 sm:mt-0 sm:ml-3">
                                    <a
                                        href={content?.btn_link_two}
                                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-2 md:text-lg md:px-8"
                                    >
                                        Live demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                {/* <Image src= {`http://127.0.0.1:8000/${content.image}`}
                    className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" layout='fill'
                /> */}
                <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src={content?.image_url} alt="" />
            </div>
        </div>
    )
}

export default heroSection

