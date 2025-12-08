import React from "react";

function Header() {
    return (
        <header className="w-full bg-white">
            <nav className="flex items-center justify-between px-10 py-4">
                <h1 className="text-2xl text-blue80 font-semibold">Blog Website</h1>
                <ul className="flex gap-6 text-blackChinese">
                    <li><a href="#">Link1</a></li>
                    <li><a href="#">Link2</a></li>
                    <li><a href="#">Link3</a></li>
                    <li><a href="#">Link4</a></li>
                    <li><a href="#">Link5</a></li>
                    <li><a href="#" className="px-4 py-2 bg-blue80 text-white rounded-sm">Contact us</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header