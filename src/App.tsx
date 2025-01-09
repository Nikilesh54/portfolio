
import './App.css'
import Home from "./Home.tsx";
import {Analytics} from "@vercel/analytics/next";

function App() {

  return (
      <>
        <Home/>
        <Analytics/>
      </>


  )
}

export default App
