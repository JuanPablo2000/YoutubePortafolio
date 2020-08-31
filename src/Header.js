import React,{ useState } from 'react';
import './Header.css';
import MenuSharp from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCall from '@material-ui/icons/VideoCall';
import Apps from '@material-ui/icons/Apps';
import Notifications from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import {Link} from "react-router-dom";
function Header() {
    const [inputSearch, setInputSearch] = useState("");
    return (
        
        <div className="header">
            <div className="header__left">
            <div className="header__menu">
            <MenuSharp></MenuSharp>
            </div>
            <div className="header__logo">
                <Link to={`/`}>
                <img src="https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg" alt=""></img>
                </Link>
           
            </div>
            </div>
            

            <div className="header__central">
            
            <input onChange={e=> setInputSearch(e.target.value)} value={inputSearch} type="text" placeholder="Search"></input>
          <Link to={`/search/${inputSearch}`}>
          <SearchIcon className="header__searchbtn"/>
          </Link>
           
           
            </div>
            
            
            <div className="header__right ">
            <Link to={`/search/${inputSearch}`}>
            <SearchIcon className="btnhidden header__right__icon"/>
            </Link>
            <VideoCall className="header__right__icon"></VideoCall>
            <Apps className="header__right__icon"/>
            <Notifications className="header__right__icon"/>
            <Avatar className="header__right__icon avatar" alt="JuanPB" src="https://avatars0.githubusercontent.com/u/63992632?s=460&u=90631f48513e8cee5c501255494fc45ff35aebbf&v=4"/>

            </div>

        </div>
    )
}

export default Header
