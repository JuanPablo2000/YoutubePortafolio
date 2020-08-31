import React from 'react';
import Avatar from '@material-ui/core/Avatar';

function VideoCard({image,title,channel,views,timestamp,channelimage}) {
    return (
        <div className="VideoCard">
            <img className="image_tumbnail" src={image} alt=""></img>
            <div className="Video__Info">
                <Avatar className="VideoCard__Avatar" alt={channel} src={channelimage}></Avatar>
                <div className="Video__Text">
                <h4>{title}</h4>
                <p>{channel}</p>
                <p>{views} ° {timestamp}</p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard
