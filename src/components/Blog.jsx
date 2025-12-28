import React from "react";
import { Link } from "react-router-dom";

function Blog(props) {
    return (
        <Link to={`/blog/${props.id}`} className="block">
            <div className="bg-white rounded-lg overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow">
                <img
                    src={props.image}
                    alt={props.title}
                    className="w-full h-48 object-cover"
                />
                <div className="p-4 flex flex-col flex-grow">
                    <h2 className="text-lg text-blackChinese font-semibold mb-2">{props.title}</h2>
                    <p className="text-black60 text-sm">{props.shortDescription}</p>
                </div>
            </div>
        </Link>
    );
}

export default Blog;
