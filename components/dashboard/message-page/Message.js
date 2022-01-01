import React from 'react'

const Message = ({content}) => {
    console.log(content);
    return (
        <div className='border p-4 mx-auto max-w-3xl rounded-lg my-4'>
            <div className='space-y-2'>
                <p className='text-base'><strong className='font-semibold'>Name : </strong>{content?.name}</p>
                <p className='text-base'><strong className='font-semibold'>Email : </strong>{content?.email}</p>
                <p className='text-base'><strong className='font-semibold'>Phone : </strong>{content?.phone}</p>
                <p className='text-base'><strong className='font-semibold'>Message : </strong>{content?.message}</p>
            </div>
        </div>
    )
}

export default Message
