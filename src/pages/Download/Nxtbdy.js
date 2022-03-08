import React from 'react'
import background from '../../images/slack-mobile-ios-and-android.png'
export default  function Nxtbdy () {
    return (
        <>
        <div className="flex items-center w-full h-[500px] bg-[#f4ede4]">
            <div className="flex flex-col items-start ml-32">
                <span className="text-4xl font-bold">Stay in sync <br />from anywhere</span>
                <span className="text-2xl">Take teamwork to go with the<br /> Slack apps for<button href="#">Android</button> and <button href="#">iOS.</button></span>
            </div>
            <div>
               <img alt="thecoder" src={`${background}`} className="overflow-hidden absolute top-[700px] right-32 z-30 w-inherit"/>
               <div className="h-64 w-[410px] z-10 bg-[#2eb67d] rounded-tl-[250px] rounded-bl-[250px] absolute right-0 top-[850px]"></div>
            </div>
        </div>
        </>
    )
}