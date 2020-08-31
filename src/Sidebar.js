import React from 'react';
import SidebarRow from './SidebarRow';
import HomeIcon from '@material-ui/icons/Home';
import Subscription from '@material-ui/icons/Subscriptions';
import Trending from '@material-ui/icons/Whatshot';
import Videolibrary from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import Ondemand from '@material-ui/icons/OndemandVideo';
import Watchlater from '@material-ui/icons/WatchLater';
import Tumbup from '@material-ui/icons/ThumbUpAlt';
import Expandmore from '@material-ui/icons/ExpandMore';


import './Sidebar.css';
function Sidebar() {
    return (
        <div className="sidebar">
           
            <SidebarRow Selected Icon={HomeIcon} title="Home"/>
            <SidebarRow Icon={Trending} title="Trending"/>
            <SidebarRow Icon={Subscription} title="Subscription"/>

          <hr></hr>
          <SidebarRow Icon={Videolibrary} title="Library"/>
            <SidebarRow Icon={HistoryIcon} title="History"/>
            <SidebarRow Icon={Ondemand} title="Your Videos"/>
            <SidebarRow Icon={Watchlater} title="Watch Later"/>
            <SidebarRow Icon={Tumbup} title="Liked Videos"/>
            <SidebarRow Icon={Expandmore} title="Show more"/>

            <hr></hr>
        </div>
    )
}

export default Sidebar
