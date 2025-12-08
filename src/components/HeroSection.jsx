import React from "react";

function HeroSection(props) {
    return (
        <div className="flex flex-col justify-center items-center min-h-[300px]">
            <h1 className="text-center text-4xl text-blackChinese font-semibold mb-4">{props.heading}</h1>
            <p className="text-center text-lg text-black60 max-w-xl">{props.subHeading}</p>
        </div>
    )
}
export default HeroSection