import React from 'react'
import StoryCircle from '../../Components/Story/StoryCircle'
import HomeRight from '../../Components/HomeRight/HomeRight'
import PostCard from '../../Components/Post/PostCard'

const HomePage = () => {
    return (
        <div>
            <div className='mt-10 flex w-[100%] justify-center'>
                <div className='w-[45%] px-10'>
                    <div className='storydiv flex space-x-2 border rounded-md justify-start w-full'>
                        {[1, 1, 1, 1, 1].map((item) => <StoryCircle />)}
                    </div>

                    <div className='space-y-8 w-full mt-10'>
                        {[1, 1, 1, 1].map((item) => <PostCard />)}
                    </div>
                </div>

                <div className='w-[38%]'>
                    <HomeRight />
                </div>

                
            </div>
        </div>
    )
}

export default HomePage
