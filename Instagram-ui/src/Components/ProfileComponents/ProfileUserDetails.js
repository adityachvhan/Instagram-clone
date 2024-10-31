import React from 'react'
import { TbCircleDashed } from "react-icons/tb";
const ProfileUserDetails = () => {
    return (
        <div className='py-10'>
            <div className='flex items-center'>
                <div className='w-[15%]'>
                    <img
                        className='w-32 h-32 rounded-full'
                        src='https://cdn.pixabay.com/photo/2023/04/07/09/19/woman-7905926_1280.jpg' alt='no image found' />
                </div>


                <div className='space-y-3'>
                    <div className='flex items-center space-x-10'>
                        <p>Username</p>
                        <button>Edit Profile</button>
                        <TbCircleDashed />
                    </div>


                    <div className='flex space-x-10'>
                        <div>
                            <span className='font-semibold mr-2'>10</span>
                            <span>Post</span>
                        </div>

                        <div>
                            <span className='font-semibold mr-2'>5</span>
                            <span>Followers</span>
                        </div>

                        <div>
                            <span className='font-semibold mr-2'>10</span>
                            <span>Followings</span>
                        </div>
                    </div>

                    <div>
                        <p className='font-semibold'>Full Name</p>
                        <p className='font-thin text-sm'>Java Developer | Coder | Travler | Youtuber</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileUserDetails
