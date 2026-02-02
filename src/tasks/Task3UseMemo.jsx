import { useState, useMemo } from "react";
import { slowCalculation } from "../components/ExpensiveCalc";

export default function Task3UseMemo() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);
// utguud hagdalah state


// number oorchlogdoh bvrt calculate dahin ajillana 
// number oorchlogdoogvi bol cached result hiine UI gatsahgvi performance saijrina
  const result = useMemo(() => {
    return slowCalculation(number);
  }, [number]);

  return (
    <div>
      <h2>Task 3 — useMemo</h2>

      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />

      <button onClick={() => setDark(!dark)}>
        Toggle Theme
      </button>

      <p>Result: {result}</p>
    </div>
  );
}

// | Action        | Parent render | slowCalculation run? |
// | ------------- | ------------- | -------------------- |
// | Input өөрчлөх | ✅             | ✅                    |
// | Theme toggle  | ✅             | ❌                    |
