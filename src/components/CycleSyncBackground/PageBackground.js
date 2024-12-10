import './PageBackground.css'

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
                <img
                    src = "/src/assets/BackgorundImage.png"
                    alt = "Background Image"
                    className = "BackgroundImage"
                />
                {/* <div className = "Frame1">
                    <h1 className = "Question1">Do you keep track of your menstrual cycle?</h1>
                    <button className = "YesButton">YES</button>
                    <button className = "NoButton">NO</button>
                </div> */}
            </div>
        </div>
    )
}

export default PageBackground;