import React from "react";
import { blogData } from "../data/blogData";
import Blog from "./Blog";

function BlogOverview() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {blogData.map((blog) => (
                <Blog 
                    key={blog.id}
                    id={blog.id}
                    image={blog.image}
                    title={blog.title}
                    shortDescription={blog.shortDescription}
                />
            ))}
        </div>
    )
}

export default BlogOverview