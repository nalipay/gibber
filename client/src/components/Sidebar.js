import React from 'react'
import { BsChatDots, BsThreeDotsVertical, BsPersonCircle, BsCircle, BsSearch } from 'react-icons/bs';
import Avatar from 'react-avatar';
import SidebarChat from './SidebarChat';

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebar-header">
            <Avatar googleId="118096717852922241760" size="50" round={true} />
                 <div className="sidebar-header-icons">
                    <BsCircle />
                    <BsChatDots />
                    <BsThreeDotsVertical />
                 </div>
            </div>
            <div className="sidebar-search">
                 <div className="search-container">
                    <BsSearch />
                    <input className='search-field' placeholder='Search or start new chat' type='text' />
                 </div>
            </div>
            <div className="sidebar-chats">
                <SidebarChat />
                <SidebarChat />

            </div>
        </div>
    )
}

export default Sidebar