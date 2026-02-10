
import Landing from './Components/Landing'
import RoseDay from './Components/RoseDay'
import ProposeDay from './Components/ProposeDay'
import ChocolateDay from './Components/ChocolateDay'
import ValentineDay from './Components/ValentineDay'
import { Routes, Route } from "react-router-dom";

function App() {
   return (
   <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/rose" element={<RoseDay />} />
      <Route path="/propose" element={<ProposeDay />} />
      <Route path="/chocolate" element={<ChocolateDay />} />
      <Route path="/valentine" element={<ValentineDay />} />
    </Routes>
   )
}

export default App
