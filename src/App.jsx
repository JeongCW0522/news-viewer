import { Route, Routes } from "react-router-dom";
import Newspage from "./pages/Newspage";

function App() {

  return (
    <Routes>
      <Route path="/" element = {<Newspage />} />
      <Route path="/:category" element = {<Newspage />} />
    </Routes>
  )
}

export default App;
