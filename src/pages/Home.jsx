import HeroSection from '../components/HeroSection'
import BlogOverview from '../components/BlogOverview'
import { useEffect } from 'react';

function Home() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);

    return (
        <>
            <HeroSection
                heading = "Welcome To Tech Blog"
                subHeading = "Your go-to source for the latest updates, expert guidance, and practical strategies to help you stay informed and empowered." />
            <BlogOverview />
        </>
    )
}

export default Home;