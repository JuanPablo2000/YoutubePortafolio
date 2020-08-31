import React from 'react';

import Tuneout from '@material-ui/icons/TuneOutlined';
import './SearchPage.css';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
import VideoGit from './VideoGit';
function SearchPage() {
    return (
        <div className="SearchPage">
            <div className="SearchPage__filter">
                <Tuneout/>
                <h2>FILTER</h2>
            </div>
            <hr></hr>
            
            <ChannelRow
            Image="https://avatars0.githubusercontent.com/u/63992632?s=460&u=90631f48513e8cee5c501255494fc45ff35aebbf&v=4"
            Channel="JuanPB"
            Verified
            Subs="12M"
            NoVideos={359}
            Description="Systems Engineering Student interested in web and software development to improve and learn about technology"
            >
            </ChannelRow>
            <hr></hr>
            <VideoRow
            Views="66.4M"
            Subs="63M"
            Description="Learn Flexbox, Flexbox VS Grid, the most useful ways for coding with CSS"
            Timestamp="90 minutes ago"
            Channel="CODE"
            Title="FlexBox Vs Grid"
            Image="https://i.ytimg.com/an_webp/RSIclWvNTdQ/mqdefault_6s.webp?du=3000&sqp=CNjvsPoF&rs=AOn4CLCuzlNrd_TZ3NcOzIf3OqpZoC4ECQ"
            ></VideoRow>
             <VideoRow
            Views="3.4M"
            Subs="1.3M"
            Description="The best Javascript Frameworks 2020-2021"
            Timestamp="9 days ago"
            Channel="Victor Robles"
            Title="Angular + React + Vue"
            Image="https://i.ytimg.com/vi_webp/IxG7UuFCxKI/mqdefault.webp"
            ></VideoRow>
             <VideoRow
            Views="114K"
            Subs="100K"
            Description="Learn about the most famous databases in 2020 SQL Vs NoSQL DB"
            Timestamp="6 months ago"
            Channel="EDteam"
            Title=" SQL Vs NoSQL Databases"
            Image="https://i.ytimg.com/an_webp/knVwokXITGI/mqdefault_6s.webp?du=3000&sqp=CNrYsPoF&rs=AOn4CLDniNTlnTVixmyyrU44J6i3vIAURw"
            ></VideoRow>
            <VideoGit></VideoGit>
        </div>
    )
}

export default SearchPage
