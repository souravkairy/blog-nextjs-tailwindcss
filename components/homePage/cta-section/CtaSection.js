import React from 'react'

const ctaSection = ({content}) => {
    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto py-10 px-5 md:px-10">
                <div className="bg-indigo-700 rounded-lg overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
                    <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
                        <div className="lg:self-center">
                            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                                <span className="block">{content?.heading}</span>
                            </h2>
                            <p className="mt-4 text-base leading-6 text-indigo-200">
                            {content?.sub_heading}
                            </p>
                            <a
                                href="#contact"
                                className="mt-8 bg-white border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-indigo-600 hover:bg-indigo-50"
                            >
                                Contact Me
                            </a>
                        </div>
                    </div>
                    <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
                        <img
                            className="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
                            src=  {content?.image_url}
                            alt="App screenshot"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ctaSection


