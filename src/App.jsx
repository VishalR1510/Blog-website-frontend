import './index.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import BlogOverview from './components/BlogOverview'
import Footer from "./components/Footer"

function App() {
  return (
    <div className="w-full min-h-screen">
      <Header />
      <HeroSection
      heading = "Welcome To Tech Blog"
      subHeading = "Your go-to source for the latest updates, expert guidance, and practical strategies to help you stay informed and empowered." />
      <BlogOverview />
      <Footer />
      
    </div>
  )
}

export default App
