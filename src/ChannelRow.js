import React from 'react';
import './ChannelRow.css';
import Avatar from '@material-ui/core/Avatar';
import CheckIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
function ChannelRow({Image,Channel,Verified,Subs,NoVideos,Description}) {
    return (
        <div className="ChannelRow">
            <Avatar className="ChannelRow__logo" alt={Channel} src={Image}/>
            <div className="ChannelRow__text">
    <h4>{Channel} {Verified && <CheckIcon/>}</h4>
    <p>{Subs} Subscribers * {NoVideos} videos</p>
    <p>{Description}</p>
            </div>
        </div>
    )
}

export default ChannelRow
