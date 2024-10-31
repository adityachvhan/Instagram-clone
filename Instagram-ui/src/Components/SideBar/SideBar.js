import React, { useState } from 'react';
import { IoReorderThreeOutline } from 'react-icons/io5';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { mainMenu } from './SideBarConfig';
import { useNavigate } from 'react-router-dom';

const SideBar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [activeTab, setActiveTab] = useState("");

    const navigate = useNavigate();

    const handleToggle = () => {
        setCollapsed((prev) => !prev);
    };

    const handleTabClick = (title) => {
        setActiveTab(title);
        if (title === "Profile") {
            navigate("/username");
        } else if (title === "Home") {
            navigate("/");
        }
    };

    return (
        <div className='sticky top-0 h-[100vh]'>
            <div className='flex flex-col justify-between h-full'>
                <div className='pt-10'>
                    {!collapsed && (
                        <img src="https://i.imgur.com/zqpwkLQ.png" alt="Logo" className="w-40" />
                    )}
                </div>

                <div className='mt-10'>
                    <List>
                        {mainMenu.map((item) => (
                            <ListItem
                                onClick={() => handleTabClick(item.title)}
                                key={item.title}
                                className='flex items-center mb-3 cursor-pointer text-lg'
                            >
                                <ListItemIcon>
                                    {activeTab === item.title ? item.activeIcon : item.icon}
                                </ListItemIcon>
                                {!collapsed && (
                                    <ListItemText
                                        className={`${activeTab === item.title ? "font-bold" : "font-semibold"}`}
                                        primary={item.title}
                                    />
                                )}
                            </ListItem>
                        ))}
                    </List>
                </div>

                <div className='flex items-center cursor-pointer pb-10'>
                    <ListItem onClick={handleToggle}>
                        <ListItemIcon>
                            <IoReorderThreeOutline />
                        </ListItemIcon>
                        {!collapsed && <ListItemText primary="More" />}
                    </ListItem>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
