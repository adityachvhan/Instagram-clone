import React from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { FaComment } from 'react-icons/fa'
import './ReqUserPostCard.css'

const ReqUserPostCard = () => {
    return (
        <div>
            <div className='post w-60 h-60'>
                <img
                    className='cursor-pointer'
                    src='https://cdn.pixabay.com/photo/2023/05/03/09/42/dragon-7967117_640.jpg'
                    alt='no image found' />

                <div className='overlay cursor-pointer'>
                    <div className='overlay-text flex justify-center gap-5'>
                        <div>
                            <AiFillHeart />
                            <span>10</span>
                        </div>
                        <div>
                            <FaComment />
                            <span>30</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReqUserPostCard
