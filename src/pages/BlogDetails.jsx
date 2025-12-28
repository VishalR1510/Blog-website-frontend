import { useEffect , useMemo , useState } from "react";
import BlogHeader from "../components/BlogHeader";
import { blogData } from "../data/blogData";
import { useParams, Link } from "react-router-dom";   
import RecentBlogs from "../components/RecentBlogs";
import BlogContent from "../components/BlogContent";    

function BlogDetails() {

    const { id } = useParams();

    const blog = blogData.find(
        (item) => item.id === Number(id)
    )

    const [recentBlogs, setRecentBlogs] = useState([]);

    useEffect(() => {
        const shuffled = [...blogData]
            .filter((b) => b.id !== Number(id))
            .sort(() => 0.5 - Math.random())
            .slice(0, 3);
        setRecentBlogs(shuffled);
    }, [blogData, id]);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, [id]);

    return (
        <div className="min-h-screen">
            <div className="max-w-7xl mx-auto px-4 pt-10">
                <BlogHeader 
                title = {blog.title}/>
            </div>
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-10 gap-8">
                    <BlogContent blog = {blog} />
                    <RecentBlogs blogs ={recentBlogs} />
                </div>
            </div>


        </div>
    );
}

export default BlogDetails;