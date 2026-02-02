import { useState, useCallback } from "react";
import CallbackChild from "../components/CallbackChild";

export default function Task2Callback() {
  const [count, setCount] = useState(0);
// useCallback Handleclick functiong memoize hiij bainaa dependency array hooson 
// render bvrt dahin shine function vvsehgvi
  const handleClick = useCallback(() => {
    console.log("Child button clicked");
  }, []);

  return (
    <div>
      <h2>Task 2 — useCallback</h2>

      <p>Counter: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increase Counter
      </button>

      <CallbackChild onClick={handleClick} />
    </div>
  );
}


// 1. counter darwal parent render hiine
// 2. Handleclick reference oorchloogvi bol childdemo render bolohgvi
// 3.child button darwal console deer hewlene 

// | Feature                | Ашигласан                     |
// | ---------------------- | ----------------------------- |
// | Expensive child render | ✅ React.memo                  |
// | Function props         | ✅ useCallback                 |
// | Parent rerender effect | ✅ Child render хязгаарлагдсан |
