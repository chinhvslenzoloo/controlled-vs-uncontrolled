import { useState } from "react";
import ChildMemo from "../components/ChildMemo";

export default function Task1Memo() {
  const [count, setCount] = useState(0);
  // counter state dotor hadgalj baina

  return (
    <div>
       {/* Render-iin flow */}
       {/* increase buttong darah toolond render hiine */}

      <h2>Task 1 — React.memo</h2>

      <p>Counter: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
     
      {/* <ChildMemo/> react.memo-toi baigaa childmemo dahin render bolohgvi console deer zowhon anhnii render garna */}
      {/* 3️⃣ Test хийх

          1️⃣ Browser console нээ
          2️⃣ Increase дарахад:

          Counter update болно

          ChildMemo console log дахин гарахгүй ✅

          3️⃣ Тэгэхээр React.memo ажиллаж байна */}
      <ChildMemo />
    </div>
  );
}
