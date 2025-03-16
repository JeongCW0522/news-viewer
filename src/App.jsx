import Categories from "./components/Categories.jsx";
import NewList from "./components/NewList.jsx";
import { useState, useCallback } from "react";

function App() {
  const [category, setCategory] = useState('all');
  const onSelect = useCallback(category => setCategory(category), []);

  return (
    <>
      <Categories category = {category} onSelect = {onSelect} />
      <NewList category = {category} />
    </>
  )
}

export default App;
