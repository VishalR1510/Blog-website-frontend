import React from "react";

function Footer() {
    return (
        <footer className="bg-gray-100 py-8">
            <div className="flex flex-col items-center justify-center">
                <h2 className="text-2xl text-blue80 font-semibold text- mb-7 text-center">Blog Website</h2>

                <ul className="flex gap-8 mb-7 text-blackChinese justify-center">
                    <li><a href="#">Link1</a></li>
                    <li><a href="#">Link2</a></li>
                    <li><a href="#">Link3</a></li>
                    <li><a href="#">Link4</a></li>
                    <li><a href="#">Link5</a></li>
                </ul>
                <p className="text-sm text-blackChinese mb-2 text-center">© {new Date().getFullYear()} Vishal. All Right Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;