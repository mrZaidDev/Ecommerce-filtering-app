import { useState } from "react"
import DisplayShoes from "./Components/DisplayShoes"
import Navbar from "./Components/Navbar"
import Sidebar from "./Components/Sidebar"
import ShoesDataArray from './Components/shoesData'

const App = () => {
  const [shoesData,setShoesData] = useState(ShoesDataArray)
  return (
    <div>
      <Navbar shoesData={shoesData} setShoesData={setShoesData}/>
     <div className="flex items-start">
       <Sidebar shoesData={shoesData} setShoesData={setShoesData} />
    <DisplayShoes shoesData={shoesData}/>
     </div>
    </div>
  )
}

export default App
