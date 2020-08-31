import React from 'react'
import './VideoRow.css';
function VideoRow({Views,Subs,Description,Timestamp,Channel,Title,Image}) {
    return (
        <div className="VideoRow">
            <div className="VideoRow__Image">
            <img src={Image} alt=""></img>
            </div>
            <div className="VideoRow__Text">
    <h3>{Title}</h3>
    <p className="VideoRow__headline">{Channel} * <span className="VideoRow__Sub"><span className="VideoRow__SubsNumber"> {Subs} </span> Subscribers </span> {Views} * Views {Timestamp}</p>
    <p className="VideoRow__Description">{Description}</p>
            </div>
            
        </div>
    )
}

export default VideoRow
