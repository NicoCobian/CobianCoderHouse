import React, {useState} from "react";


export default function Counter() {
  const [count, setCount] = useState(0);
  const handlecount = () => {
    if (count < 9) {
      setCount (count + 1);
    }
  }
  return(
  <>
<p>{count}</p>
  <button onClick={handlecount}>contador</button>
  <input type="button" value="-" onClick={() => setCount(count - 1)} />
  {count}
  <input type="button" value="+" onClick={() => setCount(count + 1)} />
  </>
  );
}