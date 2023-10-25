import React from 'react'
import './Content.css'
const Content = () => {
    return (
        <div className="box">
            <div className="cont">
                <h2>Explore </h2>
                <p> Home</p>
                <p> Questions</p>
                <p> Articles</p>
                <p> Tutorials</p>
            </div>
            <div className="sub-cont">
                <h2> Support</h2>
                <p> FAQ's</p>
                <p> Help</p>
                <p> Contact Us</p>
            </div>
            <div className="connected">
                <h2> Stay Connected</h2>
                <div className="images">
                    <img src='./insta.png' width="40px" height="40px" />
                    <img src='./twitter.png' width="40px" height="40px" />
                    <img src='./face.png' width="40px" height="40px" />

                </div>
            </div>
            <div className="diya">
                <h2> Dev@Deakin 2022</h2>
                <div className="rowdy">
                    <p> Privacy Policy</p>
                    <p> Terms</p>
                    <p> Code of Conduct</p>
                </div>
            </div>
        </div>
    )

}
export default Content