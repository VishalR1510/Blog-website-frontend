import React from "react";

function BlogContent({ blog }) {
    return (
        <div className="lg:col-span-7 bg-white p-6 ">
            <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-72 object-cover mb-6"
            />

            <p className="text-blackChinese leading-relaxed">
                {blog.content}
            </p>
        </div>
    );
}

export default BlogContent;