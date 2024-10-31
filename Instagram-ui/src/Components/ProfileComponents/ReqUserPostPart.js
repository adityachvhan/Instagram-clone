import React, { useState } from 'react';
import { AiOutlineTable } from "react-icons/ai";
import { RiVideoAddLine } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import { BiBookmark } from "react-icons/bi";
import ReqUserPostCard from './ReqUserPostCard';

const ReqUserPostPart = () => {
    const [activeTab, setActiveTab] = useState("Post");

    const tabs = [
        {
            tab: "Post",
            icon: <AiOutlineTable />
        },
        {
            tab: "Reels",
            icon: <RiVideoAddLine />
        },
        {
            tab: "Saved",
            icon: <BiBookmark />
        },
        {
            tab: "Tagged",
            icon: <AiOutlineUser />
        }
    ];

    return (
        <div>
            <div className='flex border-t space-x-14 relative'>
                {tabs.map((item, index) => (
                    <div
                        key={index}
                        onClick={() => setActiveTab(item.tab)}
                        className={`${activeTab === item.tab ? "border-t border-black" : "opacity-60"} flex items-center cursor-pointer py-2 text-sm`}
                    >
                        <p>{item.icon}</p>
                        <p className='text-sm ml-3'>{item.tab}</p>
                    </div>
                ))}
            </div>
            <div>
                <div className='flex flex-wrap gap-2 mt-2'> 
                    {[1, 1, 1, 1, 1].map((item, index) => (
                        <ReqUserPostCard key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ReqUserPostPart;
