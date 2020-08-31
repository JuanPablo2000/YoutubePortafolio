import React from 'react';
import './SidebarRow.css';
function SidebarRow({Selected,Icon,title}) {
    return (
        <div className={`SidebarRow ${Selected && "Selected"}`}>
            <Icon className="SidebarRow__Icon" />
            <h3 className="SidebarRow__title">{title}</h3>
        </div>
    )
}

export default SidebarRow
