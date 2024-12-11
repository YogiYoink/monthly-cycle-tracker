import React from 'react';
import './PageBackground.css'
import Page1 from './Page1';

function PageBackground() {

    return (
        <div className = "PageBackground">
            <div className = "Header">
                <div className = "TitleText">
                    <div className = "TitleFrame">
                        <h1 className = "CycleText">Cycle</h1>
                        <h1 className = "SyncText">Sync</h1>
                    </div>
                    <div className = "LineText"></div>
                    <div className = "TaglineTextFrame">
                        <h2 className = "TaglineText">Stay in Sync with Every Cycle</h2>
                    </div>
                </div>
            </div>
            <div className = "PageBody">
                <Page1/>
            </div>
        </div>
    )
}

export default PageBackground;