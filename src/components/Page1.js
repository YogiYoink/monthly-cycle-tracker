import React from 'react';
import './Page1.css'

function Page1() {

    return (
        <div className = "PageFrame1">
            <h1 className = "Question1">Do you keep track of your menstrual cycle?</h1>
            <div className = "ContentFrame1">
                <button className = "YesButton">YES</button>
                <button className = "NoButton">NO</button>
            </div>
        </div>
    )
}

export default Page1;