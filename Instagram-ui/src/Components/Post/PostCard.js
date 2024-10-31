import React, { useState } from 'react'
import { BsBookmark, BsBookmarkFill, BsEmojiSmile, BsThreeDots } from "react-icons/bs";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { FaRegComment } from 'react-icons/fa';
import { RiSendPlaneLine } from 'react-icons/ri';
import CommentModel from '../ProfileComponents/CommentModel';


const PostCard = () => {

    const [isPostliked, setIspostliked] = useState(false);
    const [isSaved, setIsSaved] = useState(false);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handlePostLiked = () => {
        setIspostliked(!isPostliked)
    }

    const handleSavedPost = () => {
        setIsSaved(!isSaved)
    }

    return (
        <div>
            <div className='border rounded-md w-full'>
                <div className='flex justify-between items-center w-full py-4 px-5'>
                    <div className='flex items-center'>
                        <img
                            className='w-8 h-8 rounded-full'
                            src='https://cdn.pixabay.com/photo/2023/02/12/12/45/iron-man-7785032_640.jpg' alt='' />

                        <div className='pl-2'>
                            <p className='text-sm font-semibold'>UserName</p>
                            <p className='text-sm font-thin'>Location</p>
                        </div>
                    </div>


                    <div>
                        <Button
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            <BsThreeDots />
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={handleClose}>Delete</MenuItem>
                        </Menu>
                    </div>
                </div>


                <div className='w-full'>
                    <img
                        className='w-full'
                        src='https://cdn.pixabay.com/photo/2021/08/14/04/15/mountains-6544522_640.jpg'
                        alt=''
                    />
                </div>

                <div className='flex justify-between items-center px-5 py-4 w-full'>
                    <div className='flex items-center space-x-5'>
                        {isPostliked ? <AiFillHeart onClick={handlePostLiked} className='text-2xl hover:opacity-50 cursor-pointer text-pink-500' /> : <AiOutlineHeart className='text-2xl hover:opacity-50 cursor-pointer' onClick={handlePostLiked} />}
                        <FaRegComment className='text-2xl hover:opacity-50 cursor-pointer' />

                        <RiSendPlaneLine className='text-2xl hover:opacity-50 cursor-pointer' />
                    </div>

                    <div>
                        {
                            isSaved ? <BsBookmarkFill className='text-2xl hover:opacity-50 cursor-pointer' onClick={handleSavedPost} /> : <BsBookmark className='text-2xl hover:opacity-50 cursor-pointer' onClick={handleSavedPost} />
                        }
                    </div>
                </div>

                <div className='w-full py-2 px-5'>
                    <p>10 Likes</p>
                    <p className='cursor-pointer opacity-50 py-2'>View all 10 Comments</p>
                </div>


                <div className="flex items-center w-full px-5 py-2 border-t border-gray-300">
                    <BsEmojiSmile className="text-gray-500 mr-3" size={20} />
                    <input
                        type="text"
                        placeholder="Add a comment..."
                        className="flex-grow px-4 py-2 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        aria-label="Add a comment"
                    />
                </div>

                <div>
                    <CommentModel />
                </div>
            </div>
        </div>
    )
}

export default PostCard
