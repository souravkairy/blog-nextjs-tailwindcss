import React from 'react'
import Image from 'next/image'

const Post = ({ content }) => {
    return (
        <div className='border p-4 mx-auto max-w-3xl rounded-lg my-4'>
            <div>
                <p className='text-base'><strong className='font-semibold'>Title : </strong>{content.title}</p>
                <p className='text-base'><strong className='font-semibold'>Author : </strong>{content.author}</p>
                <p className='text-base'><strong className='font-semibold'>Meta Title : </strong>{content.meta_title}</p>
                <p className='text-base'><strong className='font-semibold'>Meta Descriptions : </strong>{content.meta_description}</p>
            </div>
            <div>
                
                <img src={content.image_url} alt="" className='py-4' />
            </div>
            <div>
                <p>{content.text}</p>
            </div>


        </div>

    )
}

export default Post


