import FacebookIcon from '../../../public/icon-components/FacebookSquareBrands'
import InstagramIcon from '../../../public/icon-components/InstagramSquareBrands'
import TwitterIcon from '../../../public/icon-components/TwitterSquareBrands'
import LinkedinIcon from '../../../public/icon-components/LinkedinBrands'
import YoutubeIcon from '../../../public/icon-components/YoutubeSquareBrands'
const footer = ({ socialLinks }) => {
    return (
        <footer className="bg-white border-t">
            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
                <div className="flex justify-center space-x-2 md:order-2">
                    <a href={socialLinks?.facebook} className="text-gray-400 hover:text-gray-500">
                        <FacebookIcon />
                    </a>
                    <a href={socialLinks?.instagram} className="text-gray-400 hover:text-gray-500">
                        <InstagramIcon />
                    </a>
                    <a href={socialLinks?.twitter} className="text-gray-400 hover:text-gray-500">
                        <TwitterIcon />
                    </a>
                    <a href={socialLinks?.linkedin} className="text-gray-400 hover:text-gray-500">
                        <LinkedinIcon />
                    </a>
                    <a href={socialLinks?.youtube} className="text-gray-400 hover:text-gray-500">
                        <YoutubeIcon />
                    </a>
                </div>
                <div className="mt-8 md:mt-0 md:order-1">
                    <p className="text-center text-base text-gray-400">&copy; 2020 Workflow, Inc. All rights reserved.</p>
                </div>
            </div>
        </footer >
    )
}

export default footer

