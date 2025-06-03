import Sidebar from "./components/sidebar"
import Header from "./components/Header"
import Maincomp from "./components/Maincomp"
import Footer from "./components/Footer"


function App() {
  return (
    <div className="siteSize">
        <div className="site-container">
          <Sidebar />
          <Header />
          <Maincomp />
          <Footer />
        </div>
    </div>
  ) 
}

export default App