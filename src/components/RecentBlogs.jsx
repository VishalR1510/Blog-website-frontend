import React from "react";
import {Link} from "react-router-dom"

function RecentBlogs({ blogs }) {
    return (
        <aside className="lg:col-span-3 bg-white p-6 sticky top-0 h-fit">
            <h3 className="text-lg text-blackChinese font-semibold mb-4">
                Recent blogs
            </h3>

            <div className="space-y-4">
                {blogs.map((item) => (
                    <Link key={item.id} to={`/blog/${item.id}`}>
                        <div
                            className="flex gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded-lg transition"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-16 h-16 object-cover rounded"
                            />
                            <p className="text-sm">
                                {item.title}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </aside>
    );
}

export default RecentBlogs;