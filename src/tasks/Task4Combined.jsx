import { useState, useMemo, useCallback } from "react";
import React from "react";
// Child component React.memo-toi
// function props ni door baigaa callback refrence togtrowtoi baina
// Parent render bolson c Child dahin render bolohgvi
// console zowhon initial render garch irne
const Child = React.memo(({ onIncrement }) => {
  console.log("🚀 Combined Child Rendered");

  return (
    <button onClick={onIncrement}>
      Increase From Child
    </button>
  );
});
// slow func
// usememo-tei holbosnood parent render bvrt dahin ajillahgvi baina
function slowCalculation(num) {
  console.time("Heavy Calculation");

  let result = 0;
  for (let i = 0; i < 100000000; i++) {
    result += num;
  }

  console.timeEnd("Heavy Calculation");

  return result;
}

export default function Task4Combined() {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);
// datagaa hadgalah State

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);
// Chilld component ruu func props damjuulj baigaa
// useCallback refrence togtwortoi React.Memo ajillana
// Herwee calback baihgvi bol function shine reference bolj child dahin render hiine


  const calculated = useMemo(() => {
    return slowCalculation(count);
  }, [count]);

  // count oorchlogdoh bvrt slow calc ajillana
  // count oorchlogdoogvi bol cached result ashiglaad
  // Theme toggle hiihed slow calc dahin ajillahgvi

  return (
    <div style={{
      background: dark ? "#111" : "#fff",
      color: dark ? "#fff" : "#000",
      padding: "20px"
    }}>
      <h2>Task 4 — Combined Optimization</h2>

      <p>Count: {count}</p>
      <p>Calculation Result: {calculated}</p>

      <button onClick={() => setDark(!dark)}>
        Toggle Theme
      </button>

      <Child onIncrement={increment} />
    </div>
  );
}

// | Action                        | Parent render | slowCalculation run?      | Child render?              |
// | ----------------------------- | ------------- | ------------------------- | -------------------------- |
// | Count increase (Child button) | ✅             | ✅                         | ❌ (Child already memoized) |
// | Theme toggle                  | ✅             | ❌                         | ❌                          |
// | Parent state update           | ✅             | cached / dependency check | ❌                          |
