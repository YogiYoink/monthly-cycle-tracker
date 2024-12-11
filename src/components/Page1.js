import React from 'react';
import './Page1.css'

function Page1() {

    return (
        <div className = "PageFrame1">
            <div className = "Question1">Do you keep track of your menstrual cycle?</div>
            <div className = "ButtonFrame1">
                <button className = "YesButton">YES</button>
                <button className = "NoButton">NO</button>
            </div>
        </div>
    )
}

export default Page1;