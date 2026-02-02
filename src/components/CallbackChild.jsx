import React from "react";

const CallbackChild = React.memo(({ onClick }) => {
// CallbackChild functional component ym
// { onclick } props-oos onclick functiong awch baina
// 1. React.Memo components memoize hiihnee
  console.log("👶 CallbackChild rendered");
// 2. components render bvrt console deer hewlene
  return (
    <button onClick={onClick}>
      Child Button
    </button>
    // 3.button render
  );
});

export default CallbackChild;
