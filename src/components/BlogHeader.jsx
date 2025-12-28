import { Link as RouterLink } from "react-router-dom"
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

function BlogHeader({ title }) {

    return (
        <div className="bg-blue80 rounded-md text-white py-10 px-6 text-center">
            <h1 className="text-3xl ">
                {title}
            </h1>
            <div className="mt-5 text-white text-sm flex justify-center">
                <Breadcrumbs
                    aria-label="breadcrumb"
                    separator=">"
                    sx={{
                        fontFamily: "'Montserrat', sans-serif",
                        color : "#FFFFFF"}}
                >
                    <Link 
                        component={RouterLink}
                        to="/"
                        underline="hover"
                        sx = {{
                            fontFamily: "'Montserrat', sans-serif",
                            color : "#FFFFFF"}}
                    >
                        Blog
                    </Link>
                    <Typography
                        sx={{
                            fontFamily: "'Montserrat', sans-serif",
                            color : "#FFFFFF"
                        }}
                        >
                            {title}
                    </Typography>
                </Breadcrumbs>
            </div>
        </div>
    );
}

export default BlogHeader;