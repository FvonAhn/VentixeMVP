import { useState } from "react"
import Sidebar from "./components/Sidebar"
import Header from "./components/Header"
import Maincomp from "./components/Maincomp"
import Footer from "./components/Footer"
import UserLogin from "./components/UserLogin"


function App() {
  const [activeView, setActiveView] = useState("")
  const [user, setUser] = useState(null);

  if(!user) {
    return <UserLogin onLogin={setUser} />
  }

  return (
    <div className="siteSize">
        <div className="site-container">
          <Sidebar setActiveView={setActiveView} activeView={activeView}/>
          <Header user={user} />
          <Maincomp activeView={activeView} />
          <Footer />
        </div>
    </div>
  ) 
}

export default App