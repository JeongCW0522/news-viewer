import { useState } from "react";
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);
  const onClick = async () => {
    try {
      const respone = await axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=6d2a8dda301d4c37aab928d46dd6446a', );
      setData(respone.data);
    } catch(e) {
      console.log(e);
    }
  };

  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && <textarea rows = {7} value={JSON.stringify(data, null, 2)} readOnly = {true} />}
    </div>
  )
}

export default App;
